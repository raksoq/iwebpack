#  iWebPack

### Simple example with webpack and itoolkit

####Master branch 
It has a simple example with console output.

Building: npm run build
Running: npm run start
Direct run without build: node src/index.js
Direct run with build: node dist/main.js

####itoolkit_add branch
Added itoolkit and example below

Building crashes... help needed.

## Example of itoolkit: Basic SQL APIs (used in branch itoolkit_add)
```js
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
```

# API Reference for iToolkit
* https://www.ibm.com/developerworks/community/wikis/home?lang=en#!/wiki/IBM%20i%20Technology%20Updates/page/Toolkit%20for%20i%20APIs

# License
[`MIT`](https://github.com/raksoq/iwebpack/LICENSE) file.
