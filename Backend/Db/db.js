const oracledb = require("oracledb");
require("dotenv").config();

try {
  const libDir = process.env.ORACLE_LIB_DIR;
  if (libDir) {
    oracledb.initOracleClient({ libDir });
    console.log("Oracle Client initialized from", libDir);
  } else {
    console.log("ORACLE_LIB_DIR not set — oracledb will run in Thin mode");
  }
} catch (e) {
  if (!/already been initialized/i.test(e.message)) {
    console.error("initOracleClient error:", e.message);
  }
}

async function getConnection() {
  return await oracledb.getConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    connectString: process.env.DB_CONNECT_STRING,
  });
}

module.exports = {getConnection}; // export function langsung (bukan object)