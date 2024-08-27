let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let player0 = true;
let count = 0;


const winingElements = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];
const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};
const checkwinner = () => {
    for (let pattern of winingElements) {
        let b1 = boxes[pattern[0]].innerText;
        let b2 = boxes[pattern[1]].innerText;
        let b3 = boxes[pattern[2]].innerText;
        if (b1 != "" && b2 != "" && b3 != "") {
            if (b1 === b2 && b2 === b3) {
                showwinner(b1);
                return true;




            }


        }

    }


};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (player0) {
            box.innerText = "0";
            player0 = false;
        } else {

            box.innerText = "X";
            player0 = true;
        }
        box.disabled = true;
        count++;
        let winner = checkwinner();
        if (count === 9 && !winner) {
            gameDraw();
        }
    });



});
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);