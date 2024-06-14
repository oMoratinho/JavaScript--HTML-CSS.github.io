let computerNumber
let userNumbers = []
let attempts = 0
let guesses = []

function newGame(){
    window.location.reload()
}

function init () {
    computerNumber = Math.floor(Math.random()* 100 + 1)
    console.log(computerNumber)
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers
    if(userNumber <= 100){       
    
        if(attempts < 9){    
            if(userNumber < computerNumber) {
                document.getElementById('textOutput').innerHTML = 'Too low'
                document.getElementById('inputBox').value = ''
                attempts++
                document.getElementById('attempts').innerHTML = attempts
            }
            else if (userNumber > computerNumber) {
                document.getElementById('textOutput').innerHTML = 'Too high'
                document.getElementById('inputBox').value = ''
                attempts++
                document.getElementById('attempts').innerHTML = attempts        
            }
            else{
                document.getElementById('textOutput').innerHTML = 'Congratulations, you Won!'            
                attempts++
                document.getElementById('attempts').innerHTML = attempts
                document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
            }
        }
        else {
            document.getElementById('textOutput').innerHTML = 'You Lose. The Number was ' + computerNumber
            document.getElementById('inputBox').value = ''
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')        
        }
    }
    else{
        document.getElementById('textOutput').innerHTML = 'The number is more than 100'
    }

}