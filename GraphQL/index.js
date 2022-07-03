const {graphqlHTTP} = require('express-graphql')
const Router = require('koa-router')
const products = require("./resolvers/productos")
const schema = require('./schema')

const router = new Router({prefix: '/graphql'})

// module.exports = function(app){
//     app.use('/graphql', graphqlHTTP({
//         schema,
//         rootValue: products,
//         graphiql:true
//     }))
// }

module.exports = function(){
    router.get('/graphql', ctx=>{
        graphqlHTTP({
        schema,
        rootValue: products,
        graphiql:true
        })
    })
}