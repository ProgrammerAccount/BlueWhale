/* global drawWave */

var canvas = document.getElementById("blue");
var ctx= canvas.getContext("2d");
var x1=-400,x2=0,x3=400,x4=-800;
var i=0;
var date = new Date(); 
var bool=false;
var number;
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    i=i+0.1;
    drawWhale(bool);
    drawWave();
    number=(Date.now()/1000)%10;
    
    if(number<5)bool=true;
    if(number>5) bool=false;
    console.log(number%10);

   
         
    
    
}

setInterval(draw,10);
//draw();