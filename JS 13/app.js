
let cont = document.querySelector(`.cont`)

// fetch("https://reqres.in/api/users")
// .then(response => response.json())
// .then(response => randering(response.data))
// .catch(error => console.log(error))

// function randering(arr) {


//     console.log(arr)
//     for(let el of arr){
//     cont.innerHTML+=`<div class="card" style="width: 18rem;">
//   <img src="${el.avatar}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${el.first_name}</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`
//     }
// }





// fetch(`https://fakestoreapi.com/products`)
// .then(x => x.json())
// .then(x => randering(x))



// function randering(arr) {
//         for(let el of arr){
//     cont.innerHTML+=`<div class="card" style="width: 18rem;">
//   <img src="${el.image}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${el.category}</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`
//     }
// }
z







fetch(`https://restcountries.com/v3.1/all`)
.then(x => x.json())
.then(x => randering(x))
function randering(arr) {
    console.log(arr)
    arr.sort((a, b) => b.population - a.population)
    let topsix = arr.slice(0,6)
    for(let el of topsix){
            cont.innerHTML+=`<div class="card" style="width: 18rem;">
          <img src="${el.flags.png}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${el.name.common}</h5>
          <h5 class="card-title">${el.population}</h5>
          <h5 class="card-title">${el.area}</h5>
          <h5 class="card-title">${el.region}</h5>
            <h5 class="card-title">${el.capital[0]}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>`
            }
}