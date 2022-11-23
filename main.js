const gameBoard = (()=>{

    const pattern = [
        ["X","",""],
        ["","X",""],
        ["","","X"]
];

    const gameBoard = document.querySelector('.gameboard');

    // Renderize the pattern 

    const renderBoard = function(){
        for (let i = 0; i < pattern.length; i++) {
            const row = pattern[i];
                console.log(row) 
            for(let j = 0; j < row.length; j++){
                const col_value = row[j];
                console.log({col_value});
            }
        }
    }
})()

let choice;

const pickTurn = (()=>{

    // Buttons Container reference

    const buttons = document.querySelectorAll('.buttons button');

    // When button is clicked the selection should be stored in a variable.
    // This value should be used for later when the game start.

    buttons.forEach(button=>{
        button.addEventListener("click",()=>{
                console.log({button});
                choice = button.textContent;
                console.log({choice});
        }
    ,false)
    })
})()

const turn = 0;

const PlayerFactory = (type)=>{

    // Player should check if it's his turn

    // Player should choose a cell and put an "X" or "O"

    // Player should check if he's win

    // If he has win then render 'span' than declares winner 

    return {type}
}

