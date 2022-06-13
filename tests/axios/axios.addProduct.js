const axios = require('axios')

async function axiosAddProducts(){
    try{//
        const newProduct = {
            nombre:'sobretodo',
            precio: 10000,
            foto: 'https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-220_tie_business_dress-256.png'
        }

        const queryResult = await axios.post('http://localhost:8080/add', newProduct)
        return queryResult
    }
    catch(err){
        console.log(err)
    }
}

axiosAddProducts()