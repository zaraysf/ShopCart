const shop = document.getElementById('shop');
function addTotalCar() {
    const qty = document.querySelector('.cartAmount');
    ++qty.innerText;
}

function reduceCar() {
    const qty = document.querySelector('.cartAmount');
    const count = document.querySelector('.qty');
    if (qty.id === 0) return;
    else { --qty.innerText; --count.innerText; }
}

function count(car) {
    const count = car.querySelector('.qty');
    ++count.innerText;
}

const shopItemData = (car) => {
    const id = car.id;
    const itemImg = car.querySelector('img').src;
    const itemDetail = car.querySelector('.detail').innerText;
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
                    <i onclick= "deletebtn()"  class="far fa-trash-alt delete-item"></i>
                </li>
                `
    return itemCart;
}


const plusBtn = document.querySelectorAll('.pluss');
plusBtn.forEach((element) => {
    element.addEventListener('click', (event) => {
        addTotalCar();
       
        const product = event.target.parentElement.parentElement.parentElement.parentElement;
        count(product);
        const item = shopItemData(product);

        const addItem = document.querySelector(`#item-${item.id}`);
       
        if (addItem == null) {
            document.querySelector('.basket').innerHTML += generateShop(item);
        }
        else {
            ++document.querySelector('.quantity-item').innerText;
        }

    })
});

