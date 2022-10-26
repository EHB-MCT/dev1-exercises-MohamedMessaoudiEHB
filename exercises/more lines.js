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
drawlijn();
}
let i=0;
let amount= width/i;

function drawlijn() {
for (let i =0; i<10;i++) {
Utils.drawline();
console.log("looping!");
}

}