const axios = require('axios')

async function axiosUpdateProduct(){
    try{//
        const _id = '62a41129a53b6588653242aa'
        const queryResult = await axios.put(`http://localhost:8080/products/${_id}`, ({'precio':20000, 'nombre': 'Sobretodo'}))
        console.log(queryResult.data)
    }
    catch(err){
        console.log(err)
    }
}

axiosUpdateProduct()