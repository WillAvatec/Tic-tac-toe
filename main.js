/* 

    Para que este proyecto funcione se deben seguir una serie de pasos

    En general:

    1) Se escoge si van a jugar dos personas o una persona contra la maquina

    2) El primer jugador recibe la "X" y el segundo la "O"

    3) Se determina que el juego acabo, si se forma un 3 en raya

    4) Al acabar el juego, se debe mostrar quien gano la ronda

    5) Reiniciar el tablero de juego y sumar puntos al ganador

*/ 

const game = (()=>{

    // Datos del juego

    const data = (() => {

        const gameStart = false;
        const gameOver = false;
        const contrincant = "Human";
        const turn = 0;
        const symbol = "X";
        const board = [0,1,2,3,4,5,6,7,8];

        return {
            gameStart,
            gameOver,
            contrincant,
            turn,
            symbol,
            board
        }
    })()

    // Decidir el oponente

    const buttons = document.querySelectorAll('button');

    buttons.forEach(button =>{
        button.addEventListener("click",(ev)=>{
            let id = ev.target.id;
            decideContricant(id);
            console.log(data.contrincant)
        })
    })

    function decideContricant(enemy){
        if (!data.gameStart){
            data.contrincant = enemy;
        }
        data.gameStart = true;
    }

    const cols = document.querySelectorAll('.col');

    cols.forEach((col)=>{
        col.addEventListener("click",(e)=> {
            if(!data.gameStart) return console.log("Select your rival.");
            if(!col.textContent=="") return console.log("you already clicked in this cell");
            renderSymbol(e);
            console.log(data.board);
            ++data.turn;
        });
    })
    
    function renderSymbol(e){
        if(!data.gameOver){
            e.target.textContent = data.symbol;
            let id = e.target.id;
            data.board.splice(id,1,data.symbol);
            data.symbol == "X" ? data.symbol = "0" : data.symbol = "X";
            checkWin(data);
        }
    }

    // Comparar valores de cada condicion con los arrays

    const checkWin = (data)=>{
        let result = false;
        winningCombos.forEach(condition=>{
            if(data.board[condition[0]] === data.board[condition[1]] && data.board[condition[1]] === data.board[condition[2]]){
                console.log("win");
                result = true;
                data.gameOver = true;
            }
        })

        return result;
    }


    const winningCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]


})()