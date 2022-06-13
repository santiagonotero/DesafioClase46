const expect= require('chai').expect
const supertest = require('supertest')

const URL= 'http://localhost:8080'

describe('Prueba de la base de datos de la API', ()=>{

    const agent= supertest(URL)

    let product_id

    const fakeArticle = {
        nombre: 'fakeProduct',
        precio: 10000,
        foto: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-220_tie_business_dress-256.png'
    }

    it('should read all products', async ()=>{
        const response = await agent.get('/products')
        expect(response.status).to.equal(200)
    })

    it('should add new product', async ()=>{
        const response = await agent.post('/add').send(fakeArticle)
        product_id = response.body._id

        expect(product_id).not.equal(null)
    })

    it('should modify existing product', async ()=>{
        const response = await agent.put(`/products/${product_id}`).send( {'nombre': 'Another fake product'})

        expect(response.status).to.equal(200)
    })

    it('should delete product', async ()=>{
        const response = await agent.delete(`/products/${product_id}`)

        expect(response.status).to.equal(200)
    })
})