let scoreHome = 0
let scoreHomeT = document.getElementById("scoreh")


function addOne() {
    scoreHome += 1
    scoreHomeT.textContent = scoreHome
}

function addTwo() {
    scoreHome += 2
    scoreHomeT.textContent = scoreHome
}

function addThree() {
    scoreHome += 3
    scoreHomeT.textContent = scoreHome
}

let scoreGuest = 0
let scoreGuestT = document.getElementById("scoreg")


function addOneGuest() {
    scoreGuest += 1
    scoreGuestT.textContent = scoreGuest
}

function addTwoGuest() {
    scoreGuest += 2
    scoreGuestT.textContent = scoreGuest
}

function addThreeGuest() {
    scoreGuest += 3
    scoreGuestT.textContent = scoreGuest
}


function reset(){
    scoreGuest = 0
    scoreHome = 0
    scoreGuestT.textContent = scoreGuest
    scoreHomeT.textContent = scoreHome


}
