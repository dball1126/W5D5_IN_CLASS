const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft === 0){ 
        completionCallback(sum);
        reader.close();
        return;
    }
    let newSum = sum;
    reader.question("Enter a number: ", (res) => {
        number = parseInt(res, 10);
        newSum += number;
        console.log(newSum);
        addNumbers(newSum, numsLeft -= 1, completionCallback);
    });
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));