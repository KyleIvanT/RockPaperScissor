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
    var result;
   if(playerSelection == "rock" && computerSelection == "paper")
   {
    result = console.log("Computer wins");
   } else if(computerSelection == "rock" && playerSelection == "paper")
   {
        result = console.log("Player wins");
   }

   
   return result;
}

var PSelect = User();
var CSelect = computerPlay();
console.log(playRound(PSelect,CSelect));


