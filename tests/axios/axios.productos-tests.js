const axios = require('axios')

async function axiosGetProductTests(){
    try{//
        const queryResult = await axios.get('http://localhost:8080/api/productos-test')
        console.log(queryResult.data)
    }
    catch(err){
        console.log(err)
    }
}

axiosGetProductTests()