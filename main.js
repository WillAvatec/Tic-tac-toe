const gameBoard = (()=>{

    const cols = document.querySelectorAll('.col');

    let pattern = [];
    let choice;

/*     const renderPattern = (function(){

        for (let i = 0; i < pattern.length; i++) {
            const element = pattern[i];
            cols[i].textContent = element;
        }
    })() */


/* 
    const pickSymbol = (()=>{

        // Buttons Container reference

        const buttons = document.querySelectorAll('button');

        // When button is clicked the selection should be stored in a variable.
        // This value should be used for later when the game start.

        buttons.forEach(button=>{
            button.addEventListener("click",(e)=>{
                    choice = button.textContent;
                    gameFlow()
            }
        ,false)
        })
    })()
 */


    const gameFlow  = (()=>{

        const PlayerFactory = (type,symbol,turn)=>{
            return {type,symbol,turn}
        }
    
        const playerX = PlayerFactory("player","X",true)
        const playerO = PlayerFactory("player","O",false)
        let myTurn = playerX;

        // Check which player turn is 

        function checkTurn(myTurn,target){
            if(myTurn == playerX){
                myTurn = playerO;
                renderSymbol(target,playerX);

            }
            else if(myTurn == playerO){
                myTurn = playerX;
                renderSymbol(target,playerO);
            }
        }

        // When clicking on col add that value to the pattern and render again.

        function renderSymbol(target,player){
            if (player.turn){
                target.textContent = player.symbol;
            }
        }

        // DOM Listener
        
        cols.forEach((col)=>{
            col.addEventListener("click",()=> {
                if(!col.textContent=="") return console.log("you already clicked in this cell");
                checkTurn(myTurn, col);
            });
        })
        


        // Game should check if someone's win


        // If he has win then render 'span' than declares winner 



    })()

})()


