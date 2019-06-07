import fs from 'fs'
import path from 'path'

class Config {
  port: any
  db: any
  altairConfig: any
  constructor() {
    this.port = process.env.PORT || 4000
    this.db = {
      database: process.env.DB_NAME || 'users',
      user: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
      host: process.env.DB_HOSTNAME || '127.0.0.1',
      port: process.env.DB_PORT || '5432'
    }

    this.altairConfig = {
      endpointURL: '/graphql',
      subscriptionsEndpoint: 'ws://localhost:4000/graphql',
      // TODO generate client side queries
      //initialQuery: fs.readFileSync(path.resolve(__dirname, '../genererated/client/playground.gql'), 'utf8'),
    }
  }
}

export default new Config()