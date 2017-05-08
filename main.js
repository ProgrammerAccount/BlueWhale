/* global drawWave */

var canvas = document.getElementById("blue");
var ctx= canvas.getContext("2d");
var x1=-400,x2=0,x3=400,x4=-800;
var i=0;
var a=0;
var bool=false;
var number;
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    i=i+0.1;
    
    drawWhale(a);
    drawWave();
    drawSun();
    if(Math.round(a)===6)bool=true;
    if(Math.round(a)===-6)bool=false;
    if(bool===false)a=a+0.05;
    else a=a-0.05;
}

setInterval(draw,10);
//draw();