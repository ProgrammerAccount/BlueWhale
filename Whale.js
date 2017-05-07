/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*global ctx, canvas, context, angle*/
var angle=0;
function drawEye(bool)
{
    if(bool)
    {
    ctx.save();
    ctx.moveTo(85,-20);
    ctx.fillStyle="#ffffff";
    ctx.arc(85 ,-20,16,0,Math.PI);  
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle="#000000";
    ctx.moveTo(85,-20);
    ctx.arc(85 ,-20,8,0,Math.PI);
    ctx.closePath();

    ctx.fill();
    ctx.restore();
    }
    else
    {
    ctx.save();
    ctx.moveTo(85,-20);
    ctx.fillStyle="#ffffff";
    ctx.arc(85 ,-20,16,0,Math.PI*2); // kąt podany w radiantach  
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle="#000000";
    ctx.moveTo(85,-20);
    ctx.arc(85 ,-20,8,0,Math.PI*2);// kąt podany w radiantach 
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    }
}
function drawWhale(bool)
{
    
    var img=document.getElementById("whale");
    if(bool===true) angle=angle+0.1;
    else angle=angle-0.1;
    
    ctx.save();
    ctx.translate(canvas.width/2,canvas.height/2+100);
    ctx.rotate(angle*Math.PI/180);    
    ctx.drawImage(img,-img.width/2,-img.height/2,300,300);
    drawEye(bool);
    ctx.restore();
    //console.log(angle);
   

    

    
}


