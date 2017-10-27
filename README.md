spring-boot-angular-maven-starter
=============

[![TravisCI Build](https://travis-ci.org/hiper2d/spring-boot-angular-maven-starter.svg)](https://travis-ci.org/hiper2d/spring-boot-angular-maven-starter)

An example of Spring Boot and Angular 4 integration with the help of Maven, Webpack and Kotlin.

##### Client npm dependencies status:

[![dependencies Status](https://david-dm.org/hiper2d/spring-boot-angular-maven-starter/status.svg?path=client/src/main/ng)](https://david-dm.org/hiper2d/spring-boot-angular-maven-starter?path=client/src/main/ng)
[![devDependencies Status](https://david-dm.org/hiper2d/spring-boot-angular-maven-starter/dev-status.svg?path=client/src/main/ng)](https://david-dm.org/hiper2d/spring-boot-angular-maven-starter?path=client/src/main/ng&type=dev)

Consists of [server](./server/) and [client](./client/) modules which can be run separately in development mode and can be built in a single war deployable/runnable war-archive in production mode.

### Build
##### Production mode
```bash
# build both server and client
mvn clean install -Pprod
```
##### Development mode
```bash
# build the server module without the client jar dependency
mvn clean install
```
### Run
##### Production mode
```bash
# navigate to server directory and use the following command
mvn spring-boot:run
```
> Access UI App at [http://localhost:9001](http://localhost:9001)
##### Development mode
```bash
# navigate to server directory and use command
mvn spring-boot:run
# navigate to client/src/main/ng directory and use the following command
npm start
```
> Access UI App at [http://localhost:9002](http://localhost:9002)