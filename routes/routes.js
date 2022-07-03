const DataModel = require('../models/models.Factory')
const Router = require('koa-router')


const modelProductos= DataModel.getModel('productos')

const router = new Router({prefix: '/api/productos'})

router.get('/', async (ctx)=>{
    const items = await modelProductos.cargarProductos()
    ctx.body = items
})

router.get('/:id', async ctx=>{
    const {id} = ctx.params
    const product = await modelProductos.buscarProducto(id)
    ctx.body = product
})

router.post('/add', async ctx=>{
    const id = await modelProductos.agregarProducto(ctx.request.body)
    ctx.body = `Producto agregado con el _id: ${id.toString()}`
})

router.delete('/:id', async ctx=>{
    const {id} = ctx.params
    const deleted = await modelProductos.borrarProducto(id)
    console.log(deleted)
    ctx.body = `Se borraron ${deleted.deletedCount} producto(s)`
})

router.put('/:id', async ctx=>{
    const {id} = ctx.params
    const status = await modelProductos.actualizarProducto(id, ctx.request.body)
    if(status){
        ctx.body = 'Producto modificado'
    }
    else{
        ctx.body = 'No se modificó ningún producto'
    }
})

module.exports = router
