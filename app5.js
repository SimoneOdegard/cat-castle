function likeCats(){
    let userAnswer = prompt('Do you like cats? Yes or no?')
    if (userAnswer != 'yes' && userAnswer != 'Yes'){
        alert('What are you doing here?')
    }
}

likeCats();

function imagesOnScreen(){
    userAnswer = prompt('How many cats do you want?');

    for (let i = 0; i < userAnswer;i++){
        document.write('<img src="https://images.fineartamerica.com/images-medium-large-5/portrait-of-white-cat-with-crown-on-head-by-sigi-kolbe.jpg" height="200">')
    }
}

function guessingGame(){
    // Got random code from w3schools
    let numberOfGuess = 7
    let correctAnswer = (Math.floor(Math.random() * 100) +1)
    console.log(correctAnswer);
    let userAnswer = askUserQuestion();
    for (let i = 0; i < numberOfGuess; i++){
        if (userAnswer == correctAnswer){
            alert('You are Correct!');
            break;
        } else if (userAnswer < correctAnswer){
            alert('That is not enough servants. Try again.')
        } else if (userAnswer > correctAnswer){
            alert('That is too many servants. Try again.')
        }
        userAnswer = askUserQuestion();
    }
    if(userAnswer != correctAnswer){
        alert('Nice try! Thanks for playing')
    }
}

function askUserQuestion(){
    let userAnswer = -1
    while(userAnswer < 1 || userAnswer > 100){
        userAnswer = prompt('How many servants will you have? 1-100');
    }
    return userAnswer;
}