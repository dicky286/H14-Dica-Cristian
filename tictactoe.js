let order = true;

let ticTacToeFunction = function (box) {
  if (order === true) {
    document.getElementById(box).innerText = "X";
    order = false;
  } else if (order === false) {
    document.getElementById(box).innerText = "0";
    order = true;
  }
};
