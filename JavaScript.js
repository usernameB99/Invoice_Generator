/*  const carwashEl = document.getElementById("carwash-el")
 let carPriceEl = document.getElementById("carwashPrice-el")
 let mowlawnEl = document.getElementById("mowlawn-el")
 let mowPriceEl = document.getElementById("mowlawnPrice-el")
 let pullweedsEl = document.getElementById("pullweeds-el")
 let weedPriceEl = document.getElementById("pullweedsPrice-el") */


let sumEl = document.getElementById("sum-el")

let sum = 0

const services = [
    {name: 'Wash Car', price: 10},
    {name: 'Mow Lawn', price: 20},
    {name: 'Smoke Weed', price: 30}
]

const displaySelectedServices = [];
const allServiceButtons = document.getElementsByClassName('service-btn');
document.getElementsByClassName('removeButton');


// function display(){
//     let htmlString = ``
//     for (let i = 0; i < displaySelectedServices.length; i++) {
//         htmlString += `
//         <div class="service-box">
//             <p>${displaySelectedServices[i].name}</p>
//             <button class="removeButton" onclick="remove(${i})">remove</button>
//             <p>${displaySelectedServices[i].price + '$'}</p>
//         </div>
//         `// woher waß der erstellte button welches er löschn soid? bekommt index beim erstellen von allServices?
//         console.log("display " + i)
//     }
//     document.getElementsByClassName('tasks')[0].innerHTML = htmlString;
// }

function display() {
    document.getElementsByClassName('tasks')[0].innerHTML = "";
    for (let i = 0; i < displaySelectedServices.length; i++) {
        const divContainer = document.createElement('div');
        divContainer.className = "service-box";

        const serviceText = document.createElement('p');
        serviceText.innerText = displaySelectedServices[i].name;

        const removeBtn = document.createElement('button');
        removeBtn.innerText = 'remove';
        removeBtn.addEventListener('click', (event) => {
            remove(event, i)
        });
        document.getElementsByClassName('tasks')[0].appendChild(removeBtn);

        const priceText = document.createElement('p');
        priceText.innerText = "$" + displaySelectedServices[i].price;
        divContainer.appendChild(serviceText);
        divContainer.appendChild(removeBtn);
        divContainer.appendChild(priceText);

        document.getElementsByClassName('tasks')[0].appendChild(divContainer);
    }
}

function enableButton(buttonText) {
    let index;
    for (let i = 0; i < services.length; i++) {
        if (buttonText === services[i].name) {
            index = i;
            return index;
        }
    }
}

function addProduct(serviceIndex) {
    displaySelectedServices.push(services[serviceIndex]);
    sum += services[serviceIndex].price;
    display();
    allServiceButtons[serviceIndex].disabled = true;
    sumEl.innerText = sum + '$'
}

function remove(event, indexBeforeDelete) {
    displaySelectedServices.splice(indexBeforeDelete, 1);
    const newIndex = enableButton(event.target.previousSibling.textContent)
    allServiceButtons[newIndex].disabled = false;
    sum -= services[newIndex].price;
    sumEl.innerText = sum + '$'
    display()
}

function setZero() {
    while (displaySelectedServices.length > 0) {
        displaySelectedServices.pop()
    }
    display()
    sum = 0
    sumEl.innerText = sum + '$'

    for (let i = 0; i < allServiceButtons.length; i++) {
        allServiceButtons[i].disabled = false
    }
}

sumEl.innerText = sum + '$'  //damit 0 dasteht






