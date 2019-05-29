var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

canvas.width = 100;
canvas.height = 100;
ctx.fillStyle = "#FFFF00";
ctx.fillRect(0, 0, 100, 100);

// document.addEventListener("keydown", (event) => {

//   console.log(event.keyCode, ' - ', event.key);
// });


var map = {}; // You could also use an array
onkeydown = onkeyup = function (e) {
  e = e || event; // to deal with IE
  map[e.keyCode] = e.type == 'keydown';
  console.table(map);



}
