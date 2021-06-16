// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

import { ApolloServer, IResolvers } from 'apollo-server-express'
import express from 'express'
import http from 'http'

import { importSchema } from 'graphql-import'

import BlockchainApi from './dataSources'
import resolvers from './resolvers'

const configurations = {
  production: { ssl: true, port: 443, hostname: 'example.com' },
  development: { ssl: false, port: 4000, hostname: 'localhost' },
}

const environment = process.env.NODE_ENV || 'production'
// @ts-ignore
const config = configurations[environment]

const app = express()

const schema = importSchema(path.resolve('./src/schema/schema.graphql'))

const apolloServer = new ApolloServer({
  playground: true,
  typeDefs: [schema],
  resolvers: resolvers as IResolvers,
  dataSources: () => ({
    blockchainApi: new BlockchainApi(),
  }),
})

apolloServer.applyMiddleware({ app })

// Create the HTTPS or HTTP server, per configuration
const server = http.createServer(app)

server.listen({ port: config.port }, () =>
  console.log(
    '🚀 Server ready at',
    `http${config.ssl ? 's' : ''}://${config.hostname}:${config.port}${
      apolloServer.graphqlPath
    }`
  )
)
