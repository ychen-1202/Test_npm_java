var java = require("java");

java.classpath.push("commons-lang3-3.1.jar");
java.classpath.push("commons-io-2.4.jar");

var ArrayList = java.import('java.util.ArrayList');
var arrlist = new ArrayList();
arrlist.addSync('item2');
console.log(arrlist.toStringSync());

java.classpath.push("./sstContracts/Test.class");

var Test = java.import('sstContracts.Test');

// var fs = require("fs");
// var baseDir = "./lib";
// var dependencies = fs.readdirSync(baseDir);

// dependencies.forEach(function(dependency) {
//     console.log(dependency)
//     java.classpath.push(dependency);
// })

// java.classpath.push("EXXAccounts_api.class");

// java.newInstanceSync("Transaction");

// java.classpath.push("/home/yunchen/Projects/wxprm-PlatONE-Go/example_sdk/test/src");

// var EXXAccounts_api = java.import("sstContracts/EXXAccounts_api");

// var EXXAccounts = java.newInstanceSync("sstContracts.EXXAccounts_api");

// var wasmFilePath = "/home/yunchen/Projects/wxprm-PlatONE-Go/cmd/SysContracts/build/appContract/appDemo/appDemo.wasm";

// var contractAddr = "0x5377f9b2d6933e7dc56eb9cff09497d35970b5c5";

// var keyFilePath = "/home/yunchen/Projects/wxprm-PlatONE-Go/build/bin/data/admin_keyfile.json";

// var contract = new EXXAccounts();

// contract = contract.getExistContract(wasmFilePath, contractAddr, "0", keyFilePath, 1, 70000000);
