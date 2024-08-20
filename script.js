let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");
let turn0 = false; 

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
            box.innerText = "0";
            msg.innerText = "Player X Turn";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            msg.innerText = "Player 0 Turn";
            turn0 = true;
        }

        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    turn0 = false; 
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        msg.innerText = "Player X Turn";
    }
}

const checkWinner = () => {
    let count = 0;
    for(let pattern of winPatterns){
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if(position1 != "" && position2 != "" && position3 != ""){
            if(position1==position2 && position2==position3){
                boxes[pattern[0]].style.color = "red";
                boxes[pattern[1]].style.color = "red";
                boxes[pattern[2]].style.color = "red";
                msg.innerText = `Winner is ${position1}`;
                disableBoxes();
            }
            else count++;
        }
    }

    if(count==9){
        msg.innerText = "It's a draw!";
        disableBoxes();
    }
};

resetBtn.addEventListener("click", () => {
    enableBoxes();
});
