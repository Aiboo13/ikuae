const express = require('express');
const router = express.Router();
const oracledb = require('oracledb');
const getConnection = require('../Db/db'); // HAPUS kurung kurawal { }

router.post('/tamu', async (req, res) => {
  let connection;
  
  try {
    console.log('📥 Request body:', req.body);
    
    const { nama_tamu, email, password, no_hp, alamat } = req.body;
    
    // Validasi input
    if (!nama_tamu || !email || !password || !no_hp || !alamat) {
      return res.status(400).json({ message: 'Semua field wajib diisi' });
    }

    // Get connection
    connection = await getConnection(); // ini sekarang function
    console.log('✅ Database connected');

    // Cek email duplikat
    const checkEmail = await connection.execute(
      'SELECT id_tamu FROM tamu WHERE LOWER(email) = LOWER(:email)',
      { email },
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );
    
    if (checkEmail.rows.length > 0) {
      console.log('⚠️ Email already exists:', email);
      return res.status(409).json({ message: 'Email sudah terdaftar' });
    }

    // Generate ID baru
    let newId;
    try {
      // Coba pakai sequence
      const result = await connection.execute(
        `INSERT INTO tamu (id_tamu, nama_tamu, email, password, no_hp, alamat) 
         VALUES (tamu_seq.NEXTVAL, :nama_tamu, :email, :password, :no_hp, :alamat)
         RETURNING id_tamu INTO :id`,
        { 
          nama_tamu, 
          email: email.toLowerCase(), 
          password,
          no_hp, 
          alamat,
          id: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT }
        },
        { autoCommit: true }
      );
      newId = result.outBinds.id[0];
      console.log('✅ Registration successful with sequence, ID:', newId);
    } catch (seqErr) {
      // Fallback jika sequence tidak ada
      console.log('⚠️ Sequence not found, using MAX(id)+1');
      const maxId = await connection.execute(
        'SELECT NVL(MAX(id_tamu), 0) + 1 as new_id FROM tamu',
        {},
        { outFormat: oracledb.OUT_FORMAT_OBJECT }
      );
      newId = maxId.rows[0].NEW_ID;
      
      await connection.execute(
        `INSERT INTO tamu (id_tamu, nama_tamu, email, password, no_hp, alamat) 
         VALUES (:id_tamu, :nama_tamu, :email, :password, :no_hp, :alamat)`,
        { id_tamu: newId, nama_tamu, email: email.toLowerCase(), password, no_hp, alamat },
        { autoCommit: true }
      );
      console.log('✅ Registration successful with MAX(id), ID:', newId);
    }

    res.status(201).json({ 
      message: 'Registrasi berhasil',
      id_tamu: newId
    });

  } catch (err) {
    console.error('❌ Error registrasi:', err.message);
    console.error('Stack:', err.stack);
    res.status(500).json({ 
      message: 'Gagal registrasi tamu',
      error: err.message 
    });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});

module.exports = router;