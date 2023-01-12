const shop = document.getElementById('shop');
function addCar (){
    const addQty = document.querySelector('.cartAmount');
    ++addQty.innerText; 
}

const shopItemData = () =>{
const itemId = item.id;
const itemImg = document.querySelector('.img').src;
const itemDetail = document.querySelector('.detail').innerText;
const itemPrice = document.querySelector('.price').innerText;
 return {itemId,itemImg,itemDetail,itemPrice};
 }

 function generateShop (item){   

    const {itemId,itemImg,itemDetail,itemPrice} = item;
            
    return  `
        <div class="item" id="item-id${item.itemId}">
            <img width=250 src="${itemImg}">
            <div class="${itemDetail}">
                <h3>Fation Car</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                </div>
                <div class="price-qty">
                <h2 class="${itemPrice}">$ 45M</h2>
                <div class="buttons">
                    <i class="bi bi-dash-lg pluss"></i>
                    <div class="qty" id="item-id${item.itemId}">0</div>
                    <i class="bi bi-plus-lg mines"></i>
                </div>
            </div>
        </div>
        `
}

// document.querySelector('.basket') += generateShop ();




const plusBtn = document.querySelectorAll('.pluss');
plusBtn.forEach((element) => {
    element.addEventListener('click' , (event)=>{
        addCar ()
        
        const product = event.target.parentElement;
        const item = shopItemData(product);

    }) 
});


// const minesBtn = document.querySelectorAll('.mines');
// plusBtn.forEach((element) => {
//     element.addEventListener('click' , (event)=>{
//         const getEvent = event;
//         document.querySelector('.basket') -= generateShop ();
//     }) 
// });




