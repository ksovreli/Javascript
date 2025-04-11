import {gamingArr} from "./data.js"
let cont = document.querySelector('.cont')


gamingArr.sort((a, b) => a.price - b.price)
console.log(gamingArr)

for (let el of gamingArr) {
    cont.innerHTML += `
    <div class="cards" style="width: 250px; height: 250px;">
        <img src="${el.picture}">
        <h3>${el.name}</h3>
        <p>${el.price}</p>
    </div>`
}