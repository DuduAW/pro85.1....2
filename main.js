
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


background_Image = "parkingLot.jpg";
greencar_Image = "car2.png";

greencar_width = 75;
greencar_height =100;

greencar_x=5;
greencar_y=225;



function add() {
	background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_Image;

    greencar_imgTag = new Image();
    greencar_imgTag.onload = uploadgreenCar;
    greencar_imgTag.src = greencar_Image;
}

function uploadbackground() {
	ctx.drawImage(background_imgTag,0, 0, canvas.width, canvas.height);
}

function uploadgreenCar() {
	ctx.drawImage(greencar_imgTag,greencar_x,greencar_y, greencar_width, greencar_height);	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
			
}

function up()
        {
            if(greencarY >=0)
            {
                greencarY=greencarY - 10;
                console.log("quando a seta para cima e pressionada, x=" + greencarX + " | y ="+greencarY);
                uploadbackground();
                uploadgreenCar();
            }
        }
        
        
        function down()
        {
            if(greencar >=500)
            {
                greencarY = + 10;
                console.log("quando a seta para baixo e pressionada, x=" + greencarX + " | y ="+greencarY);
                uploadbackground();
                uploadgreenCar();
            }
        }
        
        
        function left()
        {
            if(greencarY >=0)
            {
                greencarY =greencarX - 10;
                console.log("quando a seta para esquerda e pressionada, x=" + greencarX + " | y ="+greencarY);
                uploadbackground();
                uploadgreenCar();
            }
        }
        
        function right()
        {
            if(greencar >=700)
            {
                greencarX = greencarX + 10;
                console.log("quando a seta para direita e pressionada, x=" + greencarX + " | y ="+greencarY);
                uploadbackground();
                uploadgreenCar();
			}
		}
			