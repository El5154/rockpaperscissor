const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissor');
const humanScoreSpan = document.getElementById('human-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultSpan = document.getElementById('result-text');

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

function update(result) {
    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;
    resultSpan.textContent = result;
}

rockButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = playRound('rock', computerChoice);
    update(result);
});

paperButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const result = playRound('paper', computerChoice);
  update(result);
});

scissorButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  const result = playRound('scissors', computerChoice);
  update(result);
});