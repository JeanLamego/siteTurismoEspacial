// let moonInfo = document.querySelector('#planet-container');

// fetch("data.json").then((response)=>{
//     response.json().then((destinations)=>{
//         console.log("destinations");
//     })
// })

const navBar = document.querySelector('.nav-bar');
const openBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-bar');

closeBtn.addEventListener('click', function(){
    navBar.classList.toggle("mostra");
})

openBtn.addEventListener('click', function(){
navBar.classList.toggle("mostra");
})
