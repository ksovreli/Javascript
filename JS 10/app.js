import {houseAccessories} from "./data.js";
let cont = document.querySelector('.cont');
let inp = document.querySelector(".inp")
let btn = document.querySelector(".btn")

for (let el of houseAccessories) {
    cont.innerHTML += `
    <div class="cards" style="width: 250px height: 250px;">
        <img src="${el.picture}"
            <h3>${el.name}</h3>
            <p>${el.price}</p>
        </div>
    </div>`
}

console.log(houseAccessories)

btn.addEventListener("click", function(){
    cont.innerHTML = ""
     console.log(inp.value)
     let sortedArr = houseAccessories.sort((a, b) => a.price - b.price)
        console.log(sortedArr)
        
    for(let el of sortedArr){
        cont.innerHTML += `
    <div class="cards" style="width: 250px height: 250px;">
        <img src="${el.picture}"
            <h3>${el.name}</h3>
            <p>${el.price}</p>
        </div>
    </div>`
        }
})

    console.log(houseAccessories)
