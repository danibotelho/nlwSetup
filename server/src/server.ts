import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from "./routes"

const app = Fastify()

app.register(cors)
app.register(appRoutes)

app.listen({
  host: '0.0.0.0',
  port: 3333,
}).then((url) => {
  console.log(`HTTP Server running on ${url}`)
})
/* METODOS5r HTTP: Get, Post, Put, Patch, Delete 
    GET: buscar alguma informação
    POST: criar alguma coisas 
    PUT: atualizar algum recurso por completo
    PATCH: atualizar uma inforção especifica de algum recusro
    DELETE: delear um recurso dentro do meu backend  */  





