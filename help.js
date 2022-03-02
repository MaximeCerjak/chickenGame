function colision() 
{
    let xMidL = pong.pongX + pong.L - sprite.L/2;
    let xMidR = pong.pongX + pong.L + sprite.L/2;
    
    if (sprite.y == 0) {
        sprite.dir = 1;
        sprite.y += sprite.dir;
        displayGame();
    } else if (sprite.y == canvas.height) {
        over.gameOver = true;
        displayGame();
        console.log(over.gameOver);
    } else if (sprite.y + sprite.L/2 == pong.pongY && sprite.x >= xMidL && sprite.x <= xMidR){
        sprite.dir = -1;
        sprite.y += sprite.dir;
        displayGame();
    } else if (sprite.y + sprite.L/2 == pong.pongY && sprite.x >= pong.pongX && sprite.x <= xMidL) {
        sprite.dir = -1;
        sprite.dirL = -1;
        sprite.dirX = null;
        sprite.y += sprite.dir;
        sprite.x += sprite.dirL;
        displayGame();
    } else if (sprite.y + sprite.L/2 == pong.pongY && sprite.x >= xMidR && sprite.x <= pong.pongX + pong.L) {
        sprite.dir = -1;
        sprite.dirR = 1;
        sprite.dirX = null;
        sprite.y += sprite.dir;
        sprite.x += sprite.dirR;
        displayGame();
    } else if (sprite.x + sprite.L/2 >= canvas.width) {
        sprite.dirX = -1;
        sprite.dirR = null;
        sprite.x += sprite.dirX;
        displayGame();
    } else if (sprite.x <= 5) {
        sprite.dirX = 1;
        sprite.dirL = null;
        sprite.x += sprite.dirX;
        displayGame();
    } 
    
    
}

function colision() 
{
    let xMidL = pong.pongX + pong.L/2 - ball.rayon;
    let xMidR = pong.pongX + pong.L/2 + ball.rayon;
    
    if (ball.ballY == 0) {
        ball.dir = 1;
        ball.ballY += ball.dir;
        displayGame();
    } else if (ball.ballY == canvas.height) {
        over.gameOver = true;
        displayGame();
        console.log(over.gameOver);
    } else if (ball.ballY + ball.rayon == pong.pongY && ball.ballX >= xMidL && ball.ballX <= xMidR){
        ball.dir = -1;
        ball.ballY += ball.dir;
        displayGame();
    } else if (ball.ballY + ball.rayon == pong.pongY && ball.ballX >= pong.pongX && ball.ballX <= xMidL) {
        ball.dir = -1;
        ball.dirL = -1;
        ball.dirX = null;
        ball.ballY += ball.dir;
        ball.ballX += ball.dirL;
        displayGame();
    } else if (ball.ballY + ball.rayon == pong.pongY && ball.ballX >= xMidR && ball.ballX <= pong.pongX + pong.L) {
        ball.dir = -1;
        ball.dirR = 1;
        ball.dirX = null;
        ball.ballY += ball.dir;
        ball.ballX += ball.dirR;
        displayGame();
    } else if (ball.ballX + ball.rayon >= canvas.width) {
        ball.dirX = -1;
        ball.dirR = null;
        ball.ballX += ball.dirX;
        displayGame();
    } else if (ball.ballX <= 5) {
        ball.dirX = 1;
        ball.dirL = null;
        ball.ballX += ball.dirX;
        displayGame();
    } 
    
    
}
 
