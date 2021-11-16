var btn = document.getElementById('button');

btn.addEventListener('click', function(){
    var age = document.getElementById('age').value;
    
    //1ère méthode
    // if(age >= 18 && age <= 120){
    //     alert('Vous êtes majeur !');
    // } else if(age > 0 && age < 18) {
    //     alert('Vous êtes mineur !')
    // } else {
    //     alert('Arrête tes conneries !');
    // }



    //2ème méthode
    if(age > 0 && age <= 120){
        if(age >= 18 && age <= 120){
            alert('Vous êtes majeur !');
        } else {
            alert('Vous êtes mineur !');
        }
    } else {
        alert('Arrête tes conneries !');
    }
})