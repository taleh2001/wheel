
let burger = document.querySelector(".burger")
let header = document.querySelector('.header')
burger.addEventListener('click', function(){
    header.classList.toggle('open')
})