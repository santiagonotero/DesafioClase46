const tr = require('faker/lib/locales/tr')
const mongoose = require('mongoose')
const logger = require("../Logs/winston")

class Productos{

    constructor(){
        const schema = new mongoose.Schema({
                nombre: String,
                precio: Number,
                foto: String
        })

        this.model = mongoose.model('productos', schema)
    }

    async agregarProducto(obj){
        try{
            const product = await this.model.create(obj)
            return product._id.toString()
        }
        catch(err){
            logger.error('Error agregando producto')
           console.log(err)
        }
    }

    async borrarProducto(_id){
        try{
            const borrados = await this.model.deleteOne({_id})
            return borrados
            
        }
        catch(err){
            console.log(err)
        }
    }

    async cargarProductos(){
        try{ 
            const data = await this.model.find().lean()
            return data
        }
        catch(err){
            logger.error('Error cargando producto')
            console.log(err)
        }
    }

    async actualizarProducto(_id, obj){
        const mongoId = _id
        try{ 
            if(await this.model.findOneAndUpdate({'_id': mongoId}, obj, {new: true})){
                return true
            }
            else{
                return false
            }
        }
        catch(err){
            console.log(err)
        }
    }

}

module.exports = new Productos();