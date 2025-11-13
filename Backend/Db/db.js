const oracledb = require("oracledb");
require("dotenv").config();

try {
  const libDir = env("ORACLE_LIB_DIR");
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
    user: env("DB_USER"),
    password: env("DB_PASS"),
    connectString: env("DB_CONNECT"),
  });
}

module.exports = getConnection; // export function langsung (bukan object)