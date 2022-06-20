const {graphqlHTTP} = require('express-graphql')
const products = require("./resolvers/productos")
const schema = require('./schema')

module.exports = function(app){
    app.use('/graphql', graphqlHTTP({
        schema,
        rootValue: products,
        graphiql:true
    }))
}