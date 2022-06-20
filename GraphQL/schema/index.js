const { buildSchema } = require('graphql')

 const schema = `
  type Product {
    _id: String!
    nombre: String
    precio: Int
    foto: String
  }
  input ProductInput {
    nombre: String
    _id: String
    precio: Int
    foto: String
  }
  type Query {
    getAllProducts(_id: String): [Product]
  }
  type Mutation {
    createProduct(data: ProductInput): Product
  }
`

 module.exports = buildSchema(schema)