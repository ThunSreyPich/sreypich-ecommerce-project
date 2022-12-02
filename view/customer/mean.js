function createCard(title, price, currency, description, image){
    const card = document.createElement("div");
    card.classList.add("card")
    
    const titleElement = document.createElement("div");
    titleElement.classList.add("title");
    titleElement.textContent = title;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const priceElement = document.createElement("div");
    priceElement.classList.add("price");
    priceElement.textContent = "$" + price;

    const currencyElement = document.createElement("div");
    currencyElement.classList.add("currency");
    currencyElement.textContent = currency;

    const descriptionElement = document.createElement("div");
    descriptionElement.classList.add("description");
    descriptionElement.textContent = description;

    const imageElement = document.createElement("img");
    imageElement.src = image;

    cardBody.appendChild(priceElement);
    cardBody.appendChild(currencyElement);
    cardBody.appendChild(descriptionElement);
    cardBody.appendChild(imageElement);

    card.appendChild(titleElement);
    card.appendChild(cardBody);
    console.log(card)
 
    return card;
}


function displayProduct() {
    let products = JSON.parse(localStorage.getItem("product-name")) ?? [];
    for (let product of products) {
        let card = createCard(product.name, product.price, product.currency, product.description, product.image);
        container.appendChild(card);
    }
}

const container = document.querySelector("#container");
document.addEventListener("DOMContentLoaded", () => { displayProduct() });



        // --------------------------find by search-----------------------------

function searchProduct(){
    let word = search.value.toLowerCase()
    let tasks = document.querySelectorAll(".card")
    console.log(tasks)
    for (let task of tasks) {
        let title = task.firstElementChild.textContent.toLowerCase()
        if (title.indexOf(word) === -1){
            task.style.display = "none"
        }
        else{
            task.style.display = "flex"
        }
    }

}

const text = document.querySelector("#search");
search.addEventListener("keyup", searchProduct);