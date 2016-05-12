
function setup() {
	createCanvas(640,480)

}

function draw() {
	background(150) 

	smooth() 
	strokeCap(ROUND)
	strokeJoin(ROUND)
	strokeWeight(5)
	colorMode(RGB) 
	fill(240,180,145)
	ellipse(mouseX,mouseY,200,240)
	strokeWeight(2.5)
	colorMode(HSB) 
	fill(10,80,80) 
	currentTime = millis() 
	mouthWidth = sin(currentTime/1000) 
	mouthWidth = map(mouthWidth,-1,1,40,80) 
	mouthHeight = cos(currentTime/933) 
	mouthHeight = map(mouthHeight,-1,1,4,60) 
	
	rectMode(CENTER) 
	rect(mouseX,mouseY+40,mouthWidth,mouthHeight) 
	strokeWeight(11)
	EyebrowOffsetY = -40;
	line(mouseX-80,mouseY+EyebrowOffsetY,
		mouseX-20,mouseY+EyebrowOffsetY) 
	line(mouseX+30,mouseY+EyebrowOffsetY,
		mouseX+80,mouseY+EyebrowOffsetY)
	strokeWeight(3) 
	noFill()  
	EyeOffsetY = -20;
	arc(mouseX-40,mouseY+EyeOffsetY,20,12,-0.2*PI,1.2*PI) 
	arc(mouseX+40,mouseY+EyeOffsetY,20,12,-0.2*PI,1.2*PI) 
	strokeWeight(7) 
	point(mouseX-40,mouseY+EyeOffsetY) 
	point(mouseX+40,mouseY+EyeOffsetY) 
	strokeWeight(8) 
	fill(120,70,80,0.5)   
	triangle(
		mouseX-90,mouseY-70,
		mouseX+80,mouseY-82,
		mouseX-15,mouseY-210)
	fill(0)
	textSize(60) // 指定文本显示的尺寸
	text(key,mouseX-30,mouseY-100); // 显示按过的按键

	fill(0) 
	textSize(10)
	fps = frameRate()  
	text(fps,10,20) 

	// 调试的基本方法
	// 1. 步步为营：写少量代码、运行看看效果
	// 2. 变量显示：将变量用text()显示在屏幕上，看看是否符合预期
	textSize(10);
	mousePosString = 
		"MousePos: " + str(mouseX)+" " +str(mouseY); // 将鼠标位置转换为字符串
	text(mousePosString,10,30);

	// 练习： 自行运用键盘和鼠标的状态，实现更复杂的互动
	// 练习： 参考Reference->Mouse, Reference->Keyboard中的内容，实现更多样化的互动机制
}