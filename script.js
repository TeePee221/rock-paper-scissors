const choices = ["rock", "paper", "scissors"]
function computerChoice () {
    const choice = choices[Math.floor(Math.random() * choices.length)];
    console.log(choice)
}
computerChoice();