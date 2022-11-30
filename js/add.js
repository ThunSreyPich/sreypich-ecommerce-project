function addProductTolocalstorage(key, value){
    localStorage.setItem(key, value)
}

function getProductFormLocalStorage(key){
    return JSON.parse(localStorage,getItem(key)) ?? [];
}



const nameInput = document.querySelector("#get-name");
const priceInput = document.querySelector("#get-price");
const description = document.querySelector("#get-description");
const image = document.querySelector("#get-image");
const currency = document.querySelector("#select")
const btnSave =document.querySelector("#btn-save")

let listOfproduct =JSON.parse(localStorage.getItem('nameInput')) ?? [];
btnSave.addEventListener('click' , (e) => {
    e.preventDefault();

    // get result form currency//
    let result = ""
    if (currency.value == 1){
        result+="Dollar:$"
    }
    else{
        result+="Khmer:៛"
    }
   
    localStorage.setItem('nameInput',nameInput.value)
   if (listOfproduct.value === ''){
    return;
   }
  
   let disPlayproduct = {name: nameInput.value, price: priceInput.value, description: description.value, image: image.value, currency: result  }
   listOfproduct.push(disPlayproduct)

   
  addProductTolocalstorage('nameInput', JSON.stringify(listOfproduct))
} )




