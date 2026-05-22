let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    return prompt('Enter rock, paper, or scissors: ').toLowerCase();
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'You tie! Both chose ' + userChoice; 
    }

    if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') || 
        (userChoice === 'scissors' && computerChoice === 'paper')) {
            humanScore++;
            return 'You win! ' + userChoice + ' beats ' + computerChoice;
        }
    computerScore++;
    return 'You lose! ' + computerChoice + ' beats ' + userChoice;
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const human = getHumanChoice();
        const computer = getComputerChoice();
        console.log(playRound(human, computer));
    }

    console.log('Final Score - You: ' + humanScore + ' Computer: ' + computerScore);
}

playGame();
