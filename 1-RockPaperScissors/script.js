var scissor = document.querySelector('button#scissors');
var rock = document.querySelector('button#rock');
var paper = document.querySelector('button#paper');
var text = document.getElementById('text');
const gif = document.querySelector('.gifs img');
var computerPoint = 0;
var userPoint = 0;
var container = document.querySelector('.containe');
const kol = document.querySelector('.kol');
var cpointext = document.querySelector('.cp');
var upointext = document.querySelector('.up');

var list = ['scissors', 'rock', 'paper'];


get_random = function (list) {
    return list[Math.floor((Math.random() * list.length))];
}




scissor.addEventListener('click', function () {
    var computerChoose = get_random(list);
    kol.style.visibility='visible';
    container.style.backgroundColor ='#9999FF';
    if(computerChoose == 'paper'){
        text.textContent = 'You Win !'; 
        text.style.color ='green';
        setTimeout(function(){
            text.style.color = '#333';
        },1000)
        userPoint++;
        upointext.textContent =userPoint;
        gif.src = '../RockPaperScissors/gifs/paper-scissors.gif';
        
        
    }else if(computerChoose == 'rock'){
        text.textContent = 'You Lose !'; 
        text.style.color ='red';
        setTimeout(function(){
            text.style.color = '#333';
        },1000)
        computerPoint++;
        cpointext.textContent =computerPoint;
        gif.src = '../RockPaperScissors/gifs/rock-scissors.gif';
    }else{
        text.textContent = 'Draw !'; 
        gif.src = 'https://cdn.dribbble.com/users/1187360/screenshots/6114030/eeeeee-_converted_.gif';
        container.style.backgroundColor ='#F6C4C9';
        kol.style.visibility='hidden';
        
    }
    text.style.visibility ='visible';
    
   
})



rock.addEventListener('click', function () {
    var computerChoose = get_random(list);
    kol.style.visibility='visible';
    container.style.backgroundColor ='#9999FF';
    if(computerChoose == 'scissors'){
        text.textContent = 'You Win !'; 
        text.style.color ='green';
        setTimeout(function(){
            text.style.color = '#333';
        },1000)
        userPoint++;
        upointext.textContent =userPoint;
        gif.src = '../RockPaperScissors/gifs/sicssors-rock.gif';
        
    }else if(computerChoose == 'paper'){
        text.textContent = 'You Lose !'; 
        text.style.color ='red';
        setTimeout(function(){
            text.style.color = '#333';
        },1000)
        computerPoint++;
        cpointext.textContent =computerPoint;
        gif.src = '../RockPaperScissors/gifs/paper-rock.gif';
    }else{
        text.textContent = 'Draw !'; 
        gif.src = 'https://cdn.dribbble.com/users/1187360/screenshots/6114030/eeeeee-_converted_.gif';
        container.style.backgroundColor ='#F6C4C9';
        kol.style.visibility='hidden';
    }
    text.style.visibility ='visible';
    
    
})



paper.addEventListener('click', function () {
    var computerChoose = get_random(list);
    container.style.backgroundColor ='#9999FF';
    kol.style.visibility='visible';

    if(computerChoose == 'rock'){
        text.textContent = 'You Win !';
        text.style.color ='red';
        setTimeout(function(){
            text.style.color = '#333';
        },1000) 
        text.style.color ='green';
        setTimeout(function(){
            text.style.color = '#333';
        },1000)
        userPoint++;
        upointext.textContent =userPoint;
        gif.src = '../RockPaperScissors/gifs/rok-paper.gif';
    }else if(computerChoose == 'scissors'){
        text.textContent = 'You Lose !'; 
        computerPoint++;
        cpointext.textContent =computerPoint;
        gif.src = '../RockPaperScissors/gifs/scissors-paper.gif';
    }else{
        text.textContent = 'Draw !'; 
        gif.src = 'https://cdn.dribbble.com/users/1187360/screenshots/6114030/eeeeee-_converted_.gif';
        container.style.backgroundColor ='#F6C4C9';
        kol.style.visibility='hidden';
    }
    text.style.visibility ='visible';
    
})
    
    



