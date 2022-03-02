/********************************************************************
 * *****************************************************************
 * 
 * DECLARATION DES VARIABLES
 * 
 * ********************************************************************
 * ****************************************************************/
let count = 0;

let ball = {
    color : "#EFE10C",
    rayon : 15,
    ballX : 430,
    ballY : 200,
    dir : 1,
    dirL : null,
    dirR : null,
    dirX : null,
};

let sprite = {
    src : 'picture/chickenFly.png',
    L : 50,
    H : 45,
    x : 420,
    y : 300,
    dir : 1,
    speed : 1,
    dirL : null,
    dirR : null,
    dirX : null
};

let spriteChicken = new Image();
spriteChicken.onload = playGame;
spriteChicken.src = sprite.src;

let step = 0;


let pong = {
    color : "#FF0000",
    L : 100,
    H : 25,
    pongX : 390,
    pongY : 430
};

let game = {
    gameOver : false,
    pause : false,
    play : true
};

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');



/********************************************************************
 * *****************************************************************
 * 
 * AppRun
 * 
 * ********************************************************************
 * ****************************************************************/



document.addEventListener('DOMContentLoaded', function(){
   
    playGame();
   
    
});




/********************************************************************
 * *****************************************************************
 * 
 * DECLARATION DES FONCTIONS
 * 
 * ********************************************************************
 * ****************************************************************/
 
 
 /********************************
 * RUN()
 * *****************************/
 
 function playGame(){
    
    drawSprite(Math.floor(step));
    colision();
    
    // drawBall();
    sprite.y += sprite.dir * sprite.speed;
    sprite.x += sprite.dirL * sprite.speed;
    sprite.x += sprite.dirR * sprite.speed;
    sprite.x += sprite.dirX * sprite.speed;
    // ball.ballY += ball.dir;
    // ball.ballX += ball.dirL;
    // ball.ballX += ball.dirR;
    // ball.ballX += ball.dirX;
    
    displayGame();
    
    requestAnimationFrame(playGame);
    
}

function gameOver() {
    ctx.beginPath();
    ctx.font = "50px Zelda";
    ctx.fillStyle = "black";
    ctx.fillText('GAME OVER', 320, 300, 250);
    ctx.fill();
}
   
 
 
function displayGame() {
    
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawSprite(Math.floor(step));
        // drawBall();
        stepUp();
        drawPong();
        initGame();
        level();
        if (game.gameOver == true) {
            gameOver();
            return;
        }
        
}
    

    
function stepUp() {
    step += 0.1;
    if(step >= 5){
        step -= 5;
    }
} 

// function level() {
//     while(count == 6) {
//         sprite.speed *= 1000/1500;
//         break;
//     }
//     while(count == 14) {
//         sprite.speed *= 1000/1000;
//         break;
//     }
// }

function level() {
    if(count > 6 && count < 14 && sprite.y == 0) {
            sprite.speed = 1.1;
            colision();
            console.log(sprite.speed);
            console.log(count);
            console.log(sprite.y);
    } else if (count > 6 && count < 14 ) {
        sprite.speed = 1.2;
         colision();
    } else if (count > 14 && count < 24 ) {
        sprite.speed = 1.3;
         colision();
    }  else if (count > 24 && count < 34 ) {
        sprite.speed = 1.5;
         colision();
    }  else if (count > 34 && count < 50 ) {
        sprite.speed = 1.7;
         colision();
    }  else if (count > 50 && count < 70 ) {
        sprite.speed = 2;
         colision();
    }  
    
}


function initGame() 
{
    document.addEventListener("keydown", movePong);
}


/********************************
 * DRAW()
 * *****************************/
 
 function drawPong() {
    
    ctx.fillStyle = pong.color;
    ctx.beginPath();
    ctx.rect(pong.pongX, pong.pongY, pong.L, pong.H);
    ctx.fill();
}


function drawSprite(step) {
    ctx.drawImage(spriteChicken, 50*step, 0, 50, 45, sprite.x, sprite.y, 50, 45 );    
}




// function drawBall() {
    
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fillStyle = ball.color;
//     ctx.beginPath();
//     ctx.arc(ball.ballX, ball.ballY, ball.rayon, 0, 2 * Math.PI);
//     ctx.fill();
// }

/********************************
 * TOOLS()
 * *****************************/
 
 function movePong(e) 
{
    
  switch(e.key) {

    case 'ArrowRight':
        if (pong.pongX + pong.L < canvas.width )pong.pongX += 30;
        break;
    case 'ArrowLeft':
        if (pong.pongX > 0) pong.pongX -= 30;
        break;
    }

    drawPong();
                
}  

function colision() 
{
    let xMidL = pong.pongX + 20;
    let xMidR = pong.pongX + 35;
    
    if (sprite.y <= 0) {
        sprite.dir = sprite.speed;
        sprite.y += sprite.dir;
        count++;
        
        console.log(count);
        displayGame();
    } else if (sprite.y >= canvas.height-100) {
        game.gameOver = true;
        displayGame();
        console.log(game.gameOver);
    } else if (sprite.y + sprite.H == pong.pongY && sprite.x >= xMidL && sprite.x <= xMidR){
        sprite.dirL = null;
        sprite.dirR = null;
        sprite.dirX = null;
        sprite.dir = sprite.speed * -1;
        sprite.y += sprite.dir;
        count++;
        
        console.log(count);
        displayGame();
    } else if (sprite.y + sprite.H >= pong.pongY && sprite.x >= pong.pongX && sprite.x <= xMidL) {
        sprite.dir = sprite.speed * -1;
        sprite.dirL = sprite.speed * -1;
        sprite.dirX = null;
        sprite.y += sprite.dir;
        sprite.x += sprite.dirL;
        count++;
        
        console.log(count);
        displayGame();
    } else if (sprite.y + sprite.H >= pong.pongY && sprite.x >= xMidR - sprite.L && sprite.x <= pong.pongX + pong.L) {
        sprite.dir = sprite.speed * -1;
        sprite.dirR = sprite.speed;
        sprite.dirX = null;
        sprite.y += sprite.dir;
        sprite.x += sprite.dirR;
        count++;
        
        console.log(count);
        displayGame();
    } else if (sprite.x + sprite.L >= canvas.width) {
        sprite.dirX = sprite.speed * -1;
        sprite.dirR = null;
        sprite.x += sprite.dirX;
        count++;
     
        console.log(count);
        displayGame();
    } else if (sprite.x <= 5) {
        sprite.dirX = sprite.speed;
        sprite.dirL = null;
        sprite.x += sprite.dirX;
        count++;
       
        console.log(count);
        displayGame();
    } 
    
}
    
    

/******************************************
 * COLISION BALL
 * 
 * ***************************************/

// function colision() 
// {
//     let xMidL = pong.pongX + pong.L/2 - ball.rayon;
//     let xMidR = pong.pongX + pong.L/2 + ball.rayon;
    
//     if (ball.ballY == 0) {
//         ball.dir = 1;
//         ball.ballY += ball.dir;
//         displayGame();
//     } else if (ball.ballY == canvas.height) {
//         over.gameOver = true;
//         displayGame();
//         console.log(over.gameOver);
//     } else if (ball.ballY + ball.rayon == pong.pongY && ball.ballX >= xMidL && ball.ballX <= xMidR){
//         ball.dir = -1;
//         ball.dirL = null;
//         ball.dirR = null;
//         ball.dirX = null;
//         ball.ballY += ball.dir;
//         displayGame();
//     } else if (ball.ballY + ball.rayon == pong.pongY && ball.ballX >= pong.pongX && ball.ballX <= xMidL) {
//         ball.dir = -1;
//         ball.dirL = -1;
//         ball.dirX = null;
//         ball.ballY += ball.dir;
//         ball.ballX += ball.dirL;
//         displayGame();
//     } else if (ball.ballY + ball.rayon == pong.pongY && ball.ballX >= xMidR && ball.ballX <= pong.pongX + pong.L) {
//         ball.dir = -1;
//         ball.dirR = 1;
//         ball.dirX = null;
//         ball.ballY += ball.dir;
//         ball.ballX += ball.dirR;
//         displayGame();
//     } else if (ball.ballX + ball.rayon >= canvas.width) {
//         ball.dirX = -1;
//         ball.dirR = null;
//         ball.ballX += ball.dirX;
//         displayGame();
//     } else if (ball.ballX <= 5) {
//         ball.dirX = 1;
//         ball.dirL = null;
//         ball.ballX += ball.dirX;
//         displayGame();
//     } 
    
    
// }






         

