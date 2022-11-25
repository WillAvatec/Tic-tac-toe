/* 

    Para que este proyecto funcione se deben seguir una serie de pasos

    En general:

    1) Se escoge si van a jugar dos personas o una persona contra la maquina  -- DONE

    2) El primer jugador recibe la "X" y el segundo la "O"  -- DONE

    3) Se determina que el juego acabo, si se forma un 3 en raya -- DONE

    4) Al acabar el juego, se debe mostrar quien gano la ronda

    5) Reiniciar el tablero de juego y sumar puntos al ganador

*/ 

const game = (()=>{

    // Datos del juego

    

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

    // Event Listener a todas las columnas

    const cols = document.querySelectorAll('.col');

    cols.forEach((col)=>{
        col.addEventListener("click",(e)=> {
            if(!data.gameStart) return console.log("Select your rival.");
            if(!col.textContent=="") return console.log("you already clicked in this cell");
            playMove(e);
            console.log(`this is turn ${data.turn}`);
        });
    })
    
    // Hacer una jugada


    const playMove = (e)=>{
        if (data.gameOver) console.log("the game is over");
        checkWin(data);
        renderOnGameBoard(e);
        changePlayer(data);
        
    }

    //Renderizar

    function renderOnGameBoard(e){
        let id = e.target.id;

        if(!data.gameOver){
            e.target.textContent = data.symbol;
            data.board.splice(id,1,data.symbol);
        }
        
    }

    // Cambiar jugador por turno

    function changePlayer(data){
        if (data.contrincant === "Human"){
            checkWin(data);
            data.symbol == "X" ? data.symbol = "O" : data.symbol = "X";
        }

        if (data.contrincant === "EasyAi"){
            checkWin(data);
            computerMove(data)
            }

        ++data.turn;
        }

        

    function computerMove(data){
        let mode = data.contrincant;

        if (mode == "EasyAi"){
            EasyAi(data);
        }

        if (mode == "HardAi"){
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


    // Comparar valores de cada condicion con las condiciones de WIN

    const checkWin = (data)=>{

        let result = false;

        if(data.turn > 8) {
            data.gameOver = true;
            console.log("Tie");
            result = true;
        } 

        if(!data.gameOver){
            winningCombos.forEach(condition=>{
                if(data.board[condition[0]] === data.board[condition[1]] && 
                    data.board[condition[1]] === data.board[condition[2]]){
                    console.log(`player ${data.symbol} has won.`);
                    result = true;
                }
            })
        }
        return result
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