function likeCats(){
    let userAnswer = prompt('Do you like cats? Yes or no?')
    if (userAnswer != 'yes' && userAnswer != 'Yes'){
        alert('What are you doing here?')
    }
}

likeCats();