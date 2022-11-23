const gameBoard = (()=>{

    const pattern = [
        ["X","O","O"],
        ["O","X","O"],
        ["O","O","X"]
    ];

    const rows = document.querySelectorAll('.row');
    const ROW_1 = document.querySelectorAll('.row > .col');
    const ROW_2 = document.querySelectorAll('.second-row > .col');
    const ROW_3 = document.querySelectorAll('.third-row > .col');
    // --- Renderize the pattern 

    /* Se debe hacer lo siguiente:
    
        1) Se ingresa en un ROW
        2) Se guarda el valor del patron
        3) Escribe ese valor en la columna 

    */

    const renderBoard = function(){

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

