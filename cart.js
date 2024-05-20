// console.log('cart items');

const cartItems = JSON.parse(localStorage.getItem('cartItems'));
const div = document.querySelector('div');



function renderItems() {
    let total = 0;
    if (cartItems != null && cartItems.length > 0) {
        for (let i = 0; i < cartItems.length; i++) {
            total += cartItems[i].price * cartItems[i].quantity
            div.innerHTML += `
            <div class="border border-light roundedd m-5 p-3"> 
            <h1> Brand: ${cartItems[i].brand + ' ' + cartItems[i].model}</h1>Quantity:
            <button class="btn btn-primary" onclick="addQuantity(${i})"> + </button>
            <button class="btn btn-primary" onclick="lessQuantity(${i})"> - </button>
            <h1>Price: ${cartItems[i].price * cartItems[i].quantity}</h1>
            <button class="btn btn-primary" onclick="deleteItem(${i})">Delete</button>
            </div>

            `
        }
        totalamount.innerHTML = `Total Amount = ${total}`

    } else {
        div.innerHTML = `
            <h3 class="text-center">No Item Found...</h3>
            `
    }
}

renderItems()

function addQuantity(i){
    div.innerHTML = "";
    cartItems[i].quantity =+ 1
    renderItems()
    console.log(cartItems);
}
function lessQuantity(i){
    div.innerHTML = ''
    if(cartItems[i].quantity <= 1){
        cartItems.splice(i , 1);
    }else{
        cartItems[i].quantity -= 1
    }
    renderItems()
}

function deleteItem(i){
    div.innerHTML = ''
    cartItems.splice(i , 1);
    totalamount.innerHTML = ''
    renderItems()
}


