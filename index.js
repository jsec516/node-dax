var java = require("java");
java.classpath.push('./lib/jfiles');
var TryDax = java.import('TryDax');
var dax = new TryDax();