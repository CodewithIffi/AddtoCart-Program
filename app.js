const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 150000
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 35000
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 25000
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 250000
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 30000
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 55000
    },
    {
        brand: 'Samsung',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000
    },

];


let arr = [];
let items = JSON.parse(localStorage.getItem('cartItems'));
if (items === null) {
    arr = [];
} else {
    arr = items;
}

const div = document.querySelector('.products');
function renderItems() {
    for (let i = 0; i < phones.length; i++) {
        div.innerHTML += `
        <div class="card bg-light text-subtle border---bs-warning-border-subtle" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Brand:${phones[i].brand + ' ' + phones[i].model}</h5>
            <p class="card-text">Model: ${phones[i].ram}</p>
            <p class="card-text">Ram: ${phones[i].model}</p>
            <p class="card-text">Rom: ${phones[i].rom}</p>
            <p class="card-text">Camera: ${phones[i].camera}</p>
            <p class="card-text">Price: ${phones[i].price}</p>
            <button onclick="addtocart(${i})" class="btn btn-warning">Add to Cart</button>
        </div>
    </div>
        `
    }
}

renderItems()

function addtocart(index) {
    if (arr.includes(phones[index])) {
        phones[index].quantity += 1;
    } else {
        phones[index].quantity = 1;
        arr.push(phones[index]);
    }
    console.log(arr);
}

function gotocart() {
    console.log('cart');
    localStorage.setItem('cartItems', JSON.stringify(arr));
    window.location = 'cart.html';
}