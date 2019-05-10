const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askIfGreaterThan(ele1, ele2, callback) {
    reader.question(`Is ${ele1} greater than ${ele2}? `, function(answer){
        if (answer === "yes") {
            callback(true);
        } else if (answer === "no") {
            callback(false);
        }
    });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i === (arr.length - 1)) {
        outerBubbleSortLoop(madeAnySwaps);
       
    } else {
        askIfGreaterThan(arr[i], arr[i+1],(isGreaterThan) => {
            if (isGreaterThan === true){ 
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                madeAnySwaps = true;
            }
            innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
        }); // FIX: we did not have the innerBuubleSortLoop inside of the askIfGreaterThan block
        //Why does it wait for input when it is in the askIfGreaterThanBlock
    //And does not wait for input when it is outside of the askIfGreaterThan block on line 32
        
    }
     
}

function absurdBubbleSort(arr, sortCompletionCallback) {
    let madeAnySwaps=true;
    
    function outerBubbleSortLoop(madeAnySwaps) {
        if (madeAnySwaps) {
            madeAnySwaps = false;
            innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
        } else {
            sortCompletionCallback(arr);
        }
    }

    outerBubbleSortLoop(madeAnySwaps);
}


absurdBubbleSort([3, 2, 1], function (arr2) {
    console.log("Sorted array: " + JSON.stringify(arr2));
    reader.close();
});

// innerBubbleSortLoop([3,2,1], 0, true, "asdf" );

// askIfGreaterThan(3, 1, function(){console.log(3);});