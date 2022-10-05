"use strict";
drawLine();

function drawLine() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

 function drawname(){} 
//letter M

    context.beginPath();
    context.moveTo(300, 300);
    context.lineTo(300, 500);
    context.stroke();

    context.beginPath();
    context.moveTo(300, 300);
    context.lineTo(450, 350 );
    context.lineTo(600, 300);
    context.lineTo(600, 500 )
    context.stroke();

    //letter o

    context.beginPath();
    context.moveTo(800,500);
    context.lineTo(700, 400);
    context.lineTo(800, 300);
    context.lineTo(900, 400);
    context.lineTo(800, 500)
    context.stroke();

    


 }