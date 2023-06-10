let number = prompt('Please enter a number');

for (let i = 0 ; i <= number ; i++){
    if (Number.isInteger(Math.sqrt(i))){
        console.log(i);
    }
}
