
function setup() {
	createCanvas(640,480);
}

// 常量： 在程序运行过程中永不变化的量
// 变量： 能够发生变化的量
function draw(){
	background(150); 

	smooth(); 
	strokeCap(ROUND);
	strokeJoin(ROUND);
	strokeWeight(5);
	colorMode(RGB); 
	fill(240,180,145);
	ellipse(320,240,200,240);
	strokeWeight(2.5);
	colorMode(HSB); 
	fill(10,80,80); 
	currentTime = millis(); // 获得时间，放到变量currentTime中
	mouthWidth = sin(currentTime/1000); // 用正弦函数算得变量mouthWidth
	mouthWidth = map(mouthWidth,-1,1,40,80); // 将值从-1~1变换到40~80的范围
	mouthHeight = cos(currentTime/933); // 用余弦函数计算变量mouthHeight
	mouthHeight = map(mouthHeight,-1,1,4,60); // 从-1~1变换到4~60范围
	// 用上述变量作为rect();函数的输入，绘制嘴巴
	rectMode(CENTER); // 按 中心+宽高 的方式指定矩形位置
	rect(320,300,mouthWidth,mouthHeight); // 中心在(320,300);,一定宽度和高度的矩形
	strokeWeight(11);
	line(260,220,300,220); 
	line(340,220,380,220); 
	strokeWeight(3); 
	noFill();  
	arc(280,230,20,12,-0.2*PI,1.2*PI); 
	arc(360,230,20,12,-0.2*PI,1.2*PI); 
	strokeWeight(7); 
	point(280,230); 
	point(360,230); 
	strokeWeight(8); 
	fill(120,70,80,0.5);   
	triangle(230,170,400,158,305,30); 

	fill(0); 
	fps = frameRate();  // 获得帧率，放到变量fps中
	text(fps,10,20); 

	// 练习： 尝试用变量控制形状、边线和颜色随时间变化
}