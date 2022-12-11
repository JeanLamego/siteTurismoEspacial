// let moonInfo = document.querySelector('#planet-container');
const moonClick = document.querySelector('#moon')

const navBar = document.querySelector('.nav-bar');
const openBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-bar');



fetch("../data.json").then((response)=>{
    response.json().then((data)=>{
        console.log(data.destinations);
    },
    )

});





document.querySelector

// moonClick.addEventListener('click', function(){

// })

closeBtn.addEventListener('click', function(){
    navBar.classList.toggle("mostra");
})

openBtn.addEventListener('click', function(){
navBar.classList.toggle("mostra");
})
