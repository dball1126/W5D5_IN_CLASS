const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askIfGreaterThan(ele1, ele2, callback) {
    reader.question(`Is ${ele1} greater than ${ele2}?`, function(answer){
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
        // console.log(outerBubbleSortLoop);
    } else{
        askIfGreaterThan(arr[i], arr[i+1],(isGreaterThan)=>{
            if (isGreaterThan === true){ 
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                madeAnySwaps = true;
            }
        });
        innerBubbleSortLoop(arr, ++i, madeAnySwaps, outerBubbleSortLoop);
    }
     
}

function absurdBubbleSort(arr, sortCompletionCallback) {
    let madeAnySwaps=true;
    outerBubbleSortLoop(madeAnySwaps);
    
    function outerBubbleSortLoop(madeAnySwaps) {
        if (madeAnySwaps) {
            madeAnySwaps = false;
            innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
        } else {
            sortCompletionCallback(arr);
        }
    }
}

absurdBubbleSort([3, 2, 1], function (arr2) {
    console.log("Sorted array: " + JSON.stringify(arr2));
    reader.close();
});

// innerBubbleSortLoop([3,2,1], 0, true, "asdf" );

// askIfGreaterThan(3, 1, function(){console.log(3);});