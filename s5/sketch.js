
function setup() {
	createCanvas(640,480);
}
drawBeard = false;

function draw() {
	background(150);
	noCursor();

	push(); // 再push() 和pop()之间运用变换，可将变换的效果限制在二者之间
	translate(mouseX,mouseY); // 平移到鼠标位置
	rotate(millis()/3600); // 旋转一定角度
	scale(
		0.7+0.33*sin(0.001*millis()),
		0.8+0.1234567*sin(0.0009234*millis()));// 水平和垂直方向缩放
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
	if(keyCode == 97) 
	{
		eyeWidth = 60;
		eyeHeight = 32;
	}
	else if(keyCode == 83) 
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
	else 
	{
		strokeWeight(8);
	}
	arc(0-40,0+EyeOffsetY,eyeWidth,eyeHeight,-0.2*PI,1.2*PI);
	arc(0+40,0+EyeOffsetY,eyeWidth,eyeHeight,-0.2*PI,1.2*PI);
	strokeWeight(7);
	point(0-40,0+EyeOffsetY);
	point(0+40,0+EyeOffsetY); 
	strokeWeight(8);
	fill(120,70,80,0.5);
	triangle(
		0-90,0-70,
		0+80,0-82,
		0-15,0-210);
	fill(0);
	textSize(60); 
	text(key,0-30,0-100); 

	if(drawBeard) 
	{
		rect(0,0+20,100,20);
	}
	pop();

	fill(0);
	textSize(15);
	fps = frameRate(); 
	text(fps,10,20);

}

// 练习：改变translate(),rotate(),scale()的调用顺序，看看结果有无变化，分析原因
// 练习：自己尝试用translate(),rotate(),scale()来绘制物体