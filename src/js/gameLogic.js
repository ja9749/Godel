export function rngIntSeed(props) {
    const {min = null, max = null, seed = null} = props;
    const randomNumberGenerator = rngSeed(seed);
    const randomNumber = randomNumberGenerator();

    if (max) {
        let modulo = max;
        let offset = 0;

        if (min) {
            modulo -= min;
            offset = min;
        }

        return (randomNumber % modulo) + offset;
    }

    return randomNumber;
}

export function rngSeed(str) {
    for(var i = 0, h = 1779033703 ^ str.length; i < str.length; i++) {
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
        h = h << 13 | h >>> 19;
    } return function() {
        h = Math.imul(h ^ (h >>> 16), 2246822507);
        h = Math.imul(h ^ (h >>> 13), 3266489909);
        return (h ^= h >>> 16) >>> 0;
    }
}

export function checkWord(word, answer) {
    let results = ['blank', 'blank', 'blank', 'blank', 'blank'];
    let used = [false, false, false, false, false];

    for (let i = 0; i < 5; i++) {
        if (word.charAt(i) === answer.charAt(i)) {
            results[i] = 'correct';
            used[i] = true;
        }
    }

    for (let i = 0; i < 5; i++) {
        if (results[i] === 'correct') {
            continue;
        };

        let sliceIndex = 0;

        while (true) {
            const index = answer.slice(sliceIndex).indexOf(word.charAt(i));
            if (index < 0) {
                break;
            }
            else if (used[index + sliceIndex]) {
                sliceIndex += index + 1;
            }
            else {
                results[i] = 'near';
                used[index + sliceIndex] = true;
                break;
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        if (results[i] === 'blank') {
            results[i] = 'incorrect';
        }
    }

    return results;
}

export function handleKeyInput(key, answer, currentGuess, setCurrentGuess, previousGuesses, setPreviousGuesses, alphabet, setAlphabet, results, setResults, words) {
    if (previousGuesses[previousGuesses.length - 1] === answer) {
        alert('You have won!');
    }
    else if (previousGuesses.length >= 6) {
        alert('You have run out of guesses');
    }
    else if (key === 'Bk') {
        if (currentGuess.length > 0) {
            setCurrentGuess(currentGuess.slice(0, -1));
        }
    }
    else if (key === 'En') {
        if (currentGuess.length !== 5) {
            alert('Not enough letters');
        }
        else if (words.indexOf(currentGuess) < 0) {
            alert('Not a gaming reference');
        }
        else {
            let newAlphabet = {...alphabet};
            let newResults = [...results];
            const result = checkWord(currentGuess, answer);
            newResults[previousGuesses.length] = result;

            for (let i = 0; i < currentGuess.length; i++) {
                if (newAlphabet[currentGuess.charAt(i)] !== 'correct'
                        && !(result[i] === 'incorrect' && newAlphabet[currentGuess.charAt(i)] === 'near')) {
                    newAlphabet[currentGuess.charAt(i)] = result[i];
                }
            }

            if (currentGuess === answer) {
                alert('You have won!');
            }

            setResults(newResults);
            setAlphabet(newAlphabet);
            setPreviousGuesses([...previousGuesses, currentGuess]);
            setCurrentGuess('');
        }
    }
    else if (currentGuess.length < 5) {
        setCurrentGuess(currentGuess.concat(key));
    }
}
