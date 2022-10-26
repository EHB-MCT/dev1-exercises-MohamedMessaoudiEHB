"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "orange";
    context.fillRect(0, 0, width, height);

}
let space = 10;
let xspacing = width / 60;
drawStreep();

function drawStreep() {
    for (let i = 0; i < 60; i++) {
        Utils.drawLine(0 + (xspacing * i), 0, width - (xspacing * i), height);
    }
    let spacing = height / 30;
    for (let i = 0; i <= 30; i++) {
        Utils.drawLine(0, 0 + (spacing * i), width, height - (spacing * i));

    }

}