import java.util.HashMap;

import com.amazon.dax.client.dynamodbv2.AmazonDaxClient;
import com.amazon.dax.client.dynamodbv2.ClientConfig;
import com.amazon.dax.client.dynamodbv2.ClusterDaxClient;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.GetItemRequest;
import com.amazonaws.services.dynamodbv2.model.GetItemResult;

public class ReadItem { 

    public static void main(String[] args) throws Exception {

        // Create a DAX client
        ClientConfig daxConfig = new ClientConfig()
            .withEndpoints("backstage-cluster.zs6bnq.clustercfg.dax.usw2.cache.amazonaws.com:8111");
        AmazonDaxClient client = new ClusterDaxClient(daxConfig);

        HashMap<String, AttributeValue> key = new HashMap<String, AttributeValue>();
            key.put("Artist", new AttributeValue().withS("No One You Know"));
            key.put("SongTitle", new AttributeValue().withS("Scared of My Shadow"));

            GetItemRequest request = new GetItemRequest()
                .withTableName("Music").withKey(key);

            try {
                System.out.println("Attempting to read the item...");
                GetItemResult result = client.getItem(request);
                System.out.println("GetItem succeeded: " + result);

            } catch (Exception e) {
                System.err.println("Unable to read item");
                System.err.println(e.getMessage());
            }

    }
}
 