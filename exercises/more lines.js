"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width=context.canvas.width;
let height= context.canvas.height;

draw();

function draw(){
context.lineWidth = 2;
context.strokeStyle = "white";
context.fillStyle = "orange";
context.fillRect(0,0, width, height);

}
let space=10;
drawStreep();

function drawStreep(){
for (let i=0;i<(width/i);i++){
Utils.drawLine(0+(space*i),0,width-(space*i),height);
Utils.drawLine(0,0+(space*i),width,height-(space*i));
}

}