# Hotel Reservation Website

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

# Flowchart

```mermaid
flowchart TD
    %% ===== START =====
    A([Start]) --> B{Pilih Peran}
    B -->|Tamu| U1[Sudah Punya Akun?]
    B -->|Petugas| A1[Login Dashboard Petugas]

    %% ===== ALUR Tamu =====
    U1 -->|Belum| U2[Sign Up - Registrasi Akun Baru]
    U1 -->|Sudah| U3[Login ke Aplikasi]
    U2 --> U3
    U3 --> U4[Cari Kamar Berdasarkan Filter atau Search]
    U4 --> U5[Tampilkan Daftar Kamar Tersedia]
    U5 --> U6[Tamu Melihat Detail Kamar: Harga, Fasilitas, Foto]
    U6 --> U7[Pilih Kamar dan Tentukan Tanggal Menginap]
    U7 --> U8[Hitung Estimasi Biaya Menginap]
    U8 --> U9{Tamu Setuju dengan Estimasi Harga?}
    U9 -->|Ya| U15[Pilih Metode Pembayaran: Transfer Bank, E-Wallet, Kartu Kredit, Cash]
    U9 -->|Tidak| U4
    U15 --> U16[Simpan Data Pemesanan ke Sistem]
    U16 --> U18[End Tamu]
    U18 --> M([Menu Utama])

    %% ===== ALUR PETUGAS =====
    A1 --> A2{Pilih Menu}
    A2 -->|1. Pemesanan Offline| A3[Input Data Tamu]
    A2 -->|2. Laporan Harian| A20[Akses Menu Laporan Harian]
    A2 -->|3. Laporan Bulanan| A23[Akses Menu Laporan Bulanan]
    A2 -->|4. Logout - End Petugas| A27[End Petugas]

    %% --- PEMESANAN OFFLINE ---
    A3 --> A4[Cek Ketersediaan Kamar]
    A4 --> A5[Tampilkan Kamar dan Fasilitas]
    A5 --> A6[Pelanggan Memilih Kamar]
    A6 --> A7[Pembayaran Cash atau M-Banking]
    A7 --> A9[Simpan Data ke Sistem]
    A9 --> A26[Kembali ke Menu Petugas]

    %% --- LAPORAN HARIAN ---
    A20 --> A21[Tanggal Hari ini]
    A21 --> A22[Sistem menampilkan: Total Pendapatan Hari Ini & Tabel Tamu, Kamar, Check-in, Total Harga]
    A22 --> A28[buat atau Simpan Laporan Harian]
    A28 --> A26

    %% --- LAPORAN BULANAN ---
    A23 --> A24[Sistem menampilkan data dari tabel LaporanBulanan berdasarkan bulan & tahun]
    A24 --> A25[buat atau Simpan Laporan]
    A25 --> A26[Kembali ke Menu Petugas]

    %% --- AKHIR ADMIN DAN MENU UTAMA ---
    A26 --> A2
    A27 --> M
```
# ERD
[![ERD Diagram](https://github.com/user-attachments/assets/dbd60f79-596a-47e9-bb00-e9c6c37e1785)](https://github.com/user-attachments/assets/dbd60f79-596a-47e9-bb00-e9c6c37e1785)

# CDM
<img width="1066" height="477" alt="Image" src="https://github.com/user-attachments/assets/251fb45a-9b03-4852-9e00-e478bc499fe4" />

# PDM
<img width="1101" height="527" alt="Image" src="https://github.com/user-attachments/assets/6a84c818-1d9d-4f83-8e43-61b7571a17fb" />


# cara mengirim db ke db orecle

1. "cd backend-pbl"
2. npm init -y
3.  npm install oracledb express
4. node index.js
5. npm install dotenv
6. node index.js
## cara menjalankan server 

[running.md](./Backend/running.md)
