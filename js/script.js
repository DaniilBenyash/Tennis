const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 600;

let coordX = 200;
let coordY = 300;

let speedBallY = 0;
let speedBallX = 0;

let coordPlatX = 150;
let coordPlatY = 570;

let coordEnemyX = 150;
let coordEnemyY = 20;


addEventListener('keydown', (key) => {
    
    if(key.key == 'ArrowRight'){
        if(coordPlatX === canvas.width - 100){
            return
        }
        coordPlatX += 10
    }
    if(key.key == 'ArrowLeft'){
        if(coordPlatX === 0){
            return
        }
        coordPlatX -= 10
    }
});


function moveBall(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();

    ctx.fillStyle = '#ec6464';
   
    ctx.fillRect(coordPlatX, coordPlatY, 100, 10)
    
    coordY -= speedBallY
    
    if(coordPlatX+100 > coordX && coordPlatX < coordX ){
        if(coordY == coordPlatY) speedBallY = -speedBallY
    }

    coordX += speedBallX

    if(coordX > canvas.width - 10){
        speedBallX = -speedBallX
    } 
    if(coordX < 10){
        speedBallX = -speedBallX
    } 
    
    ctx.fillStyle = '#ec6464';
    ctx.fillRect(coordEnemyX, coordEnemyY, 100, 10)

    let speedEnemy = speedBallX 
    
    if(coordEnemyX + 50 != coordX){

        if(coordEnemyX > canvas.width - 100 || coordEnemyX < 0){
            speedEnemy = 0
        }
        if(speedBallX > 0){
            coordEnemyX += (Math.random()*speedEnemy) + 0.8
        }
        if(speedBallX < 0){
            coordEnemyX += (Math.random()*speedEnemy) - 0.8
        }
    }

    if(coordEnemyX+100 > coordX && coordEnemyX < coordX){
        if(coordY == coordEnemyY + 10) speedBallY = -speedBallY
    }

    ctx.fillStyle = 'yellow'
    ctx.arc(coordX, coordY, 10, 0, Math.PI * 2);
    ctx.fill()

    if(coordY < 10){
        document.querySelector('.valYou').innerText++
        cancelAnimationFrame(moveBall);
        return
    }
    if(coordY > 590){
        document.querySelector('.valEnemy').innerText++
        cancelAnimationFrame(moveBall);
        return
    };
    requestAnimationFrame(moveBall)
}
moveBall();

function start(){
    coordX = 200;
    coordY = 300;
    coordPlatX = 150;
    coordPlatY = 570;
    coordEnemyX = 150;
    coordEnemyY = 20;
    moveBall();
}

document.querySelector('.butPlay').addEventListener('click',() => {
    if(speedBallX == 0){
        speedBallX = 3;
        speedBallY = 3
    }
    if(coordY < 10){
        speedBallX = -3;
        speedBallY = -3
        start();
    }
    if(coordY > 590){
        speedBallX = 3;
        speedBallY = 3
        start();
    }
})