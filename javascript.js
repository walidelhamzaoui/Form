let divE = document.querySelectorAll('form .page');
let button=document.querySelectorAll('button');
let cirle=document.getElementById('cirle');
// let nom=document.getElementById('nom');
// let prenom=document.getElementById('prenom');
// let email=document.getElementById('E-mail');
// let Téléphone=document.getElementById('Téléphone');
// let entreprise=document.getElementById('entreprise');
let btnS=document.getElementById('Suivant');
// Parse the current width as a number

let index=0;
button.forEach((btn)=>{

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    
    let currentWidth = parseFloat(cirle.style.width) || 0; 
if(btn.id === "Suivant"){
    index++
    
    cirle.style.width = (currentWidth + 25) + "%"; 
}else{
index--
cirle.style.width = (currentWidth - 25) + "%"; 
}

if (index > divE.length - 1) {
    index = 0;
    cirle.style.width = "25%";
    // Check if input fields are empty to disable the button
   
}

if (index < 0) {
    index = divE.length - 1;
   
}

divE.forEach((divelement)=>{
    divelement.classList.remove("active");
    // ScrollReveal({
    //     reset:true,ditance:'80px',duration:2000,delay:200
        
        
    //     });
    //     ScrollReveal().reveal('.page',{origin:'bottom'});
})
divE[index].classList.toggle('active');


})
console.log(divE)



});



