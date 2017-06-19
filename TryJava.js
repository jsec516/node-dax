var java = require("java");
java.classpath.push('./lib/jfiles');
var TryJava = java.import('TryJava');
var tj = new TryJava(5);
console.log(tj.getIntSync());