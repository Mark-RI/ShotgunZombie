class FloatText{
  constructor(carrier, display){
    this.textCounter = 0;
    this.yDisplacement = 0;
    this.displayFloatText = false;
    this.display = display;
  }
  
  floatText(){
    if(this.textCounter < 100){
      this.textCounter += 1;
      push();
      textStyle(BOLD);
      textAlign(CENTER);
      textFont('Helvetica');
      textSize(20);
      fill(0,128,0);
      text(this.display, width / 2, height * 0.9 - this.yDisplacement);
      pop();
      this.yDisplacement += 1;
   
    }else{
      floatTextList.splice(0, 1);
    }  
  } 
}