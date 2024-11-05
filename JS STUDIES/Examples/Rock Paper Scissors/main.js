document.addEventListener("DOMContentLoaded", () => {
    const choices = ['rock', 'paper', 'scissors'];

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const playerChoice = button.id;
            const computerChoice = computerPlay();
            const res = playRound(playerChoice, computerChoice);
            displayRes(playerChoice, computerChoice, res);
        })
    })

    function computerPlay() {
        const randomIdx = Math.floor(Math.random() * choices.length);
        return choices[randomIdx];
    }

    function playRound(playerChoice, computerChoice) {
        if(playerChoice === computerChoice)
            return "it's tie!"
        else if(playerChoice === 'rock' && computerChoice === 'scissors' ||
                playerChoice === 'paper' && computerChoice === 'rock' ||
                playerChoice === 'scissors' && computerChoice === 'paper'
        ){
            return `You win! ${playerChoice} beats ${computerChoice}.`;
        }else{
            return `You lose! ${computerChoice} beats ${playerChoice}.`;
        }
    }

    function displayRes(playerChoice, computerChoice, res){
        const resDiv = document.getElementById('result');

        const computerIcon = `<i class="far fa-hand-${computerChoice}"></i>`;
        const playerIcon = `<i class="far fa-hand-${playerChoice}"></i>`;

        resDiv.innerHTML = `
            <div>
                <p> ${playerIcon} You chose ${playerChoice}</p>
                <p> ${computerIcon} Computer  chose ${computerChoice}</p>
            </div>
            <p>${res}</p>
        `;
        resDiv.classList.add('result-container');
    }
})