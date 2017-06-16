var java = require("java");
java.classpath.push('./org.apache.commons.logging-1.1.1.jar');
java.classpath.push('./aws-java-sdk/lib/aws-java-sdk-1.11.147.jar');
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
key.putSync("Artist", new AttributeValue().withS("No One You Know"));
key.putSync("SongTitle", new AttributeValue().withS("Scared of My Shadow"));
request = new GetItemRequest().withTableNameSync("Music").withKeySync(key);

try {
    System.out.println("Attempting to read the item...");
    var result = client.getItem(request);
    System.out.println("GetItem succeeded: " + result);

} catch (e) {
    System.err.println("Unable to read item");
    System.err.println(e.getMessage());
}
// to use java
// var DoStuffWithMaps = java.import('ReadItem');
// var doStuffWithMaps = new DoStuffWithMaps()