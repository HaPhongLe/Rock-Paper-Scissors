let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice()
{
  const choices = ['r', 'p', 's'];
  randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];

}

function converToWord(letter)
{
  if(letter == "r") return "Rock";
  if(letter == "p") return "Paper";
  return "Scissors";
}
function win(userChoice, computerChoice)
{
  const smallUserWord = "User".fontsize(3).sup();
  const smallCompWord = "Comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  userScore ++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_p.innerHTML = converToWord(userChoice) + smallUserWord + " beats " + converToWord(computerChoice) + smallCompWord + " You win!";
  userChoice_div.classList.add('green-glow');
  setTimeout(function(){userChoice_div.classList.remove('green-glow')}, 1000);

}
function lose(userChoice, computerChoice)
{
  const smallUserWord = "User".fontsize(3).sup();
  const smallCompWord = "Comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  computerScore ++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_p.innerHTML = `${converToWord(userChoice)}${smallUserWord} loses to ${converToWord(computerChoice)}${smallCompWord} You lost ..`;
  userChoice_div.classList.add('red-glow');
  setTimeout(function(){userChoice_div.classList.remove('red-glow')}, 1000);
}
function draw(userChoice, computerChoice)
{
  const smallUserWord = "User".fontsize(3).sup();
  const smallCompWord = "Comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_p.innerHTML = `${converToWord(userChoice)}${smallUserWord} equals ${converToWord(computerChoice)}${smallCompWord} It's a draw`;
}
function game(userChoice){
 computerChoice = getComputerChoice();
 switch(userChoice + computerChoice) {
   case "sp":
   case "pr":
   case "rs":
      win(userChoice, computerChoice);
     break;
  case "rp":
  case "ps":
  case "sr":
      lose();
     break;
  case "ss":
  case "pp":
  case "rr":
      draw();
      break;


 }
}

function main()
{
  rock_div.addEventListener('click', function(){
    game("r");
  })

  paper_div.addEventListener('click', function(){
    game("p");
  })

  scissors_div.addEventListener('click', function(){
    game("s");
  })
}

main();
