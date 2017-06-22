var java = require('java');
java.classpath.push('./lib/aws-java-sdk/lib/aws-java-sdk-1.11.150.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/lib/aspectjrt-1.8.2.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/lib/aspectjweaver.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/lib/aws-swf-build-tools-1.1.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/lib/commons-codec-1.9.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/lib/commons-logging-1.1.3.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/lib/freemarker-2.3.9.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/lib/httpclient-4.5.2.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/lib/httpcore-4.4.4.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/lib/ion-java-1.0.2.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/lib/jackson-annotations-2.6.0.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/lib/jackson-core-2.6.6.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/lib/jackson-databind-2.6.6.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/lib/jackson-dataformat-cbor-2.6.6.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/lib/javax.mail-api-1.4.6.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/lib/jmespath-java-1.11.150.jar');
java.classpath.push('./lib/aws-java-sdk/third-party/lib/joda-time-2.8.1.jar');
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