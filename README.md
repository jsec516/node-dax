# node-dax
### An experiment for `node-java` with `aws-java` sdk

### need to run on ec2 on same vpc
### please follow the dax documentation 

## Installation
- do `npm i`
- go to `lib` folder
- open terminal on that folder
- export SDKVERSION=1.11.150
- export CLASSPATH=.:<abs-path>/DaxJavaClient-latest.jar:aws-java-sdk/lib/aws-java-sdk-$SDKVERSION.jar:<abs-path>/aws-java-sdk/third-party/lib/*
- javac ./jfiles/TryDax*.java
- `node index.js`
