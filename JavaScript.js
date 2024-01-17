let sumEl = document.getElementById("sum-el")

let sum = 0

const services = [
    {name: 'Wash Car', price: 10},
    {name: 'Mow Lawn', price: 20},
    {name: 'Pull Weeds', price: 30}
]

const displaySelectedServices = [];
const allServiceButtons = document.getElementsByClassName('service-btn');
document.getElementsByClassName('removeButton');

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






