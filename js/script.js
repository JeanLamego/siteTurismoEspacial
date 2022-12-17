// fetch("../data.json").then((response)=>{
//     response.json().then((data)=>{
        
//     }
//     )
  
// });
fetch("../data.json").then(response => response.json()).then(data => trocaPlaneta(data))

const moonBtn = document.querySelector("#moon");

    function trocaPlaneta(data){
        data.destinations.forEach(element => {
            const imgPlanetas = element.images.png
            console.log('imgPlanetas');

            moonBtn.addEventListener('click', function(){
            const imgLua = document.querySelector("")
            })
            
        });
    
    }

const navBar = document.querySelector('.nav-bar');
const openBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-bar');

closeBtn.addEventListener('click', function(){
    navBar.classList.toggle("mostra");
})

openBtn.addEventListener('click', function(){
navBar.classList.toggle("mostra");
})
