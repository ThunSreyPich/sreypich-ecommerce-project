
// My Self__________________________________________________


// function addProductToLocalStorage(key, value) {
//     localStorage.setItem(key, value);
// }

// function getProductFromLocalStorage(key) {
//     return JSON.parse(localStorage.getItem(key)) ?? [];
// }

// function createNewRecord(name, price, description,image,currency) {
//     const tr = document.createElement('tr');
//     const tdOne = document.createElement('td');
//     const tdTwo = document.createElement('td');
//     const tdThree = document.createElement('td');
//     const tdFour = document.createElement('td');
//     const tdFive = document.createElement('td');
//     tdOne.textContent = name;
//     tdTwo.textContent = price;
//     tdThree.textContent = description;
//     tdFour.textContent = image;
//     tdFive.textContent = currency;

//     tr.appendChild(tdOne);
//     tr.appendChild(tdTwo);
//     tr.appendChild(tdThree);
//     tr.appendChild(tdFour);
//     tr.appendChild(tdFive);

//     return tr;

// }

// function createTableHeader() {
//     const headerRow = document.createElement('tr');
//     const thOne = document.createElement('th');
//     const thTwo = document.createElement('th');
//     const thThree = document.createElement('th');
//     const thFour = document.createElement('th');
//     const thFive = document.createElement('th');
//     thOne.textContent = "name";
//     thTwo.textContent = "price";
//     thThree.textContent = "description";
//     thFour.textContent = "image";
//     thFive.textContent = "currency";

//     headerRow.appendChild(thOne);
//     headerRow.appendChild(thTwo);
//     headerRow.appendChild(thThree);
//     headerRow.appendChild(thFour);
//     headerRow.appendChild(thFive);

//     return headerRow;
// }
// function displayProduct() {

//     if(tableData.firstElementChild !== null ) {
//         document.querySelector('table').remove();
//     }
//     const  newTable = document.createElement('table');
//     newTable.appendChild(createTableHeader());
//     let products = getProductFromLocalStorage('product-name');
//     for (let product of products) {
//         let row = createNewRecord(product.name, product.price, product.description, product.image, product.currency);
//         newTable.appendChild(row)

//     }
//     tableData.appendChild(newTable);

// }

// // const result = document.querySelector('#result');
// const productName = document.querySelector('#product-name');
// const price = document.querySelector("#price")
// const description = document.querySelector("#description")
// const image = document.querySelector("#image")
// const currency = document.querySelector("#currecy")
// const btn = document.querySelector('button');

// const tableData = document.querySelector('.table-data');

// let productList = JSON.parse(localStorage.getItem('product-name')) ?? [];
// // function uploapImage(){

// // }
// btn.addEventListener('click', (e) => {
//     e.preventDefault();

//     let result =""
//     if (currency.value == 1){
//         result+="Dollar:$"
//     }
//     else{
//         result+="Khmer:៛"
//     }
    
//     if (productName.value === '') {
//         return;
//     }

//     let productObject = {name: productName.value, price: price.value, description: description.value, image: image.value, currency: result}

//     productList.push(productObject);

//     productName.value = ""
//     // add the product
//     addProductToLocalStorage('product-name', JSON.stringify(productList));

//     displayProduct();
// })


// document.addEventListener('DOMContentLoaded',  displayProduct() )




// function createCard(title, price, qty) {
//     const card = document.createElement('div');
//     card.classList.add('card');


//     const titleElement = document.createElement('div');
//     titleElement.classList.add('title');

   

//     const cardBody = document.createElement('div');
//     cardBody.classList.add('card-body');

//     const priceElement = document.createElement('div');
//     priceElement.classList.add('price');
//     priceElement.textContent = "$" + price;

//     const qtyElement = document.createElement('div');
//     qtyElement.classList.add('qty');
//     qtyElement.textContent = qty;

//     cardBody.appendChild(priceElement);
//     cardBody.appendChild(qtyElement);
    
//     card.appendChild(titleElement);
    

//     card.appendChild(cardBody);

//     console.log(card)

 
//     return card;
// }

// function displayProduct() {
//     let products = JSON.parse(localStorage.getItem('product-name')) ?? [];
//     for (let product of products) {
//         let card = createCard(product.name, product.price, product.quantity);
//         container.appendChild(card);
//     }
// }

// const container = document.querySelector('#container');
// document.addEventListener('DOMContentLoaded', () => { displayProduct(); });






    


// function createCard(title, price, qty) {
//     const card = document.createElement('div');
//     card.classList.add('card');


//     const titleElement = document.createElement('div');
//     titleElement.classList.add('title');

   

//     const cardBody = document.createElement('div');
//     cardBody.classList.add('card-body');

//     const priceElement = document.createElement('div');
//     priceElement.classList.add('price');
//     priceElement.textContent = "$" + price;

//     const qtyElement = document.createElement('div');
//     qtyElement.classList.add('qty');
//     qtyElement.textContent = qty;

//     cardBody.appendChild(priceElement);
//     cardBody.appendChild(qtyElement);
    
//     card.appendChild(titleElement);
//     card.appendChild(cardBody);

//     // console.log(card)

 
//     return card;
// }

// function displayProduct() {
//     let products = JSON.parse(localStorage.getItem('product-name')) ?? [];
//     for (let product of products) {
//         let card = createCard(product.name, product.price, product.quantity);
//         container.appendChild(card);
//     }
// }

// const container = document.querySelector('#container');
// document.addEventListener('DOMContentLoaded', () => { displayProduct(); });



function addProductToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getProductFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) ?? [];
}

function createNewRecord(name, price, currency, description, image) {
    const tr = document.createElement("tr");
    const tdOne = document.createElement("td");
    const tdTwo = document.createElement("td");
    const tdThree = document.createElement("td");
    const tdFour = document.createElement("td");
    const tdFive = document.createElement("td");
    tdOne.textContent = name;
    tdTwo.textContent = price;
    tdThree.textContent = currency;
    tdFour.textContent = description;
    tdFive.textContent = image;

    tr.appendChild(tdOne);
    tr.appendChild(tdTwo);
    tr.appendChild(tdThree);
    tr.appendChild(tdFour);
    tr.appendChild(tdFive);

    return tr;

}

function createTableHeader() {
    const headerRow = document.createElement("tr");
    const thOne = document.createElement("th");
    const thTwo = document.createElement("th");
    const thThree = document.createElement("th");
    const thFour = document.createElement("th")
    const thFive = document.createElement("th")
    thOne.textContent = "name";
    thTwo.textContent = "price";
    thThree.textContent = "currency";
    thFour.textContent = "description"
    thFive.textContent = "image"

    headerRow.appendChild(thOne);
    headerRow.appendChild(thTwo);
    headerRow.appendChild(thThree);
    headerRow.appendChild(thFour);
    headerRow.appendChild(thFive);

    return headerRow;
}
function displayProduct() {

    if(tableData.firstElementChild !== null ) {
        document.querySelector("table").remove();
    }
    const  newTable = document.createElement("table");
    newTable.appendChild(createTableHeader());
    let products = getProductFromLocalStorage("product-name");
    for (let product of products) {
        let row = createNewRecord(product.name, product.price, product.currency, product.description, product.image);
        newTable.appendChild(row)
    }
    tableData.appendChild(newTable);

}

const result = document.querySelector("#result");
const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");
const currency = document.querySelector("#currency");
const description = document.querySelector("#description");
const image = document.querySelector("#image");
const button = document.querySelector("button");
const tableData = document.querySelector(".table-data");

let productList = JSON.parse(localStorage.getItem("product-name")) ?? [];

button.addEventListener("click", (e) => {
    e.preventDefault();
    if (productName.value === "") {
        return;
    }
    let productObject = {name: productName.value, price: productPrice.value, currency: currency.value , description: description.value, image: image.value}

    productList.push(productObject);

    productName.value = ""
    productPrice.value = ""
    currency.value = ""
    description.value = ""
    image.value = ""
    // add the product
    addProductToLocalStorage("product-name", JSON.stringify(productList));

    displayProduct();
})



document.addEventListener("DOMContentLoaded", () => { displayProduct() })

