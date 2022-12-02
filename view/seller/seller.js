
function addProductToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getProductFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) ?? [];
}
            // ------------for create Table(td)---------------

function createNewRecord(name, price, currency, description, image,action) {

    const tr = document.createElement("tr");
    const tdOne = document.createElement("td");
    const tdTwo = document.createElement("td");
    const tdThree = document.createElement("td");
    const tdFour = document.createElement("td");
    const tdFive = document.createElement("td");
    const tdSix = document.createElement("td");
    
    tdOne.textContent = name;
    tdTwo.textContent = price;
    tdThree.textContent = currency;
    tdFour.textContent = description;
    tdFive.textContent = image;
    tdSix.textContent = action;


    tr.appendChild(tdOne);
    tr.appendChild(tdTwo);
    tr.appendChild(tdThree);
    tr.appendChild(tdFour);
    tr.appendChild(tdFive);
    tr.appendChild(tdSix);

          
        // --------  create iconEdit---------------------
        
    let editIcon = document.createElement('img');
    editIcon.className = "edit"
    editIcon.src = "../../view/assets/images/edit_icon.png";


        //---------------create iconDelete----------------------
    let deleteIcon = document.createElement('img');
    deleteIcon.className="delete"
    deleteIcon.src = "../../view/assets/images/deleteicon.png";


         // ----------append editIcon and deleteIcon to thSix----------
    tdSix.appendChild(editIcon)
    tdSix.appendChild(deleteIcon)            

        //------------------for  edit   image--------------
    editIcon.addEventListener('click',(e)=>{
        let index = e.target.parentElement.parentElement.dataset.index;
        
        document.getElementById("product-name").value = name;
        document.getElementById("product-price").value = price;
        document.getElementById("description").value = description;
        document.getElementById("currency").value= currency;
        document.getElementById("image").value = image;
        
        productList.splice(index,1)
        
        
    })
        

        //------------------for  delete  image--------------
    deleteIcon.addEventListener("click",(e) =>{
        let index = e.target.parentElement.parentElement.dataset.index;
        productList.splice(index ,1);
        addProductToLocalStorage("product-name",JSON.stringify(productList));
        displayProduct();
    });

    return tr;

}

                //  ------create table for (th)-------

function createTableHeader() {
    const headerRow = document.createElement("tr");
    const thOne = document.createElement("th");
    const thTwo = document.createElement("th");
    const thThree = document.createElement("th");
    const thFour = document.createElement("th")
    const thFive = document.createElement("th")
    const thSix= document.createElement("th")

    thOne.textContent = "name";
    thTwo.textContent = "price";
    thThree.textContent = "currency";
    thFour.textContent = "description"
    thFive.textContent = "image"
    thSix.textContent = "action"

    headerRow.appendChild(thOne);
    headerRow.appendChild(thTwo);
    headerRow.appendChild(thThree);
    headerRow.appendChild(thFour);
    headerRow.appendChild(thFive);
    headerRow.appendChild(thSix);

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

