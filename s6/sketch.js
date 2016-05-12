
function setup() {
	createCanvas(640,480);
}

function draw() {
	background(150);
	noCursor();

	push(); 
	translate(mouseX,mouseY); 
	rotate(millis()/3600); 
	drawFace("ellipse","BigEye"); // 调用函数
	translate(180,100);
	scale(0.66,0.66);
	rotate(millis()/5400);
	drawFace("rect","GreenEye");
	translate(0,250);
	scale(0.66,0.66);
	rotate(-millis()/1200);
	drawFace("rect","Sleepy");
	pop();

	fill(0);
	textSize(15);
	fps = frameRate(); 
	text(fps,10,20);
}

function drawFace(beardType,eyeType) // 函数及参数
{
	smooth();
	strokeCap(ROUND);
	strokeJoin(ROUND);
	strokeWeight(5); 
	colorMode(RGB);
	fill(240,180,145);
	ellipse(0,0,200,240);
	strokeWeight(2.5);
	colorMode(HSB); 
	fill(10,80,80); 
	currentTime = millis(); 
	mouthWidth = sin(currentTime/1000);
	mouthWidth = map(mouthWidth,-1,1,40,80); 
	mouthHeight = cos(currentTime/933);
	mouthHeight = map(mouthHeight,-1,1,4,60); 
	rectMode(CENTER);
	rect(0,0+40,mouthWidth,mouthHeight); 
	strokeWeight(11);
	EyebrowOffsetY = -40;
	line(0-80,0+EyebrowOffsetY,
		0-20,0+EyebrowOffsetY) 
	line(0+30,0+EyebrowOffsetY,
		0+80,0+EyebrowOffsetY);
	strokeWeight(3); 
	noFill();  
	EyeOffsetY = -20;
	eyeWidth = 25;
	eyeHeight = 16;
	if(eyeType=="BigEye") 
	{
		eyeWidth = 60;
		eyeHeight = 32;
	}
	else if(eyeType=="GreenEye") 
	{
		colorMode(RGB);
		fill(0,255,0);
		eyeWidth = 48;
		eyeHeight = 48;
	}
	else if(eyeType=="Sleepy")
	{
		strokeWeight(8);
	}
	arc(0-40,0+EyeOffsetY,eyeWidth,eyeHeight,-0.2*PI,1.2*PI);
	arc(0+40,0+EyeOffsetY,eyeWidth,eyeHeight,-0.2*PI,1.2*PI);
	strokeWeight(7);
	point(0-40,0+EyeOffsetY);
	point(0+40,0+EyeOffsetY); 
	strokeWeight(8);
	colorMode(HSB);
	fill(120,70,80,0.5);
	triangle(
		0-90,0-70,
		0+80,0-82,
		0-15,0-210);
	fill(0);
	textSize(60); 
	text(key,0-30,0-100); 

	if(beardType=="rect") 
	{
		rect(0,20,100,20);
	}
	else if(beardType =="ellipse")
	{
		ellipse(0,20,100,20);
	}
}

// 练习： 自己编写函数，用于绘制复合的内容，并通过设定函数参数来指定绘制的效果