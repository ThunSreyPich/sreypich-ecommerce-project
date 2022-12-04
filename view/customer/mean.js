let product_name = JSON.parse(localStorage.getItem("product-name"));


function createCard(title, price, currency, description, image, index){
    
    const titleElement = document.createElement("div");
    titleElement.classList.add("title");
    titleElement.textContent = title;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.dataset.index = index;

    const priceElement = document.createElement("div");
    priceElement.classList.add("price");
    priceElement.textContent = currency + price;

    const currencyElement = document.createElement("div");
    currencyElement.classList.add("currency");
    // currencyElement.textContent = currency;

    const descriptionElement = document.createElement("div");
    descriptionElement.classList.add("description");
    descriptionElement.textContent = description;
    
    const imageElement = document.createElement("img");
    
    imageElement.src = image;

            // *****************link for detail product---------------- 
    const link = document.createElement('a');
    // link.href = "view/detail/detail.html"
    link.addEventListener('click',detial_product)
    link.dataset.index = index
    const card = document.createElement("div");

    
    
    
    
    
    cardBody.appendChild(titleElement);
    cardBody.appendChild(priceElement);
    console.log(cardBody)
    // cardBody.appendChild(currencyElement);
    cardBody.appendChild(descriptionElement);
    cardBody.appendChild(imageElement);
    
    
    link.appendChild(cardBody)
    container.appendChild(link)
    
   
    
    return card;
}


function displayProduct() {
    let products = JSON.parse(localStorage.getItem("product-name")) ?? [];
    for (let index in products) {
        let product = products[index];
        let card = createCard(product.name, product.price, product.currency, product.description, product.image,index);
        container.appendChild(card);
    }
}

const container = document.querySelector("#container");
document.addEventListener("DOMContentLoaded", () => { displayProduct() });



        // --------------------------find by search-----------------------------

function searchProduct(){
    let word = search.value.toLowerCase()
    let tasks = document.querySelectorAll(".card-body")
   
    for (let task of tasks) {
        let title = task.firstElementChild.textContent.toLowerCase()
        if (title.indexOf(word) === -1){
            task.style.display = "none"
        }
        else{
            task.style.display = "block"
        }
    }

}
const text = document.querySelector("#search");
search.addEventListener("keyup", searchProduct);

//  ----------------------detail product-----------------------

// let i = 0;


function view_detail(index){
    localStorage.setItem('index_detail', index);
}


// ------------to display dialog--------------------

function detial_product(event){
    let image_index = event.target.parentElement.dataset.index;
    current_click = product_name[image_index];
    console.log(current_click,"hrlloo")
    
    
    let customer_contianer = document.getElementById("customer_contianer");
    customer_contianer.style.display = "none";
    
    let dom_detail_dialog_container = document.getElementById("detail_dialog_container");
    

    if (dom_detail_dialog_container != null){
        dom_detail_dialog_container.remove();
    }
    
    let new_dom_detail_dialog_container = document.createElement("div")
    new_dom_detail_dialog_container.id= "detail_dialog_container" 
    new_dom_detail_dialog_container.style.display = "block";
    document.body.appendChild(new_dom_detail_dialog_container)

    console.log(new_dom_detail_dialog_container,"skjdljsds");
    
    let detail_product_paragraph =document.createElement("div");
    detail_product_paragraph.className = "detail_product_paragraph";
    new_dom_detail_dialog_container.appendChild(detail_product_paragraph);
    
    let nameOfProduct= document.createElement("h3");
    nameOfProduct.id = "name";
    nameOfProduct.textContent = "Name: "+ current_click.name;
    detail_product_paragraph.appendChild(nameOfProduct);
    
    let priceOfProduct = document.createElement("h3");
    priceOfProduct.id = "price";
    priceOfProduct.textContent = "Price: "+ current_click.price;
    detail_product_paragraph.appendChild(priceOfProduct);
    
    let paragrash_lorem = document.createElement("p")
    paragrash_lorem.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga eligendi similique a, labore voluptatem maxime alias quod sunt minus quibusdam velit soluta  suscipit est placeat, dolorem voluptates beatae cum."
    detail_product_paragraph.appendChild(paragrash_lorem);
    
    
    let imageProductContainer = document.createElement("div");
    imageProductContainer.className = "image_container"   
     
    new_dom_detail_dialog_container.appendChild(imageProductContainer);
    
    let imageProduct = document.createElement("img");
    imageProduct.src = current_click.image
    imageProductContainer.appendChild(imageProduct)
}



