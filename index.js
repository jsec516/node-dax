var java = require("java");
java.classpath.push('./lib/aws-java-sdk-1.11.150.jar');
java.classpath.push('./lib/org.apache.commons.logging-1.1.1.jar');
java.classpath.push('./lib/aws-java-sdk/lib/aws-java-sdk-1.11.147.jar');
java.classpath.push('./lib/com.fasterxml.jackson.core.jar');
java.classpath.push('./lib/com.fasterxml.jackson.databind.jar');
java.classpath.push('./lib/jackson-annotations.jar');

java.classpath.push('./lib/jfiles');
var DynamoDB = java.import('com.amazonaws.services.dynamodbv2.document.DynamoDB');
var TryDaxHelper = java.import('TryDaxHelper');
var TryDaxTests = java.import('TryDaxTests');
var helper = new TryDaxHelper();
var tests = new TryDaxTests();
var ddbClient = helper.getDynamoDBClientSync();
var daxClient = null;
if (process.env.dax_client) {
    console.log(process.env.dax_client);
    daxClient = helper.getDaxClientSync(process.env.dax_client);
}
var tableName = "TryDaxTable";

console.log("Creating table...");
helper.createTable(tableName, ddbClient);
console.log("Populating table...");
helper.writeDataSync(tableName, ddbClient, 10, 10);

console.log('done with processing ...');