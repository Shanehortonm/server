// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// route for settings
fastify.get('/settings', async (request, reply) => {
    reply.send(
        {firstName: "Shane",
        lastName: "Horton",
        age: 25}
    ) 
  })
  
// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 8080 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()