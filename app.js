import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import stock from './Stock.js'

const app = express()

let schema = buildSchema(`
    type Stock {
        id: Int
        name: String
        description: String
        price: String
        unit: String
    }

    type Query {
        stocks: [Stock]
    }

    type Mutation {
        createStock(name: String, description: String, price: String, unit: String): Stock
        deleteStock: [Stock]
        updateStock(id: Int): Stock
    }
`)

const root = {
    stocks: () => stock.getStocks(),
    createStock: (data) => stock.createStock(data),
    deleteStock: () => stock.deleteStocks(),
    updateStock: (id) => stock.updateStocks(id) 
}

app.use('/api', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8080, () => console.log('Server Up'))