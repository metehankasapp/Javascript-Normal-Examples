var man = document.querySelector('.man');
var html = document.querySelector('html');
var movingbox = document.querySelector('.rock');






//man jump
var num = 0;
html.addEventListener('keyup', function (e) {

    
    for(let i =0;i<60;i++){
        num+=1;
        man.style.bottom = `${num}px`;
        
        
    };

    man.style.transition = '.9s bottom';

    setTimeout(function () {
        for(let i = num;i>0;i--){
            num-=1;
            if(num >= 60){
                num -=0;
            };
            man.style.bottom = `${num}px`;
            
        };
    }, 700); //havada kalma süresi
    

    
    e.preventdefault;
})





function move(who, fast) {

    who.style.right = '10px';
    var moves = -50;

    setInterval(function () {
        moves += 1;
        who.style.right = `${moves}px`;
        if (moves == 600) {
            moves = -50;
        }




    }, fast);

    


}




let isCrash = setInterval(function(){

    let dinoTop = parseInt(window.getComputedStyle(man).getPropertyValue("bottom"));

    let movingboxLeft = parseInt(window.getComputedStyle(movingbox).getPropertyValue("left"));
    
    
    
    if(movingboxLeft < 50 && movingboxLeft > 0  && dinoTop<40){
        alert('Game Over !');
    }
})


move(movingbox, 1);






