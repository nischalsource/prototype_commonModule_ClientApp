/*
How to 'require'  CommonJS modules.
The named exports are defined in the file 'node_modules/prototype_commonModule/src/commonJSmodules/index.js'
Read that file to see 6 different ways How to 'export' CommonJS modules

In this file I am calling each of the six named exports
 */


var myFunctions = require('prototype_commonModule/src/commonJSmodules/index.js');

// 1. anonymousFunctionExport
myFunctions.anonymousFunctionExport('Export');

// 2. directObjectExport
console.log(myFunctions.directObjectExport.firstName + ' ' + myFunctions.directObjectExport.lastName);

// 3. functionAsClassExport
var person = new myFunctions.functionAsClassExport('3. Function as a Class ', 'Export');
console.log(person.fullName());

// 4. functionExport
myFunctions.functionExport.log('4. Function export');

// 5. literalExport
console.log(myFunctions.literalExport);

// 6. objectExport
console.log(myFunctions.objectExport.SimpleMessage);
