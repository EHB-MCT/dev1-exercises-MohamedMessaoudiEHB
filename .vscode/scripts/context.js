" use strict";

/**
 * @type (canvasrenderingContext2D)
 */



let context;

setupCanvasContext();

export default context;

 function setupCanvasContext(){
    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    contex = canvas.getContext('2');
 }