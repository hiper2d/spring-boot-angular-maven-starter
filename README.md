spring-boot-angular-maven-starter
=============

[![TravisCI Build](https://travis-ci.org/hiper2d/spring-boot-angular-maven-starter.svg)](https://travis-ci.org/hiper2d/spring-boot-angular-maven-starter)

An example of Spring Boot and Angular 4 integration with the help of Maven, Webpack and Kotlin.

##### Client npm dependencies status:

[![dependencies Status](https://david-dm.org/hiper2d/spring-boot-angular-maven-starter/status.svg?path=client/src/main/ng)](https://david-dm.org/hiper2d/spring-boot-angular-maven-starter?path=client/src/main/ng)
[![devDependencies Status](https://david-dm.org/hiper2d/spring-boot-angular-maven-starter/dev-status.svg?path=client/src/main/ng)](https://david-dm.org/hiper2d/spring-boot-angular-maven-starter?path=client/src/main/ng&type=dev)

Consists of [server](./server/) and [client](./client/) modules.
In production mode, they both are compiled and built into a single WAR archive which can be deployed to a web application server or run directly as a standalone Java application on the 9001 port.
In development mode, you work with both modules separately. The server is built and run with the help of Maven from the 'server' directory while the client is operated via npm from the 'client/src/main/ng' directory.

### Build
##### Production mode
```bash
# build both server and client
mvn clean install -Pprod
```
##### Development mode
```bash
# build the server module without the client jar dependency (can be run from the root or from the 'server' directories)
mvn clean install
# install client's npm dependencies (it's necessary for the first build only)
# navigate to the 'client/src/main/ng' directory and run the following command
npm install
```
### Run
##### Production mode
```bash
# navigate to the 'server' directory and run the following command
mvn spring-boot:run
```
> Access UI App at [http://localhost:9001](http://localhost:9001)
##### Development mode
```bash
# navigate to the 'server' directory and run the following command
mvn spring-boot:run
# navigate to the 'client/src/main/ng' directory and run the following command
npm start
```
> Access UI App at [http://localhost:9002](http://localhost:9002)
