var today = new Date ();
var hourNow = today.getHours ();
var greeting;

if (hourNow > 18) {
    greeting = 'It is evening in the kingdom'
} else if (hourNow > 12) {
    greeting = 'It is afternoon in the kingdom'
} else if (hourNow > 0) {
    greeting = 'It is morning in the kingdom'
} else {
    greeting = 'Welcome to the kingdom'
}

document.write(greeting)