var button=document.getElementById('button');
button.addEventListener('click', function button(){
var pointure = document.getElementById("pointure").value;
var annee = document.getElementById("annee").value;

alert ( ((((pointure*2)+5)*50)-annee)+1771);
})