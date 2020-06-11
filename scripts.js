function computerPlay() {
    let random = randomNum();
    function randomNum(){
        return Math.random()
 }
    if (random < 0.34) {
       return "scissors"
        }
    else if (random < 0.67) {
        return "rock"
    }
    else {
       return "paper" 
    }
}

function getInput(playerSelection) {
    let computerSelection = computerPlay()
    const rocks = document.querySelector('#compR')
    const papers = document.querySelector('#compP')
    const scissor = document.querySelector('#compS')
    const rock = document.querySelector('#rock')
    const paper = document.querySelector('#paper')
    const scissors = document.querySelector('#scissors')

    if (computerSelection == 'rock') {

        setTimeout(() => rocks.classList.toggle('selected'), 800)
        setTimeout(() => papers.classList.toggle('faded'), 800)
        setTimeout(() => scissor.classList.toggle('faded'), 800)

    }
    else if (computerSelection == 'paper') {

        setTimeout(() => papers.classList.toggle('selected'), 800)
        setTimeout(() => rocks.classList.toggle('faded'), 800)
        setTimeout(() => scissor.classList.toggle('faded'), 800)
    }
    else if (computerSelection == 'scissors') {

        setTimeout(() => scissor.classList.toggle('selected'), 800)
        setTimeout(() => papers.classList.toggle('faded'), 800)
        setTimeout(() => rocks.classList.toggle('faded'), 800)
    }
    function playRound(playerSelection, computerSelection) {
        let playerPick = playerSelection.toLowerCase()
        const tie = "It's a tie! "
        const win = "You win! "
        const lose = "You lose! "
        const paperWin = "Paper covers Rock!"
        const rockWin = "Rock crushes scissors!"
        const scissorsWin = "Scissors cuts paper!"
        if (playerPick == 'rock') {
            if (computerSelection == 'rock') {
                setTimeout(() => rock.classList.toggle('tie'), 1500)
                setTimeout(() => rocks.classList.toggle('tie'), 1500)
                return tie
                
            }
            else if (computerSelection == 'paper') {
                setTimeout(() => papers.classList.toggle('winner'), 1500)
                return lose
                
                
            }
            else {
                setTimeout(() => rock.classList.add('winner'), 1500)
                return win
                
            }
        }
        else if (playerPick == 'paper') {
            if (computerSelection == 'rock') {
                setTimeout(() => paper.classList.add('winner'), 1500)
                return win

            }
            else if (computerSelection == 'paper') {
                setTimeout(() => paper.classList.toggle('tie'), 1500)
                setTimeout(() => papers.classList.toggle('tie'), 1500)
                return tie
            }
            else {
                setTimeout(() => scissor.classList.toggle('winner'), 1500)
                return lose
            }
        }
        else {
            if (computerSelection == 'rock') {
                setTimeout(() => rocks.classList.toggle('winner'), 1500)
                return lose
            }
            else if (computerSelection == 'paper') {
                setTimeout(() => scissors.classList.add('winner'), 1500)
                return win
            }
            else  {
                setTimeout(() => scissors.classList.toggle('tie'), 1500)
                setTimeout(() => scissor.classList.toggle('tie'), 1500)
                return tie
            }
        }
    }
    console.log(playRound(playerSelection, computerSelection))
    if (playRound(playerSelection, computerSelection).slice(0,5) == "You w") {
        return "win"
    }
    else if (playRound(playerSelection, computerSelection).slice(0,5) == "You l") {
        return "loss"
    }
    else {
        return "tie"
    }

}

function game(playerSelection){
    const selection = document.querySelectorAll('.selected');
    if (selection.length > 0) {
    const selections = document.querySelectorAll('.selected');
    selections.forEach((selected) => {
        selected.classList.remove('selected')
          });

}

    if (playerSelection == 'rock') {
        const rock = document.querySelector('#rock')
        rock.classList.add('selected')
        const paper = document.querySelector('#paper')
        paper.classList.toggle('faded')
        const scissors = document.querySelector('#scissors')
        scissors.classList.toggle('faded')
    }
    else if (playerSelection == 'paper') {
        const paper = document.querySelector('#paper')
        paper.classList.add('selected') 
        const rock = document.querySelector('#rock')
        rock.classList.toggle('faded')
        const scissors = document.querySelector('#scissors')
        scissors.classList.toggle('faded')}
    else if (playerSelection == 'scissors') {
        const scissors = document.querySelector('#scissors')
        scissors.classList.add('selected')
        const paper = document.querySelector('#paper')
        paper.classList.toggle('faded')
        const rock = document.querySelector('#rock')
        rock.classList.toggle('faded')
    }
   let result = getInput(playerSelection)
   return result

    
}
function series() {
    let userWins = 0
    let compWins = 0
    let ties = 0
    let gameNumber = 0
    const buttons = document.querySelectorAll('.user');
    buttons.forEach((user) => {
        user.addEventListener('click', function (e) {
            buttons.forEach((user) => {
            user.disabled = true
            setTimeout(() => user.disabled = false, 2500)})
            if (gameNumber < 5) {
            let final = game(e.target.id);
            gameNumber = gameNumber + 1
            const gamer = document.querySelector('.gameNumber')
            gamer.textContent = "Game Number: " + gameNumber
            if (final == 'win') {
                userWins = userWins + 1
            }
            else if (final == 'loss') {
                compWins = compWins + 1
            }
            const reset = document.querySelectorAll('button')
            setTimeout(() => reset.forEach((button) => {
            button.classList.remove('faded')
            button.classList.remove('winner')
            button.classList.remove('selected')
            button.classList.remove('tie')
            }), 2500)
            const youScore = document.querySelector('#you')
            setTimeout(() => youScore.textContent = "You: " + userWins, 800)
            const compScore = document.querySelector('#computer')
            setTimeout(() => compScore.textContent = "Computer: " + compWins, 800)
            if (gameNumber == 5) {
                let end = ''
                if (compWins > userWins) {
                    end = end + 'You lose! \n Play again?'
                }
                else if (compWins < userWins) {
                    end = end + 'You won! \n Play again?'
                }
                else {
                    end = end + 'You tied! \n Play again?'
                }
                const alert = document.createElement('div')
                alert.classList.add('alert')
                alert.classList.add('absoCenter')
                alert.textContent = (end)
                const again = document.createElement('button')
                again.classList.add('again')
                again.classList.add('other')
                const big = document.querySelector('.bigContain')
                const container = document.querySelector('.container')
                setTimeout(() => big.insertBefore(alert, container), 2700)
                alert.appendChild(again)
                again.textContent = 'Of Course!'
                const uRock = document.querySelector('#rock')
                setTimeout(() => uRock.classList.add('out'), 2500)
                const uPaper = document.querySelector('#paper')
                setTimeout(() => uPaper.classList.add('out'), 2500)
                const uScissors = document.querySelector('#scissors')
                setTimeout(() => uScissors.classList.add('out'), 2500)
                const cRock = document.querySelector('#compR')
                setTimeout(() => cRock.classList.add('out'), 2500)
                const cPaper = document.querySelector('#compP')
                setTimeout(() => cPaper.classList.add('out'), 2500)
                const cScissors = document.querySelector('#compS')
                setTimeout(() => cScissors.classList.add('out'), 2500)
                again.addEventListener('click', function (e) {
                    again.classList.toggle('selected')
                    userWins = 0
                    compWins = 0
                    gameNumber = 0
                    big.removeChild(alert)
                    uRock.classList.remove('out')
                    uPaper.classList.remove('out')
                    uScissors.classList.remove('out')
                    cRock.classList.remove('out')
                    cPaper.classList.remove('out')
                    cScissors.classList.remove('out')
                    const glow = document.querySelectorAll(".selected")
                    glow.forEach((selected) => {
                        selected.classList.remove("selected")
                    
                    })
                    gamer.textContent = "Game Number: " + gameNumber
                    youScore.textContent = "You: " + userWins
                    compScore.textContent = "Computer: " + compWins


                

                })
                   
            } 
        }


          });
        });

   
    }
    
   
series()

