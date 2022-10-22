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
    context.lineTo(450,350 );
    context.stroke();

    context.beginPath();
    context.moveTo(450, 350);
    context.lineTo(400, 220 );
    context.stroke();


 }
