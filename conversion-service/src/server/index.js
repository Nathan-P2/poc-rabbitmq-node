import { connect } from 'amqplib';
import express from 'express';

var app = express()

async function run() {
  const conn = await connect('amqps://slxahnwb:re6L4f38C0KJQezGP6tp-5tyo05K1R0L@woodpecker.rmq.cloudamqp.com/slxahnwb')
  const channel = await conn.createChannel()

  channel.consume('conversion', (message) => {
    console.log(message.content.toString())

    channel.ack(message)
  })
}

app.listen(3000, () => {
  console.log('Server is running')
})

run().catch(console.error)

module.exports = app