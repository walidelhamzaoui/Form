let divE = document.querySelectorAll('form .page');

let button=document.querySelectorAll('button');
let range=document.getElementById('range');
let nom=document.getElementById('nom');
let prenom=document.getElementById('prenom');
let prenom_error=document.getElementById('prenom_error');
let nom_error=document.getElementById('nom_error');
let email_error=document.getElementById('email_error');
let Téléphone_error=document.getElementById('telephone_error');
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

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    
    let currentWidth = parseFloat(range.style.width) || 0;
    
if(btn.id === "Suivant"){
   
    index++
    btnP.style.display="block"
    if((index + 1)==2){
        if(prenom.value===""){
        prenom_error.innerHTML="enter votre prenom"
        prenom_error.style.color="red";
        btnS.style.display="none"
        btnP.style.display="block"
       
        // console.log("oki");
        
        }else{
            btnS.style.display="block"
        }
        if(nom.value===""){
        nom_error.innerHTML="enter votre nom"
        nom_error.style.color="red";
        btnS.style.display="none"
       
        // console.log("oki");
        
        }
        if(email.value===""){
        email_error.innerHTML="enter votre email"
        email_error.style.color="red";
        btnS.style.display="none"
       
        // console.log("oki");
        
        }
        if (Téléphone.value === "" || !/^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/) {
            Téléphone_error.innerHTML = "Entrez un numéro valide";
            Téléphone_error.style.color = "red";
            btnS.style.display = "none";
        }
        if(entreprise.value===""){
            entreprise_error.innerHTML="enter votre entrese"
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
range.style.width = (currentWidth - 25) + "%"; 

}

if (index > divE.length - 1) {
    index = 0;
    range.style.width = "25%";
    // Check if input fields are empty to disable the button
   
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
console.log(divE)



});
function verifier() {
 
}

function handele(){

if(prenom.value!=="" && nom.value!==""&& email.value!==""&& Téléphone.value!==""&& entreprise.value!==""){
    btnS.style.display="block";
    prenom_error.innerHTML=""
    nom_error.innerHTML=""
    email_error.innerHTML=""
    Téléphone_error.innerHTML=""
    entreprise_error.innerHTML=""

}else{
    btnS.style.display="none"

}


}




