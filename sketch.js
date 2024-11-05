function setup() { //設定初始内容，只會執行一次
  createCanvas(windowWidth, windowHeight);//產生一個畫布
  //background(0)//黑色背景
  background("#8ecae6") //設定背景顏色（天空色）
}

function draw() { //畫圖，每秒會畫60次
  //background(220); //背景顔色，灰白色（0黑色~255白）
  background("#caf0f8")//設定背景顏色（天空色）
  rectMode(CENTER) //把方形的座標點放在方形的中間
  noFill()//以下所畫的物件不要充滿顔色
  stroke("#48cae4") //綫條的顔色
  strokeWeight(3) //綫條的粗細
  //宣告變數
  var rect_width = 50 +mouseX/10 //方形的寬度
  var bc_width = 50 +mouseY/10 //大圓的寬度
  var sc_width = 25 +mouseX/100//小圓的寬度
  //FOR回圈
    // i=0：i為變數，要i從0開始（設定i的初始值）
    //i<20：條件判斷，當條件成立時，就繼續進到回圈内的程式碼執行
    //i=i+1：i值每次改變的差距值，當囘圈内碼執行一次完畢後，i值會自動+1
    for(let j=0;j<40;j=j+1){ //產生第幾排
      for(let i=0;i<40;i=i+1){ //產生一整排的物件（兩個圓加上一個方形），每排有40個物件
        if(i<5){ //第0~4排共5排設定的顔色
          stroke("#03045e")
        }else if(i<10){ //第5~9排共5排設定的顔色
          stroke("#003566")
        }else{ //第十排后
          stroke("0077b6")
        }
      ellipse(25+50*i,25+50*j,bc_width) //在座標（x：25，y：25）畫一個直徑爲50的圓
      rect(25+50*i,25+50*j,rect_width) //畫方形，在座標（x；25，y:25）畫一個直徑爲50的方形
      ellipse(50+50*i,50+50*j,sc_width) //畫小圓，直徑爲25
  }
}
}