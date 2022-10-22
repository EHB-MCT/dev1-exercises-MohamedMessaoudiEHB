"use strict";

let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   let width= context.canvas.width;
   let height= context.canvas.height;



drawrect(100, 600);
drawrect(150, 500);
drawrect(200, 400);
drawrect(250, 300);
drawrect(300, 200);
drawrect( 350, 100);


function drawrect(pos, size){

let g= Math.floor(Math.random()*255);
let r= Math.floor(Math.random()*255);
let h= Math.floor(Math.random()*255);

let color="rgb("+ r+ "," + g + "," +h+ ")"; 

context.fillStyle= color;
context.fillRect(pos,pos,size, size);




}