// Valores para incializar condiciones

const data = (() => {

    const gameStart = false;
    const gameOver = false;
    const contrincant = "Human";
    const turn = 0;
    const symbol = "X";
    const board = [0,1,2,3,4,5,6,7,8];
    const turnPlayer = "Player_1";

    return {
        gameStart,
        gameOver,
        contrincant,
        turn,
        symbol,
        board,
        turnPlayer
    }
})()

// Decidir cual es el oponente y cuando el juego empieza

const gameInit = (()=>{

    const buttons = document.querySelectorAll('button');

    buttons.forEach(button =>{
        button.addEventListener("click",(ev)=>{
            let id = ev.target.id;
            decideContricant(id);
            console.log(` You are playing against ${data.contrincant}`)
        })
    })

    function decideContricant(enemy){
        if (!data.gameStart){
            data.contrincant = enemy;
        }
        data.gameStart = true;
    }
 
})()

// Decidir que hacer con cada caja del tic-tac-toe

const gameBoardController = (()=>{

    const cols = document.querySelectorAll('.col');

    // Escucha donde el usuario hace click y si cumple las condiciones,
    // invoca playMove function.

    cols.forEach((col)=>{
        col.addEventListener("click",(ev)=> {
            if(!data.gameStart) return console.log("Select your rival.");
            if(!col.textContent=="") return console.log("You already clicked in this cell");
            displayOnScreen.playMove(data,ev);
            console.log(`This turn is ${data.turn}`);
        });
    })

    /* 
        Display solo si:

            1)El juego no ha terminado
            2)Si el jugador ha ganado, terminar partida; sino
            3)Cambiar de jugador
            4)Si el otro jugador ha ganado terminar partida; sino
            5)Es empate
    */

    const displayOnScreen = (()=>{

        //Las decisiones importantes se encuentran en playMove 

        const playMove = (data,target) =>{
            if (data.gameOver) return console.log(`Is game over yet? : ${data.gameOver}`)
            ++data.turn;
            renderSymbol(target);
            checkWin(data);

            if (data.gameOver) return console.log(`Is game over yet? : ${data.gameOver}`)
            console.log("Change player");
            changePlayer(data,target);
            checkWin(data);
        }

        const renderSymbol = (event)=>{
            const targetID = event.target.id;
            event.target.textContent = data.symbol;
            data.board.splice(targetID,1,data.symbol);
            data.turnPlayer = "Player_1"
        }

        const changePlayer = (data,ev)=>{
            if(data.contrincant === "Human"){
                data.symbol === "X" ? data.symbol = "O" : data.symbol = "X";
                data.turnPlayer = "Player_2";
            }

            if(data.contrincant !== "Human"){
                checkAIMode(data);
            }
        }

        const checkAIMode = (data)=>{
            const mode = data.contrincant;
            if (mode === "EasyAi"){
                EasyAi(data);
                data.turnPlayer = "EasyAi";
            }
    
            if (mode === "HardAi"){
                return console.log("Ai choosed...");
            }
        }

        const EasyAi = (data)=>{

            const chooseRandom = () => {
                let value = Math.floor(Math.random() * 9);
                return value;
            }
    
            let AiChoice = chooseRandom();
            let board = data.board[AiChoice];
            let writeOnArray = true;
    
            while(writeOnArray){
    
                if(data.gameOver) writeOnArray =false;
    
                if(isNaN(board) && cols[AiChoice] != ""){
                    AiChoice = chooseRandom();
                    board = data.board[AiChoice];
                }
                else {
                    data.board.splice(AiChoice,1,"O");
                    cols[AiChoice].textContent = "O";
                    writeOnArray = false;               
                }
                
            }
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

        const checkWin = (data)=>{
            
            // Check if tie

            if(data.turn > 9) {
                data.gameOver = true;
                console.log("Tie");
                result = true;
            }

            // Check if someone won
            
            if(!data.gameOver){
                winningCombos.forEach(condition=>{
                    if(data.board[condition[0]] === data.board[condition[1]] && 
                        data.board[condition[1]] === data.board[condition[2]]){
                            data.gameOver = true;
                            console.log(`${data.turnPlayer} has won.`);
                    }
                })
            }
            // If game hasn't finished yet, return
            return
        }

        return {playMove}
    })()

})()