let divE = document.querySelectorAll('form .page');
/********Selection les Element****/////
let button=document.querySelectorAll('button');
let range=document.getElementById('range');
let nom=document.getElementById('nom');
let prenom=document.getElementById('prenom');
let email=document.getElementById('E-mail');
let Téléphone=document.getElementById('Téléphone');
let entreprise=document.getElementById('entreprise');
let btnS=document.getElementById('Suivant');
let btnP=document.getElementById('Précédent');
let numerique=document.getElementById('numerique');
/********Selection les errors****/////
let prenom_error=document.getElementById('prenom_error');
let nom_error=document.getElementById('nom_error');
let email_error=document.getElementById('email_error');
let phone_error=document.getElementById('telephone_error');
let entreprise_error=document.getElementById('entreprise_error');

/*********** 'état initial d'un bouton "Précédent" */
btnP.style.display="none"
   
   
let index=0;  
/*********loop les button */

button.forEach((btn)=>{
numerique.innerHTML=index+1
btn.addEventListener('click',(e)=>{
    e.preventDefault();

 let currentWidth = parseFloat(range.style.width) || 0;
    
   
if(btn.id === "Suivant"){
/***************numeration ***** */
    numerique.innerHTML=index+2
  
    index++
    
    btnP.style.display="block"
    /********************validation des input vide******************/
    if((index + 1)==2){
        if(prenom.value===""){
        prenom_error.innerHTML="Entrez votre prénom"
        prenom_error.style.color="red";
        btnS.style.display="none"
        prenom_error.style.paddingTop="10px";
        prenom_error.style.paddingLeft="5px";
        btnS.style.display="none"
        btnP.style.display="block"
       
        
        
        }else{
            btnS.style.display="block"
        }
        if(nom.value===""){
        nom_error.innerHTML="Entrez votre nom"
        nom_error.style.color="red";
       
        nom_error.style.paddingTop="10px";
        nom_error.style.paddingLeft="5px";
        btnS.style.display="none"
       
        
        
        }
          
        if (email.value === "") {
            email_error.innerHTML = "Entrez votre email";
            email_error.style.color = "red";
            email_error.style.paddingTop="10px";
            email_error.style.paddingLeft="5px";
            btnS.style.display = "none";
        }
        if (Téléphone.value === ""  ) {
            phone_error.innerHTML ="Entrez votre numéro de téléphone";
            phone_error.style.color = "red";
            
            phone_error.style.paddingTop="10px";
            phone_error.style.paddingLeft="5px";
            btnS.style.display = "none";
        }
        if(entreprise.value===""){
            entreprise_error.innerHTML=" Entrez le nom de votre entreprise"
            entreprise_error.style.color="red";
             
           entreprise_error.style.paddingTop="10px";
           entreprise_error.style.paddingLeft="5px";
        btnS.style.display="none"
       
        
        }
        
      
        
    }
   
    range.style.width = (currentWidth + 25) + "%"; 
    
}else{
/************************retourner par button Précédent  */
    if((index+1)==3){
   
  
    
    }else
    {
        btnS.style.display="block"
        // btnP.style.display="block"
        
    }
    
index--
numerique.innerHTML=index+1
range.style.width = (currentWidth - 25) + "%"; 

}
/********************  veifirez form qui class range et leur longueur*/
if (index > divE.length - 1) {
    index = 0;
    range.style.width = "25%";
/************************numeration */
    numerique.innerHTML=index+1
}
if (divE.length ) {
    // Parcours chaque div et affiche leur longueur
    divE.forEach(function(div, index) {
        console.log("Longueur de la div " + (index + 1) + " : " + div.textContent.length);
       
    });
    /*******************aprés le retour de index1 button disparait */
    if(index+1==1){
 btnP.style.display="none";
    }
}

if (index < 0) {
    index = divE.length - 1;
   
}
/**************loop les elements */
divE.forEach((divelement)=>{
    divelement.classList.remove("active");
 
})
divE[index].classList.toggle('active');


})



});

/**************************validation des input not vide */
function handele(){

    if (
        prenom.value !== "" &&
        nom.value !== "" &&
        email.value!==""&&
        email.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) &&
        Téléphone.value !== "" &&
        Téléphone.value.match(/^(?:\+212|0)([5-9]\d{8})$/) &&
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



    


