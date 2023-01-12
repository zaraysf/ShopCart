const shop = document.getElementById('shop');
function addCar (){
    const qty = document.querySelector('.cartAmount');
    ++qty.innerText; 
}
function reduceCar (){
    const qty = document.querySelector('.cartAmount');
    --qty.innerText; 
}

const shopItemData = (item) =>{
const itemId = item.id;
const itemImg = item.querySelector('.img').src;
const itemDetail = item.querySelector('.detail').innerText;
const itemPrice = item.querySelector('.price').innerText;
 return {itemId,itemImg,itemDetail,itemPrice};
 }

 function generateShop (item){   

    const {itemId,itemImg,itemDetail,itemPrice} = item;
            
    return  `
                    <li id="item-${item.itemId}" >
                    <a href="#">
                        <img src=${itemImg}>
                        <div class="properties-cart">
                            <span class="item-title">${itemDetail}</span>
                            <span class="item-price">${itemPrice}</span>
                            <span class="quantity-item">1</span>
                        </div>
                    </a>
                    <i class="far fa-trash-alt delete-item"></i>
                </li>
        `
}

    const plusBtn = document.querySelectorAll('.pluss');
    plusBtn.forEach((element) => {
        element.addEventListener('click' , (event)=>{
            addCar ();
            
            const product = event.target.parentElement;
            const item = shopItemData(product);
    const addItem = document.querySelector(`#item-${item.itemId}`);
            if (addItem == null) {
                document.querySelector('.basket').innerHTML +=  generateShop(item);
            }
            else{
                ++document.querySelector('.quantity-item').innerText; 
            }

        }) 
    });


// const minBtn = document.querySelectorAll('.mines');
// minBtn.forEach((element) => {
//     element.addEventListener('click' , (event)=>{
        
//         const product = event.target.parentElement;
//         const item = shopItemData(product);

//         const qty = document.querySelector('.cartAmount');
        
//         if(qty.innerText = 0){
//             alert("Empty Basket")
//         }else{
//             reduceCar (); 
//         }

//     }) 
// });



