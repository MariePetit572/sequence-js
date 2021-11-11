var img=document.getElementByID('img');
img.addEventListener('mouseover', function(event){
    event.target.src='../img/chat2.webp'
})
img.removeEventListener('mouseout',function(){
    this.src='../img/chat1.webp'
})
