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
    }
}