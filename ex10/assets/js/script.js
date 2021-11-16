var prenom='Marie';
var userName=document.getElementById('userName');
var blocAlert=document.getElementById('blocAlert');

userName.addEventListener('keyup', function () {
    if (userName.value!=prenom) {
         userName.style.border= 'red 6px solid';
    blocAlert.innerHTML='<div class=" alert alert-danger">Mauvaise réponse!</div>';
}  else { 
        userName.style.border= 'green 6px solid';
    blocAlert.innerHTML='<div class=" alert alert-success">Bonne réponse!</div>';}
 })

