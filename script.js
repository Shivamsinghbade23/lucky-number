'use strict';



//  check  event handling
let secretNumber = Math.trunc(Math.random()*20 + 1);
let highScore = 0;
let score = 20;

// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click',function () {
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent = 'Please Input something';
    }
    else{
        if(score > 0){
            if(guess === secretNumber){
                document.querySelector('body').style.backgroundColor = 'green';
                document.querySelector('.message').textContent = 'You won the game';

                document.querySelector('.number').textContent = secretNumber;
                document.querySelector('.check').style.display = 'none';
                document.querySelector('.number').style.width = '25rem';

                if(score > highScore){
                    highScore = score;
                }
                document.querySelector('.highscore').textContent = highScore;
            }
            else{
                document.querySelector('.message').textContent = (guess > secretNumber) ? 'too high' : 'too low';
                score--;
                document.querySelector('.score').textContent = score;
            }
        }
        else{
            document.querySelector('.message').textContent = 'You Loss the game';
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }
});

document.querySelector('.again').addEventListener('click',function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.guess').textContent = '';
    document.querySelector('body').style.backgroundColor = '#222';
    secretNumber = Math.trunc(Math.random()*20 + 1);
    document.querySelector('.number').textContent = '?';
});
