// let moonInfo = document.querySelector('#planet-container');

// fetch("data.json").then((response)=>{
//     response.json().then((destinations)=>{
//         console.log("destinations");
//     })
// })

const navBar = document.querySelector('.nav-bar');
const closeBar = document.querySelector('.nav-button.mostra');

// const closeBtn= addEventListener('click', function(){
//     navBar.classList.toggle("mostra");
// })
const closeBtn=addEventListener('click', function(){
    closeBar.classList.toggle("");
})

const openBtn= addEventListener('click', function(){
navBar.classList.toggle("mostra");
})
// $('.menu-btn').click(function(){
// $('.nav-bar').toggleClass('mostra')
// });
