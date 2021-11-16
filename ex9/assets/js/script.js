var initwidthimg =img.clientWidth;
var img=document.getElementById('img');
// verifier la taille de l image initiale en f12:
// console.log(img.clientWidth);
img.addEventListener('click',function(){
    var widthimg =img.clientWidth;
    if(widthimg>1500){
        img.style.width=(initwidthimg+'px')
    } else { 
        img.style.width= (widthimg*1.1+'px')
 }
});
// correction https://github.com/Manito764/Exercices-JS