import axios from './axios'

function sendOrder(data) {
    let orderedProducts = []

    data.items.map(tab => tab.products.map(item => {
        if (item.addedToBasket) {
            orderedProducts.push({ name: item.productTitle, amount: item.amount })
        }
    }))

    const finalData = {
        products: orderedProducts,
        sender: data.sender
    }
    console.log(finalData);

    axios.post('api/sendemail', finalData)
        .then(response => {
            console.log(response);
            //data()
        })
}

export default sendOrder