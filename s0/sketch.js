// 函数setup(); 用于初始化，比如创建画布
function setup() {
	// 创建画布，宽度640像素，高度480像素
	// 画布的坐标系统为，左上角（0，0），x方向水平向右，y方向垂直向下，单位像素
	createCanvas(640,480); 
}

// draw();函数用户绘制
function draw() {
	//用Reference->2D Primitive中的各种语句绘图
	ellipse(320,240,200,240);
	rect(290,300,60,20); 
	line(260,220,300,220); 
	line(340,220,380,220); 
	arc(280,230,20,12,-0.2*PI,1.2*PI);  // PI为圆周率
	arc(360,230,20,12,-0.2*PI,1.2*PI); 
	point(280,230); 
	point(360,230); 
	triangle(230,170,400,158,305,30); 

	// 练习：用上述语句自己创作
	// 练习：用Reference->Curves中的函数画图
	// 练习：用Reference->Vertex中的函数画图

}