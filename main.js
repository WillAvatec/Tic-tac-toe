const gameBoard = (()=>{

    const pattern = [
        "","","",
        "","","",
        "","",""
    ];

    const cols = document.querySelectorAll('.col');

    // --- Renderize the pattern 

    /* Se debe hacer lo siguiente:
    
        1) Iterar por el patron
        2) Se guarda el valor del valor iterado en ese momento
        3) Escribe ese valor en la columna 

    */

    const renderBoardFromArray = (function(){

        for (let i = 0; i < pattern.length; i++) {
            const element = pattern[i];
            cols[i].textContent = element;
        }
    })()

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

