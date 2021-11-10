var bouton=document.getElementById('bouton');
bouton.addEventListener('click', function bouton(){
var nom = document.getElementById("nom").value;
var prenom = document.getElementById("prenom").value;
var ville = document.getElementById("ville").value;
alert ('Nom : '+ nom +'\nPrénom : '+ prenom +'\nVille : '+ ville);
})