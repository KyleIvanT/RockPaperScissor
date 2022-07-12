function computerPlay()
{
    var result;
    var CompPick = Math.floor(Math.random() * 2) + 1; //picks a number between 1 to 3
    result = CompPick; //Compick becomes result
    if(result == 1) //goes throguh nested statements and results becomes a string depending on which number Compick has chosen
    {
        result = "rock";
    }  else if (result == 2)
    {
        result = "paper";
    } else
        {
            result = "scissor";
        }
     return result;
}

function User()
{
    var userInput = prompt("pick from rock,paper,or scissor");
    return userInput.toLocaleLowerCase();
}

function playRound(playerSelection, computerSelection) 
{
    var compscore = 0;
    var playerscore = 0;
    //if statement checks for each player choice and decides who is the winner depending on the actions
    if(playerSelection == computerSelection )
    {
        console.log("TIE GAME")
    } else if (computerSelection == "rock" && playerSelection == "scissor" ||
                computerSelection =="scissor" && playerSelection == "paper"||
                computerSelection =="paper" && playerSelection == "rock"
              ) {
                compscore = ++compscore;
                if(compscore == 1)
                {
                    console.log("your losing mate");
                } else if( compscore == 2)
                    {
                        console.log("test 2");
                    } else if(compscore == 3)
                    {
                        console.log("shiii");
                    } else
                    {
                        console.log("CPU wins")
                    } 

                    } else {
                        playerscore == ++playerscore;
                        if(playerscore == 1)
                        {
                            console.log("pog human");
                        } else if(playerscore == 2)
                        {
                            console.log("pog human again");
                        } else {
                            console.log("human win");
                        }
                    }
              
      
}

function game(user,comp)
{
  var endgame;

  for(endgame = 0; endgame <= 5; endgame++)
  {
    
  }
}

var PSelect = User();
var CSelect = computerPlay();
console.log(game(PSelect,CSelect));


const btn = document.querySelector('#selection');
btn.addEventListener('click',playRound)
{
    alert("TESTING");
}