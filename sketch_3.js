function setup() { //設定初始内容，只會執行一次
    createCanvas(windowWidth, windowHeight);//產生一個畫布
    //background(0)//黑色背景
    background("#8ecae6") //設定背景顏色（天空色）
  }
  
  function draw() { //畫圖，每秒會畫60次
    //background(220); //背景顔色，灰白色（0黑色~255白）
    rectMode(CENTER) //把方形的座標點放在方形的中間
    noFill() //以下所畫的物件不要充滿顔色
    stroke("#48cae4") //綫條的顔色
    strokeWeight(3) //綫條的粗細
    for(let j=0;j<40;j=j+1){ //產生第幾排
        for(let i=0;i<40;i=i+1){
        ellipse(25+50*j,25+50*0,50) //在座標（x：25，y：25）畫一個直徑爲50的圓
        rect(25+50*j,25+50*0,50) //畫方形，在座標（x；25，y:25）畫一個直徑爲50的方形
        ellipse(50+50*j,50+50*0,25) //畫小圓，直徑爲25
    }
  }
}