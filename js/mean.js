let nameInput = document.querySelector("#get-name");
let priceInput = document.querySelector("#get-price");
let description = document.querySelector("#get-description");
let image = document.querySelector("#get-image");
let currency = document.querySelector("#select")
let btnSave =document.querySelector("#btn-save")
btnSave.addEventListener('click' , (e) => {
    e.preventDefault();
    let result =""
    localStorage.setItem('nameInput',nameInput.value)
   
} )
