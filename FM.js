document.forms[0].onsubmit = function(e){
    e.preventDefault();

    let nameValid=false;
    let prenomValid=false;
    let emailValid=false;
    let telephonValid=false;
    let genreValid=false;
    let groupeValide=false;
    let clubValide = false;

    //nom prenom
    let nom = document.getElementById('nom');
    let nomRe =  /^[a-z]{1,30}$/i ;
    let prenom = document.getElementById('prenom');
    let prenomRe =  /^[a-z]{1,30}$/i ;
    
    //email
    let email = document.getElementById('email');
    let emailRe = /^[a-zA-Z0-9]+(.)+[a-zA-Z0-9]+@(ofppt)(.(ma))$/;  
                
    //telephone
let telephone = document.getElementById('telephone')
let telephoneRe=/^(0)[5-7]\d{8}$/;

let genre1=document.getElementById('feminin').value;
let genre2=document.getElementById('masculin');

let message=document.getElementById('msg').value;

let clubs=document.getElementById('clubes');

let error=document.getElementById('error').value;



    if(nomRe.test(nom.value)){
        nameValid=true;
    document.getElementById("nom").style.borderColor = "green"
    
    }
    else{

        document.getElementById("nom").style.borderColor = "red"
    }
    if(prenomRe.test(prenom.value)){
        prenomValid=true;
        document.getElementById("prenom").style.borderColor = "green"
    
    }
    else{
        document.getElementById("prenom").style.borderColor = "red"
    }
    if(emailRe.test(email.value)){
        emailValid=true;
        document.getElementById("email").style.borderColor = "green"
    
    }
    else{
        document.getElementById("email").style.borderColor = "red"
    }
    if(telephoneRe.test(telephone.value)){
        telephonValid=true;
        document.getElementById("telephone").style.borderColor = "green"
        
    }
    else{
        document.getElementById("telephone").style.borderColor = "red"
    }
if(document.querySelector('[name=genre]:checked')==null){
    document.getElementById("msg").innerHTML= "ce champ est obligatoire";
}
else{
    genreValid=true;
    document.getElementById("msg").innerHTML= "";
}
if(document.querySelector('[name=groupe]:checked')==null){
    document.getElementById("message").innerHTML= "ce champ est obligatoire";
}
else{
    groupeValide=true;
    document.getElementById("message").innerHTML= "";
}


var selected=0;
for(let i = 0;i< clubs.length;i++){
    if(clubs[i].selected){
        selected++;
    }
}

if( selected < 1 || selected > 3 ){
    document.getElementById('error').innerHTML="choissisez de moin un club svp";
}
else{
    document.getElementById('error').style.borderColor="green"
    clubValide=true;
    }

if( nameValid === true && prenomValid === true && emailValid === true && telephonValid === true && genreValid === true && groupeValide === true && clubValide === true ){
    window.location.href = "done.html";
}
}
