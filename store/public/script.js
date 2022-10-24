
const displayPanel  = document.querySelector('.displayPanel');

async function getProducts(){

    try{
        const {data : product} =await  axios.get('/store/api/v1');
        let products = product.products;

        // for(let i =0; i<products.length; i++){
           
        // }
        products.forEach((product)=>{
            const {name,price,company,rating} = product;
            const item = document.createElement('div');
            item.classList.add('item');
            const itemDescription = document.createElement('div');
            itemDescription.id = 'itemDescription'
            const itemPicture = document.createElement('div');
            itemDescription.id = 'itemPicture'
            const itemName = document.createElement('div')
            const itemRating = document.createElement('div')
            const itemPrice = document.createElement('div')
            const itemCompany = document.createElement('div')
             itemName.id = 'itemName';
             itemPrice.id = 'itemPrice'
             itemRating.id = 'itemRating'
             itemCompany.id = 'itemCompany'

             itemName.textContent = name;
             itemCompany.textContent = company;
             itemRating.textContent = rating;
             itemPrice.textContent = price;

             itemDescription.append(itemCompany,itemName,itemPrice,itemRating)

            item.append(itemPicture,itemDescription)
            displayPanel.appendChild(item)
        })

    }catch(err){
        console.error(err)
    }
}

getProducts()
