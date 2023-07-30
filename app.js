let circle = document.getElementById("circle");
let upBtn = document.getElementById("upBtn");
let downBtn = document.getElementById("downBtn");

let rotateValue = circle.style.transform;
// console.log(rotateValue);
let rotateSum;

upBtn.onclick = function() {
  // 時計回りに９０度回転させる
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};

downBtn.onclick = function() {
  // 反時計回りに９０度回転させる
  rotateSum = rotateValue + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};