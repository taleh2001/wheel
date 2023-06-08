
let header = document.querySelector('.header')
let linkMe = document.querySelector('.content__btn')



document.addEventListener('click', burger)

function burger(event){
    if(event.target.closest('.burger')){
        
        header.classList.toggle('open')
    }

    if(!event.target.closest('.burger')){
        
        header.classList.remove('open')
    }


}

linkMe.addEventListener('click', function(e){
    e.preventDefault()
})

let btnPHP = document.querySelector('.btn')
let formName = document.querySelector('.form-control')
let phone = document.querySelector('.phone')
let textLetter = document.querySelector('.text-letter')

btnPHP.addEventListener('click', function(){
    if(formName.value == ''){
        formName.classList.add('red')
    }

    if(!formName.value == ''){
        formName.classList.remove('red')   
    }

    if(phone.value == ''){
        phone.classList.add('red')     
    }

    if(!phone.value == ''){
        phone.classList.remove('red')    
    }

    if(textLetter.value == ''){
        textLetter.classList.add('red')    
    }

    if(!textLetter.value == ''){
        textLetter.classList.remove('red')      
    }
})

formName.addEventListener('click', function(){
    formName.classList.remove('red') 
})
phone.addEventListener('click', function(){
    phone.classList.remove('red') 
})
textLetter.addEventListener('click', function(){
    textLetter.classList.remove('red') 
})





let anchors = document.querySelectorAll('a[href*="#"]')

for(let anchor of anchors){
    anchor.addEventListener('click', function(event){
        event.preventDefault()
        let blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}





