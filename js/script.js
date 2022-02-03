const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 600;

centerX = 200;
centerY = 300;




let radiusBall = 10;

let coordBallY = 3;
let coordBallX = 3;

let strX = 160;
let strY = 570;

canvas.addEventListener('click',() =>{
    strX += 10
})
addEventListener('keydown', (key) => {
    
    if(key.key == 'ArrowRight'){
        if(strX === 320){
            return
        }
        strX += 10
    }
    if(key.key == 'ArrowLeft'){
        if(strX === 0){
            return
        }
        strX -= 10
    }
    console.log(strX);
});

function moveBall(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();
    ctx.strokeRect(0,0,canvas.width,canvas.height)
    
    ctx.fillStyle = 'green';
   
    
    ctx.fillRect(strX, strY, 80, 10)
    
    centerY -= coordBallY
    
    if( strX+80 > centerX && strX < centerX ){
        if(centerY < 13) coordBallY = -coordBallY
        if(centerY > strY-10) coordBallY = -coordBallY
    }else{
        if(centerY < 13) coordBallY = -coordBallY
        
    }

    centerX += coordBallX
    if(centerX > 390){
        coordBallX = -coordBallX
        console.log('qwe');
    } 
    if(centerX < 10){
        coordBallX = -coordBallX
        console.log('qwe');
    } 
    console.log(centerX);
    
    ctx.fillStyle = 'red'
    ctx.arc(centerX, centerY, radiusBall, 0, Math.PI * 2);
    ctx.fill()

    

    
    if( centerY > 590){
        alert('sasai kudasai')
        cancelAnimationFrame()
    };
    requestAnimationFrame(moveBall);
}
moveBall();

