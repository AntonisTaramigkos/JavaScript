let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let sum = document.getElementById("sum-of-pass")
let count = 0
let sumOfPass = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    sumOfPass += count
    countEl.textContent = 0
    count = 0
    sum.textContent = sumOfPass
}

