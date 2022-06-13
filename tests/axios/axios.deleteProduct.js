const axios = require('axios')

async function axiosDeleteProduct(){
    try{//
        const _id = '62a1f19d205f5cdd65e50ba9'
        const queryResult = await axios.delete(`http://localhost:8080/products/${_id}`)
        console.log(queryResult.data)
    }
    catch(err){
        console.log(err)
    }
}

axiosDeleteProduct()