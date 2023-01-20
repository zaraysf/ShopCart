function addTotalCar() {
    const qty = document.querySelector('.cartAmount');
    ++qty.innerText;
}

function reduceTotalCar() {
    const qty = document.querySelector('.cartAmount');
    if (qty === 0) return;
    else {
        --qty.innerText;
    }
}

function increament(car) {
    const increament = car.querySelector('.qty');
    ++increament.innerText;
}

function decreament(car) {
    const decreament = car.querySelector('.qty');
    --decreament.innerText;
}

const shopItemData = (car) => {
    const id = car.id;
    const itemImg = car.querySelector('img').src;
    const itemDetail = car.querySelector('.title').innerText;
    const itemPrice = car.querySelector('.price').innerText;
    const productInfo = { id, itemImg, itemDetail, itemPrice };
    return productInfo;
}

function generateShop(car) {

    const { id, itemImg, itemDetail, itemPrice } = car;

    const itemCart = `
                    <li id="item-${id}" >
                    <a href="#">
                         <img src=${itemImg}>
                        <div class="properties-cart">
                            <span class="item-title">${itemDetail}</span>
                            <span class="item-price">${itemPrice}</span>
                            <span class="quantity-item">1</span>
                        </div>
                    </a>
                    <i  class="bi bi-trash3 delete-item"></i>
                </li>
                `
    return itemCart;
}

const plusBtn = document.querySelectorAll('.pluss');
plusBtn.forEach((element) => {
    element.addEventListener('click', (event) => {
        const emptyCart = document.querySelector('.bi-cart2');
        emptyCart.style.display = "none";

        const product = event.target.parentElement.parentElement.parentElement.parentElement;
        addTotalCar();
        increament(product);

        const item = shopItemData(product);

        const addItem = document.querySelector(`#item-${item.id}`);

        if (addItem == null) {
            document.querySelector('.basket').innerHTML += generateShop(item);

            /////////// DELETE BTN
            const deleteBtn = document.querySelectorAll('.delete-item');
            deleteBtn.forEach((element) => {
              element.addEventListener('click', (e) => {
                const li = e.target.parentElement.parentElement;
                const qtyItem = li.querySelector(".quantity-item");
        
                const qytTotal = document.querySelector('.cartAmount');
                qytTotal.innerText = qytTotal.innerText - qtyItem.innerText
      
                if (qytTotal.innerText == 0) {
                  emptyCart.style.display = "block";
                }
                li.remove();
              });  
            });

        }
        else {
            ++document.querySelector('.quantity-item').innerText;
        }

    })
});


const minsBtn = document.querySelectorAll('.mines');
minsBtn.forEach((element) => {
    element.addEventListener('click', (event) => {
        
        const product = event.target.parentElement.parentElement.parentElement.parentElement;
        reduceTotalCar();
        decreament(product);
        const item = shopItemData(product);
        const addItem = document.querySelector(`#item-${item.id}`);

        if (addItem == null) {
            const emptyCart = document.querySelector('.bi-cart2');
            emptyCart.style.display = "none";     
        }
        else {
            --document.querySelector('.quantity-item').innerText;
        }

    })
});
