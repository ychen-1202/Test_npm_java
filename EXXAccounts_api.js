// var fs = require("fs");
var java = require("java");
// var baseDir = "./lib";
// var dependencies = fs.readdirSync(baseDir);
java.classpath.push("commons-lang3-3.1.jar");
java.classpath.push("commons-io-2.4.jar");
// java.classpath.push("EXXAccounts_api.class");

// dependencies.forEach(function(dependency) {
//     console.log(dependency)
//     java.classpath.push(dependency);
// })
java.classpath.push("Test.class");

// var req = java.import("org.web3j.protocol.core.methods.request");

var ArrayList = java.import('java.util.ArrayList');
var arrlist = new ArrayList();
arrlist.addSync('item2');
console.log(arrlist.toStringSync());

var Test = java.import('sstContracts.Test');

// java.newInstanceSync("Transaction");

// java.classpath.push("/home/yunchen/Projects/wxprm-PlatONE-Go/example_sdk/test/src");

// var trans = java.import("src/sstContracts/EXXAccounts_api");

// /sstContracts/EXXAccounts_api

// var EXXAccounts = java.newInstanceSync("sstContracts.EXXAccounts_api");

// var wasmFilePath = "/home/yunchen/Projects/wxprm-PlatONE-Go/cmd/SysContracts/build/appContract/appDemo/appDemo.wasm";

// var contractAddr = "0x5377f9b2d6933e7dc56eb9cff09497d35970b5c5";

// var keyFilePath = "/home/yunchen/Projects/wxprm-PlatONE-Go/build/bin/data/admin_keyfile.json";

// var contract = new EXXAccounts();

// contract = contract.getExistContract(wasmFilePath, contractAddr, "0", keyFilePath, 1, 70000000);
