

function createNameOntable(name, price, description, image, currency){
    const tr = document.createElement('tr');
    const tdOne = document.createElement('td');
    const tdTwo = document.createElement('td');
    const tdThird = document.createElement('td');
    const tdFour = document.createElement('td');
    const tdFive = document.createElement('td');


    tr.appendChild(tdOne)
    tr.appendChild(tdTwo)
    tr.appendChild(tdThird)
    tr.appendChild(tdFour)
    tr.appendChild(tdFive)

    return tr;
}