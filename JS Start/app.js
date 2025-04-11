// პირობა // 
// User - ს შემოაყვანინეთ ასაკი, ეროვნება, დასაქმებულია თუ არა
// თუ არის 18 და მეტის და არის ქართველი და არის უმუშევარი ბილეთი მივცეთ უფასოდ
// თუ არის 18 - მდე და არ აქვს მნიშვნელობა დასაქმებულია თუ არა და არის ქართველი მაინც უფასოდ ვუშვებთ
// თუ არის დასაქმებული და თან არაქართველი თან 18 და მეტის იხდის სრულ ფასს


let UserAge = Number(prompt("Enter Your Age"))
let UserCountry = prompt("Enter Your Nationality")
let UserJob = prompt("Enter Your Job")

if(UserAge  >= 18 && UserCountry == "Georgia" && UserJob == "False"){
    console.log("უფასო ბილეთი")
}

else if(UserAge < 18 && UserCountry == "Georgia"){
    console.log("მაინც, უფასო ბილეთი")
}

else if(UserAge >=18 && UserCountry != "Georgia" && UserJob == "True"){
    console.log("სრული ფასი")
}

else{
    console.log("Error")
}








