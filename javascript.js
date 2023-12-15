let divE = document.querySelectorAll('form .page');

let button=document.querySelectorAll('button');
let range=document.getElementById('range');
let nom=document.getElementById('nom');
let prenom=document.getElementById('prenom');
let prenom_error=document.getElementById('prenom_error');
let nom_error=document.getElementById('nom_error');
let email_error=document.getElementById('email_error');
let phone_error=document.getElementById('telephone_error');
let entreprise_error=document.getElementById('entreprise_error');
let email=document.getElementById('E-mail');
let Téléphone=document.getElementById('Téléphone');
let entreprise=document.getElementById('entreprise');
let btnS=document.getElementById('Suivant');
let btnP=document.getElementById('Précédent');
let numerique=document.getElementById('numerique');

// Parse the current width as a number

           
btnP.style.display="none"
   
    // console.log("oki");
    
    
let index=0;
button.forEach((btn)=>{
numerique.innerHTML=index+1
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    
    let currentWidth = parseFloat(range.style.width) || 0;
    
    console.log(index+1)
if(btn.id === "Suivant"){
if(numerique<5){}
    numerique.innerHTML=index+2
    console.log(index+2)
    index++
    
    btnP.style.display="block"
    if((index + 1)==2){
        if(prenom.value===""){
        prenom_error.innerHTML="Entrer votre Prenom"
        prenom_error.style.color="red";
        btnS.style.display="none"
        btnP.style.display="block"
       
        // console.log("oki");
        
        }else{
            btnS.style.display="block"
        }
        if(nom.value===""){
        nom_error.innerHTML="Entrer votre Nom"
        nom_error.style.color="red";
        btnS.style.display="none"
       
        // console.log("oki");
        
        }
          
        if (email.value === "") {
            email_error.innerHTML = "Entrer votre Email";
            email_error.style.color = "red";
            btnS.style.display = "none";
        }
        if (Téléphone.value === ""  ) {
            phone_error.innerHTML ="Enter your Telephone Number";
            phone_error.style.color = "red";
            btnS.style.display = "none";
        }
        if(entreprise.value===""){
            entreprise_error.innerHTML="Enter  Nom de votre Entreprise"
            entreprise_error.style.color="red";
        btnS.style.display="none"
       
        // console.log("oki");
        
        }
        
      
        
    }
   
    range.style.width = (currentWidth + 25) + "%"; 
    
}else{
    if((index+1)==3){
    // btnS.style.display="none"
  
    
    }else
    {
        btnS.style.display="block"
        // btnP.style.display="block"
        
    }
    
index--
numerique.innerHTML=index+1
range.style.width = (currentWidth - 25) + "%"; 

}

if (index > divE.length - 1) {
    index = 0;
    range.style.width = "25%";
    // Check if input fields are empty to disable the button
    numerique.innerHTML=index+1
}
if (divE.length ) {
    // Parcours chaque div et affiche leur longueur
    divE.forEach(function(div, index) {
        console.log("Longueur de la div " + (index + 1) + " : " + div.textContent.length);
       
    });
    if(index+1==1){
 btnP.style.display="none";
    }
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
// console.log(divE[index]);



});


function handele(){

    if (
        prenom.value !== "" &&
        nom.value !== "" &&
        email.value!==""&&
        email.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) &&
        Téléphone.value !== "" &&
        Téléphone.value.match(/^\+212[5-9][0-9]{8}$/ ) &&
        entreprise.value !== ""
    ) {
        prenom_error.innerHTML=""
        nom_error.innerHTML=""
        email_error.innerHTML=""
        phone_error.innerHTML=""
        entreprise_error.innerHTML=""
        // prenom.innerHTML=""
        // Your code when all conditions are met
        btnS.style.display ="block"
    }else{
  
        btnS.style.display ="none"
    
    }
    


}



    


