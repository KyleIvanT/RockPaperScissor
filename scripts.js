function computerPlay()
{
    var result;
    var CompPick = Math.floor(Math.random() * 3) + 1;
    result = CompPick;
    if(result == 1)
    {
        result = "rock";
    }  else if (result == 2)
    {
        result = "scissor";
    } else
        {
            result = "paper";
        }
    return result;
}