var context, controller, rectangle, loop;

context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 520;
context.canvas.width = 1300;

rectangle = {

  height:75,
  jumping:true,
  width:42,
  x:10, // center of the canvas
  dx:0,
  y:0,
  dy:0,
  right:function(){
    return this.x + this.width;
  },
  
  left:function(){
    return this.x;
  },

button:function(){
  return obstracles.height;
}
};

controller = {

  left:false,
  right:false,
  up:false,
  keyListener:function(event) {

    var key_state = (event.type == "keydown")?true:false;

    switch(event.keyCode) {

      case 37:// left key
        controller.left = key_state;
      break;
      case 38:// up key
        controller.up = key_state;
      break;
      case 39:// right key
        controller.right = key_state;
      break;

    }

  }

};

obstracles= {
  height:100,
  width:100,
   x:1000,
   y:405,
detection: function(){

}

};

loop = function() {

  if (controller.up && rectangle.jumping == false) {

    rectangle.dy -= 40;
    rectangle.jumping = true;

  }

  if (controller.left) {

    rectangle.dx -= 1.5;

  }

  if (controller.right) {

    rectangle.dx += 1.5;

  }

  rectangle.dy += 1.5;// gravity
  rectangle.x += rectangle.dx;
  rectangle.y += rectangle.dy;
  rectangle.dx *= 0.9;// friction
  rectangle.dy *= 0.9;// friction

  // if rectangle is falling below floor line
  if (rectangle.y > 520 - 16- 75) {

    rectangle.jumping = false;
    rectangle.y = 520 - 16 - 75;
    rectangle.dy = 0;

  }

  // if rectangle is going off the left of the screen
  if (rectangle.x < -42) {

    rectangle.x = 1300;

  } else if (rectangle.x > 1300) {// if rectangle goes past right boundary

    rectangle.x = -42;

  }

  context.fillStyle = "black";
  context.fillRect(0, 0, 1300, 520);// x, y, width, height
  context.fillStyle = "green";// hex for red
  context.beginPath();
  context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  context.fill();

  context.fillStyle="red";
    //obstracles and block

    //top of tunnel i.e not being obstracles
    context.fillRect(375,325,400,20);
    context.fillRect(1000,405,100,100);
    
   context.fillRect(1000,385,100,25);
  context.strokeStyle = "red";
  context.lineWidth = 4;
  context.beginPath();
  context.moveTo(0, 505);
  context.lineTo(1300, 505);
  context.stroke();

  // call update when the browser is ready to draw again
  window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);