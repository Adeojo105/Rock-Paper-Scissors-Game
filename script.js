// define the parameters
const choices =["rock", "paper", "scissors"]

// Add a click addEventListener to each choice
document.querySelectorAll(".choice").forEach((button) => {
    button.addEventListener("click", function() {
        // Get the user's choice
        const playerChoice = button.id;
       // Generate a random computer choice
        const computerChoice = choices[Math.floor(Math.random() * 3)];
              // Determine the result of the game
        const result = getResult(playerChoice, computerChoice);
          // Display the result on the page
        displayResult(result, playerChoice, computerChoice);
    });
});
// Function to determine the game result
function getResult(player, computer) {
    if(player === computer) return "it's a tie!"
    if(
        (player === "rock" && computer === "scissors")||
        (player === "paper" && computer === "rock" )||
        (player === "scissors" && computer === "paper")
        
    ) {
        return "You Win";
    } else {
        return "Computer Win!";
    }
}

// Function to display the result on the page
function displayResult(result, player, computer) {
    const resultPlay = document.getElementById("result");
    resultPlay.innerHTML = `you chose ${player}, computer chose ${computer}. ${result}`;
}