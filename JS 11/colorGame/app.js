let cont = document.querySelector(".cont")
let mainBox = document.querySelector(".mainBox")
let scoreP = document.querySelector(".score")
let score = 0
let boxAmount = 4
scoreP.innerHTML = `ქულა : ${score}`; 
function getRandColor(x) {
    let colorArr = []
    for (let i = 0; i < x; i++) {
        let r = Math.round(Math.random() * 255)
        let g = Math.round(Math.random() * 255)
        let b = Math.round(Math.random() * 255)
        let randomColor = `rgb(${r}, ${g}, ${b})`
        colorArr.push(randomColor)
    }
    return colorArr
}

function randEl(arr) {
    let randInd = Math.floor(Math.random() * arr.length)
    return arr[randInd]
}

function resetGame() {
    cont.innerHTML = ""
    score = 0
    boxAmount = 4
    randerBoxes(boxAmount)
}

function randerBoxes(amount) {
    cont.innerHTML = ""
    let boxColorArr = getRandColor(amount)
    mainBox.style.backgroundColor = randEl(boxColorArr)

    for (let el of boxColorArr) {
        let box = document.createElement('div')
        box.className = "box"
        box.style.backgroundColor = el
        box.addEventListener('click', function () {
            if (box.style.backgroundColor == mainBox.style.backgroundColor) {
                console.log("win")
                score++
                scoreP.innerHTML = `ქულა : ${score}`

                if (score % 5 === 0) {
                    boxAmount += 2
                }

                if (score >= 50) {
                    alert("You Won!")
                    resetGame()
                    return
                }

                randerBoxes(boxAmount)
            } else {
                console.log("Lose")
                score--
                scoreP.innerHTML = `ქულა : ${score}`

                if (score <= 0) {
                    Swal.fire({
                        icon: "Error",
                        title: "Game over",
                        text: "Try again!",
                    });
                    resetGame()
                } else {
                    randerBoxes(amount)
                }
            }
        })

        cont.appendChild(box)
    }
}

randerBoxes(boxAmount)
