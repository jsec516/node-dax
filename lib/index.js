var java = require("java");
const thirdPartyFolder = './aws-java-sdk/third-party/lib';
const fs = require('fs');
java.classpath.push('./org.apache.commons.logging-1.1.1.jar');
java.classpath.push('./aws-java-sdk/lib/aws-java-sdk-1.11.147.jar');
// java.classpath.push("./aws-java-sdk/third-party/lib");
fs.readdirSync(thirdPartyFolder).forEach(file => {
  console.log(thirdPartyFolder + '/' + file);
  java.classpath.push(thirdPartyFolder + '/' + file);
})
java.classpath.push('./com.fasterxml.jackson.core.jar');
java.classpath.push('./com.fasterxml.jackson.databind.jar');
java.classpath.push('./jackson-annotations.jar');
java.classpath.push("./DaxJavaClient.jar");
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
var key = new HashMap();
key.putSync("email", new AttributeValue().withS("jahidul@funnelenvy.com"));
var request = new GetItemRequest().withTableNameSync("users").withKeySync(key);

try {
    console.log("Attempting to read the item...");
    var result = client.getItemSync(request);
    console.log("GetItem succeeded: " + result);

} catch (e) {
    console.log("Unable to read item");
    console.log(e);
}
// to use java
// var DoStuffWithMaps = java.import('ReadItem');
// var doStuffWithMaps = new DoStuffWithMaps()