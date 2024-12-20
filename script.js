let reset = document.querySelector("#reset");
let btn = document.querySelectorAll(".btn");
let win = document.querySelector("#msg");
let newGame = document.querySelector(".msg-button");
let msgcon = document.querySelector(".hide");
let val = true;
const winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetBtn = () => {
  val = true;
  enableBtn();
  msgcon.classList.add("hide");
};
reset.addEventListener("click", resetBtn);

btn.forEach((box) => {
  box.addEventListener("click", () => {
    if (val == true) {
      box.innerText = "X";
      val = false;
    } else {
      box.innerText = "O";
      val = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBtn = () => {
  for (box of btn) {
    box.disabled = true;
  }
};

const enableBtn = () => {
  for (box of btn) {
    box.disabled = false;
    box.innerText = "";
  }
};

showWinner = (winner) => {
  win.innerText = `Congratulations,Winner is ${winner}`;
  count=0;
  msgcon.classList.remove("hide");
};
let count = 0;
const checkWinner = () => {
  for (let pattern of winner) {
    let pos1 = btn[pattern[0]].innerText;
    let pos2 = btn[pattern[1]].innerText;
    let pos3 = btn[pattern[2]].innerText;
    count++;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
        disableBtn();
        btn.disabled = true;
      }
      else if (count==72){
        
      }
    }
  }
};
newGame.addEventListener("click", resetBtn);
