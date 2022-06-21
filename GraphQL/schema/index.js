const { buildSchema } = require('graphql')

 const schema = `
  type Product {
    _id: String!
    nombre: String
    precio: Int
    foto: String
  }
  input ProductInput {
    _id:String
    nombre: String
    precio: Int
    foto: String
  }
  type DeletedProduct {
    acknowledged: Boolean
    deletedCount: Int
  }
  type ChangedProduct {
    isUpdated: Boolean
  }
  type Query {
    getAllProducts(_id: String): [Product]
  }
  type Mutation {
    createProduct(data: ProductInput): Product
    deleteProduct(_id: String): DeletedProduct
    updateProduct(data: ProductInput): ChangedProduct
  }
`

 module.exports = buildSchema(schema)