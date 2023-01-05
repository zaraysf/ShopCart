const shop = document.getElementById('shop');


const shopItemData = () =>{
const itemId = item.id;
const itemImg = document.querySelector('.img').src;
const itemDetail = document.querySelector('.detail').innerText;
const itemPrice = document.querySelector('.price').innerText;
 return {itemId,itemImg,itemDetail,itemPrice};
 }

 const generateShop = () => {   
return ( 
    shop.innerHTML = shopItemData.map(()=>{

        `
        <div class="item" id="item-item${itemId}">
            <img width=250 src="${itemImg}">
            <div class="${itemDetail}">
                <h3>Fation Car</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                </div>
                <div class="price-qty">
                <h2 class="${itemPrice}">$ 45M</h2>
                <div class="buttons">
                    <i class="bi bi-dash-lg pluss"></i>
                    <div class="qty">0</div>
                    <i class="bi bi-plus-lg mines"></i>
                </div>
            </div>
        </div>
        `

    }).join()
    );
}






// const plusBtn = document.querySelectorAll('.pluss');
// plusBtn.forEach(element => {
//     element.addEventListener('click' , (event)=>{
//         const getEvent = event;
// console.log(getEvent);
//     }) 
// });


// const minesBtn = document.querySelectorAll('.mines');
// plusBtn.forEach(element => {
//     element.addEventListener('click' , (event)=>{
//         const getEvent = event;
// console.log(getEvent);
//     }) 
// });


generateShop();

