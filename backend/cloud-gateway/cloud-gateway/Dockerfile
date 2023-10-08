FROM openjdk:17
ADD target/cloud-gateway.jar .
EXPOSE 8084
ENTRYPOINT ["java","-jar","cloud-gateway.jar"]