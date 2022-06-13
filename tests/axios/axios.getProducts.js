const axios = require('axios')

async function axiosGetProducts(){
    try{//
        const queryResult = await axios.get('http://localhost:8080/products')
        console.log(queryResult.data)
    }
    catch(err){
        console.log(err)
    }
}

axiosGetProducts()