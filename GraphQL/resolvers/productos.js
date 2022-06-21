const DataModel = require('../../models/models.Factory')

const prodMethod = DataModel.getModel('productos')

module.exports={
    getAllProducts: async ()=>{
        try{
            return (await prodMethod.cargarProductos())
        }
        catch(e){ 
            console.log(e)
        }
    },

    createProduct: async (obj)=>{ 
        try{
            const _id = await prodMethod.agregarProducto(obj)
            const newObj = await prodMethod.cargarProductos(_id) 
            return newObj[0]
        }
        catch(e){
            console.log(e)
        }
    },

    deleteProduct: async (_id)=>{
        try{
            const deleted = await prodMethod.borrarProducto(_id)
            return deleted
        }
        catch(e){
            console.log(e)
        }
    },

    updateProduct: async ({data})=>{
        try{
            const _id = data._id
            const newObj ={
                nombre: data.nombre,
                precio: data.precio,
                foto: data.foto
            }
            const isUpdated = await prodMethod.actualizarProducto(_id, newObj)
            return {isUpdated: isUpdated}
        }
        catch(e){
            console.log(e)
        }
    }
}