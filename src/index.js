    const xt = require("itoolkit");
    const conn = new xt.iConn("*LOCAL");
 
    const cbJson = (str) => {
      let result = xt.xmlToJson(str);
      console.log(JSON.stringify(result, " ", 2))
    }
 
    let sql = new xt.iSql();  
    sql.prepare("call qsys2.tcpip_info()");
    sql.execute();
    sql.fetch();
    sql.free();
    conn.add(sql);
    conn.run(cbJson);

// --------------------------------------------------------------------
// for testing purpose it can be used to test building without itoolkit
// building: npm run build
// running:  npm run start
// ---------------------------------------------------------------------
// let message = 'Hello webpack example !!!';
// console.log(message);


