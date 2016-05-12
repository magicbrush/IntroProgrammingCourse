
function setup() {
	createCanvas(640,480);
}

drawBeard = false;

function draw() {
	background(150);

	noCursor();

	// mouseX, mouseY 两个变量包含了光标位置
	smooth();
	strokeCap(ROUND);
	strokeJoin(ROUND);
	strokeWeight(5); 
	colorMode(RGB);
	fill(240,180,145);
	ellipse(mouseX,mouseY,200,240);
	strokeWeight(2.5);
	colorMode(HSB); 
	fill(10,80,80); 
	currentTime = millis(); 
	mouthWidth = sin(currentTime/1000);
	mouthWidth = map(mouthWidth,-1,1,40,80); 
	mouthHeight = cos(currentTime/933);
	mouthHeight = map(mouthHeight,-1,1,4,60); 
	
	
	rectMode(CENTER);
	rect(mouseX,mouseY+40,mouthWidth,mouthHeight); 


	strokeWeight(11);
	EyebrowOffsetY = -40;
	line(mouseX-80,mouseY+EyebrowOffsetY,
		mouseX-20,mouseY+EyebrowOffsetY) 
	line(mouseX+30,mouseY+EyebrowOffsetY,
		mouseX+80,mouseY+EyebrowOffsetY);
	strokeWeight(3); 
	noFill();  
	EyeOffsetY = -20;


	eyeWidth = 25;
	eyeHeight = 16;
	// if(){} else if(){} else {}
	if(keyCode == 97) // 如果为‘a' (97)
	{
		eyeWidth = 60;
		eyeHeight = 32;
	}
	else if(keyCode == 83) // 或为 ’S'(83)
	{
		colorMode(RGB);
		fill(0,255,0);
		eyeWidth = 48;
		eyeHeight = 48;
	}
	else if(keyCode == 100)
	{
		drawBeard = true;
	}
	else if(keyCode == 102)
	{
		drawBeard = false;
	}
	else // 否则
	{
		strokeWeight(8);
	}

	arc(mouseX-40,mouseY+EyeOffsetY,eyeWidth,eyeHeight,-0.2*PI,1.2*PI);
	arc(mouseX+40,mouseY+EyeOffsetY,eyeWidth,eyeHeight,-0.2*PI,1.2*PI);
	strokeWeight(7);
	point(mouseX-40,mouseY+EyeOffsetY);
	point(mouseX+40,mouseY+EyeOffsetY); 
	strokeWeight(8);
	fill(120,70,80,0.5);
	triangle(
		mouseX-90,mouseY-70,
		mouseX+80,mouseY-82,
		mouseX-15,mouseY-210);
	fill(0);
	textSize(60); 
	text(key,mouseX-30,mouseY-100); 

	if(drawBeard) 
	{
		rect(mouseX,mouseY+20,100,20);
	}
	

	fill(0);
	textSize(10);
	fps = frameRate(); 
	text(fps,10,20);
	
	// 练习：运用条件判断，实现更多样化的分支效果

	
}