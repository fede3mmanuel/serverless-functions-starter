const result = document.querySelector('.result')

const fetchData = async () => {
    try {
        const {data} = await axios.get('/api/2-basic-api');
        const products = data.map((product)=>{
            console.log(product);
        })
        result.innerHTML = `<h2>Success</h2>`
    } catch (error) {
        result.innerHTML = `<h4>There was an error. Please try again later</h4>`
    }
}

fetchData()