let title = prompt('King or Queen?');
console.log(title);

if (title == 'King'){
    document.write('Welcome King, ');
} else if (title == 'Queen'){
    document.write('Welcome Queen, ');
} else if (title == 'king'){
    document.write('Welcome King, ');
} else if (title == 'queen'){
    document.write('Welcome Queen, ');
} else {
    document.write('Welcome peasant, ');
}