console.log("starting");

const canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

const c = canvas.getContext("2d");

const image = new Image();
image.src = '/assets/human-body.png';

let pos = {
  x: undefined,
  y: undefined,
};

window.addEventListener("click", function (event) {
  pos.x = event.x;
  pos.y = event.y;
  console.log(`x ${pos.x} y ${pos.y}`);
  c.beginPath();
  c.arc(pos.x, pos.y, 30, 0, Math.PI*2,false);
  c.strokeStyle = 'black';
  c.stroke();
  c.font = "15px Calibri";
  c.fillText(`x : ${pos.x} y : ${pos.y}`, pos.x + 25, pos.y - 25);
});


function draw(c,image){
  if(!image.complete){
    console.log('error');
    setTimeout(function(){
      draw(c,image);
    },50);
  }
  c.drawImage(image,20,20,1000,1200)
}

draw(c,image);