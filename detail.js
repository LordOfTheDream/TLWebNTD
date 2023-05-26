const btnModal = document.getElementById("btn-buy")
const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".close-modal")
const btnMinus = document.querySelector(".btn-minus")
const btnPlus = document.querySelector(".btn-plus")
const input = document.querySelector(".valuePrice")
var inputValue = input.value
var price = document.getElementById("sec_price_2974691474")
var totalPrice = document.getElementById("total-price")
// console.log(price)
// price.innerHTML = 5000

btnModal.addEventListener('click', function() {
    modal.classList.add("open")
})

closeModal.addEventListener('click', function() {
    modal.classList.remove("open")
})





btnMinus.addEventListener('click', function() {
    inputValue = --input.value
    console.log(inputValue)
    
    const newPrice = parseInt(inputValue) * 26000
    price.innerHTML = newPrice
    totalPrice.innerHTML = newPrice
})



btnPlus.addEventListener('click', function() {
    inputValue = ++input.value
    
    const newPrice = parseInt(inputValue) * 26000
    price.innerHTML = newPrice
    totalPrice.innerHTML = newPrice

})