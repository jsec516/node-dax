var java = require('java');
java.classpath.push('./lib/aws-java-sdk/aws-java-sdk-1.11.150.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/aspectjrt-1.8.2.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/aspectjweaver.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/aws-swf-build-tools-1.1.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/commons-codec-1.9.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/commons-logging-1.1.3.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/freemarker-2.3.9.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/httpclient-4.5.2.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/httpcore-4.4.4.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/ion-java-1.0.2.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/jackson-annotations-2.6.0.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/jackson-core-2.6.6.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/jackson-databind-2.6.6.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/jackson-dataformat-cbor-2.6.6.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/javax.mail-api-1.4.6.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/jmespath-java-1.11.150.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/joda-time-2.8.1.jar');
java.classpath.push('./lib/jfiles');
var DynamoDB = java.import('com.amazonaws.services.dynamodbv2.document.DynamoDB');
var TryDaxHelper = java.import('TryDaxHelper');
var TryDaxTests = java.import('TryDaxTests');
var helper = java.newInstanceSync('TryDaxHelper');
var tests = java.newInstanceSync('TryDaxTests');
var ddbClient = java.callMethodSync(helper, 'getDynamoDBClient');
var daxClient = null;
if (process.env.dax_client) {
    console.log(process.env.dax_client);
    daxClient = helper.getDaxClient(process.env.dax_client);
}
var tableName = "TryDaxTable";

console.log("Creating table...");
helper.createTable(tableName, ddbClient);
console.log("Populating table...");
helper.writeDataSync(tableName, ddbClient, 10, 10);

console.log('done with processing ...');