var img=document.getElementByID('img');
img.onmouseover=()=>
{
    if(img.getAttribute('src')=='assets/img/chat1.webp') {


    img.getAttribute('src','assets/img/chat2.webp'); }
    else{
        img.onmouseout('src','assets/img/chat1.webp');
    }
}





