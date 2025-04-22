 const buttons = document.querySelectorAll("button")
 const result1 = document.getElementById("result")
 const playerScoreE1 = document.getElementById("user-code")
 const computerScoree1 = document.getElementById("computer-score")

 let computerScore = 0;
 let playerScore = 0;

 buttons.forEach(button => {
     button.addEventListener("click",()=>{
        const result = playerRound(button.id,computerPlay())
        result1.textContent=result;
     }) 
 });

 function computerPlay(){
    const choice = ["rock" , "paper" , "scissor" ]
    const randomchoice = Math.floor(Math.random()*choice.length)
    return choice[randomchoice]
 }

 function playerRound(playerSelection,computerSelection){
if(playerSelection === computerSelection){
   return "Its Tie!"
}
    else if(
       ( playerSelection === "rock" && computerSelection === "scissor") ||
       ( playerSelection === "paper" && computerSelection === "rock") ||
       ( playerSelection === "scissor" && computerSelection === "paper")

    ){
         playerScore++
         playerScoreE1.textContent = playerScore
         return "You Win " + playerSelection + " beats "  +computerSelection
    }
    else{
        computerScore++
        computerScoree1.textContent = computerScore
        return " You Lose! " + playerSelection + " beats "  +computerSelection

    }
 }