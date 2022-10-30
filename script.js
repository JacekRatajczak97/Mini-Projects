
const colorList = [];

$("#main").click( () => {
  
  let generateColor = Math.trunc(Math.random()*1000000);
  let text = generateColor.toString();
  let textLength = text.length;
  let addOneNumber = Math.floor(Math.random()*10);
  let addTwoNumbers = Math.floor(Math.random()*100);

  if (textLength === 6) {
    colorList.unshift("#" + generateColor);
  } else if (textLength === 5){
    colorList.unshift("#" + generateColor + addOneNumber);
  } else {
    colorList.unshift("#" + generateColor + addTwoNumbers);
  } 

  for (let i = 0; i < 4; i++) {
    $("#changeColor" + (i+1)).css("background-color", colorList[i])
    $("#colorValue" + (i+1)).text(colorList[i]);
  }

  colorList.splice(4, 2);

});








  