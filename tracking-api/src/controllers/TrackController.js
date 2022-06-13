export class TrackController {
  async execute(request, response) {
    await request.channel.sendToQueue('conversion', Buffer.from(JSON.stringify(request.body)))
    
    return response.status(200).json({
      message: 'Mensagem enviada com sucesso!'
    })
  }
}