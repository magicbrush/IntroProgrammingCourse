
function setup() {
	createCanvas(640,480);
}

function draw(){
	smooth();  // 平滑化
	strokeCap(ROUND); // 边线端点形状
	strokeJoin(ROUND); // 边线转折处形状
	strokeWeight(5); // 边线宽度
	colorMode(RGB);  // 颜色模式为RGB，三者取值范围均为 0~100
	fill(240,180,145); // 用颜色R240,G180,B145来填充绘制
	ellipse(320,240,200,240);
	strokeWeight(2.5); // 边线宽度为2.5
	colorMode(HSB);  // 用HSB颜色模式，三者取值范围为 0~360，0~100，0~100
	fill(10,80,100); 
	rect(290,300,60,20); 
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
	fill(120,70,80,0.5);  // 带透明度的颜色，透明度范围为0~1 
	triangle(230,170,400,158,305,30); 
	
	// 练习： 尝试Reference->setting
	// 练习： 尝试Reference->blendMode();
}