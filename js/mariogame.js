
// this.ctx.fillRect(375,275,400,50);
//     this.ctx.fillRect(1000,420,100,100);
//     this.ctx.fillRect(1000,400,100,25);

var context, controller, rectangle, loop, obstracles;

var canvas=document.getElementById("canvas");
context=canvas.getContext('2d');

rectangle = {
    height:75,
    jumping:true,
    width:42,
    x:10,
    dx:0,
    y:0,
    dy:0,
};

controller = {
left:false,
right:false,
up:false,
keyListener: function(event) {
    var key_state= (event.type == "keydown")?true:false;
    switch(event.keycode)
    {
        case 37: //left arrow key
        this.left=key_state;
        break;

        case 38: //up arrow key 
        this.up=key_state;
        break;

        case 39: //right arrow key
        this.right=key_state;
        break;
    }
}
};

loop=function(){

  if(controller.up && rectangle.jumping == false)
    {
        rectangle.dy-=20;
        rectangle.jumping=true;
    }

    if(controller.right){
        rectangle.dx += 0.5;
    }

    if(controller.left){
        rectangle.dx -=0.5;
    }

    rectangle.dy += 1.5;// gravity
    rectangle.x += rectangle.dx;
    rectangle.y += rectangle.dy;
    rectangle.dx *= 0.9;// friction
    rectangle.dy *= 0.9;// friction

 
    if(rectangle.y > 520 - 75 - 16){
      rectangle.jumping=false;
      rectangle.y=520 -75 - 16;
      rectangle.dy=0;
    }


    // if(rectangle.x > 1300){//if mario goes through right wall
    //     rectangle.x= -42;
    // }

    // elseif(rectangle.x < -42) //if mario goes through left wall
    // {
    //     rectangle.x=1300;
    // }


    //background of canvas
    context.fillStyle="black";
    context.fillRect(0,0,1300,520);
    context.beginPath();
   
    //mario
    context.fillStyle="green";
    context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    context.fill();
   context.fillStyle="red";
    //obstracles and block
    context.fillRect(375,275,400,50);
    //top of tunnel i.e not being obstracles
    context.fillRect(1000,405,100,100);
    
   context.fillRect(1000,385,100,25);

    //line buttom of the mario
    context.strokeStyle='red';
    context.lineWidth=4;
    context.beginPath();
    context.moveTo(0, 505);
    context.lineTo(1300, 505);
    context.stroke();
    

    window.requestAnimationFrame(loop);
};

window.addEventListener("keydown",controller.keyListener);
window.addEventListener("keyup",controller.keyListener);
window.requestAnimationFrame(loop);

