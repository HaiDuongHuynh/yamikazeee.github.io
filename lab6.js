function printNumbers(from, to) {
    let currentNumber = from;

    const intervalId = setInterval(function() {
        console.log(currentNumber);
        currentNumber++;

        if (currentNumber > to) {
            clearInterval(intervalId);
        }
    }, 1000);
}

printNumbers(1, 5);