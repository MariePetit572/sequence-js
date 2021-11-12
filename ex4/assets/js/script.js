var bouton=document.getElementById('bouton');

var recupValue=function(){
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var ville = document.getElementById("ville").value;
    alert ('Nom : '+ nom +'\nPrénom : '+ prenom +'\nVille : '+ ville);
};
bouton.addEventListener('click', recupValue); 