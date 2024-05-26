function setup() {
  createCanvas(windowWidth, windowHeight);
  //產生一文字框
  inputElement = createInput("") //新增一文字框
  inputElement.position(50,50) //把文字框放在(50,50)
  inputElement.style("font-size","50px") //文字大小
  inputElement.style("color","#ffff00") //文字顏色
  inputElement.style("background-color","#3CBC8D") //文字框背景顏色
  inputElement.style("width","500px")
  inputElement.style("border","8px solid #ffff00") //框線大小、實心、顏色
  //滑桿設定
  sliderElement = createSlider(10,50,20,0.1) //最小值10，最大值50，起始值20，每滑一步0.1
  sliderElement.position(600,50) //把滑桿放到座標(600,50)
  //按鈕
  btnElement = createButton("丫丫丫丫")
  btnElement.position(800,50)
  btnElement.style("font-size","50px")
  btnElement.style("border","10px solid #ffff00")
  btnElement.style("border-color","green")
  btnElement.mousePressed(goCrazy)
  //顏色選擇器
  colorPickerElement = createColorPicker("#ed225d") //設定顏色選擇器的預設顏色
  colorPickerElement.position(600,90)
}

var isCrazy = false
var randomValue=0
function goCrazy(){
  isCrazy = !isCrazy; // 切換瘋狂狀態
  if (!isCrazy) { // 如果不再處於瘋狂狀態，將 randomValue 重設為 0
    randomValue = 0;
    btnElement.html("停")
  } else { // 否則，設定 randomValue 為 10
    randomValue = 10;
    btnElement.html("丫丫丫丫")
  }
}

function draw() {
  background(220);
  txts = inputElement.value()
  fill(colorPickerElement.value())
  txt_width = sliderElement.value()
  //顯示的文字
  textSize(txt_width)
  //文字的寬度+10為間距
  textLength = textWidth(txts)+50
  for(y=210;y<height;y=y+txt_width+20){
    for(x=0;x<width;x=x+textLength){
      text(txts,x+random(-randomValue,randomValue),y+random(-randomValue,randomValue)) //把文字放在(x,y)
    }
  }
}
