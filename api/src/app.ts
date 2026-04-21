import Fastify from 'fastify'

const app = Fastify({
  logger: true
})

app.get('/health', async () => {
  return { status: 'ok', sistema: 'Leitura do Campo' }
})

export default app