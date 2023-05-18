
let burger = document.querySelector(".burger")
let header = document.querySelector('.header')
let linkMe = document.querySelector('.content__btn')
burger.addEventListener('click', function(){
    header.classList.toggle('open')
})

linkMe.addEventListener('click', function(e){
    e.preventDefault()
})