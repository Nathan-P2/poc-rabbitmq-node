# RabbitMQ with Node

### What's Rabbit MQ?

RabbitMQ is a messaging software, that is, it is used to solve problems that require communication between services in an Asynchronous way.

### What is the flow of this repository?

Every message generated through the Tracking API is sent to RabbitMQ.

After that, the conversion service consumes the messages and exposes them through the console.log
