var java = require("java");
java.classpath.push('./org.apache.commons.logging-1.1.1.jar');
java.classpath.push('./aws-java-sdk/lib/aws-java-sdk-1.11.147.jar');
java.classpath.push('./com.fasterxml.jackson.core.jar');
java.classpath.push('./com.fasterxml.jackson.databind.jar');
// const fs = require('fs');
// const thirdPartyLibDir = "./aws-java-sdk/third-party/lib";
// fs.readdirSync(thirdPartyLibDir).forEach(file => {
//   java.classpath.push(thirdPartyLibDir + file);
// //   java.classpath.push("./aws-java-sdk/third-party/lib");
// })

java.classpath.push("./DaxJavaClient.jar");
// java.classpath.push("./src");
var HashMap = java.import('java.util.HashMap');
var AmazonDaxClient = java.import('com.amazon.dax.client.dynamodbv2.AmazonDaxClient');
var ClientConfig = java.import('com.amazon.dax.client.dynamodbv2.ClientConfig');
var ClusterDaxClient = java.import('com.amazon.dax.client.dynamodbv2.ClusterDaxClient');
var AttributeValue = java.import('com.amazonaws.services.dynamodbv2.model.AttributeValue');
var GetItemRequest = java.import('com.amazonaws.services.dynamodbv2.model.GetItemRequest');
var GetItemResult = java.import('com.amazonaws.services.dynamodbv2.model.GetItemResult');
var daxConfig = new ClientConfig()
            .withEndpointsSync("backstage-cluster.zs6bnq.clustercfg.dax.usw2.cache.amazonaws.com:8111");
var client = new ClusterDaxClient(daxConfig);
console.log(client);
