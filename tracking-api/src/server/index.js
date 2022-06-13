import { connect } from 'amqplib';
import express from 'express';
import router from './routes/router';

var app = express()

async function run() {
  const conn = await connect('amqps://slxahnwb:re6L4f38C0KJQezGP6tp-5tyo05K1R0L@woodpecker.rmq.cloudamqp.com/slxahnwb')
  const channel = await conn.createChannel()

  app.use((req, res, next) => {
    req.channel = channel

    return next()
  })

  app.use(router)
  
  app.listen(8080, () => {
    console.log('Server is running')
  })
}

run().catch(console.error);

module.exports = app