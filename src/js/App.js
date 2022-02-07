import {
    useCallback,
    useEffect,
    useState,
} from 'react';
import {Gamebox} from './Gamebox';
import {Keyboard} from './Keyboard';
import {checkWord} from './gameLogic';

export function App() {
    const initialAlphabet = {
        'A': 'blank',
        'B': 'blank',
        'C': 'blank',
        'D': 'blank',
        'E': 'blank',
        'F': 'blank',
        'G': 'blank',
        'H': 'blank',
        'I': 'blank',
        'J': 'blank',
        'K': 'blank',
        'L': 'blank',
        'M': 'blank',
        'N': 'blank',
        'O': 'blank',
        'P': 'blank',
        'Q': 'blank',
        'R': 'blank',
        'S': 'blank',
        'T': 'blank',
        'U': 'blank',
        'V': 'blank',
        'W': 'blank',
        'X': 'blank',
        'Y': 'blank',
        'Z': 'blank',
    };

    const initialResults = [
        ['blank', 'blank', 'blank', 'blank', 'blank'],
        ['blank', 'blank', 'blank', 'blank', 'blank'],
        ['blank', 'blank', 'blank', 'blank', 'blank'],
        ['blank', 'blank', 'blank', 'blank', 'blank'],
        ['blank', 'blank', 'blank', 'blank', 'blank'],
        ['blank', 'blank', 'blank', 'blank', 'blank'],
    ];

    const [previousGuesses, setPreviousGuesses] = useState([]);
    const [currentGuess, setCurrentGuess] = useState('');
    const [alphabet, setAlphabet] = useState(initialAlphabet);
    const [results, setResults] = useState(initialResults);
    const answer = 'LUIGI';

    const handleUserKeyPress = useCallback(event => {
        const {key} = event;

        if (key === 'Backspace') {
            if (currentGuess.length > 0) {
                setCurrentGuess(currentGuess.slice(0, -1));
            }
        }
        else if (key === 'Enter') {
            if (previousGuesses.length < 6 && currentGuess.length === 5) {
                let newAlphabet = {...alphabet};
                const result = checkWord(currentGuess, answer)

                for (let i = 0; i < currentGuess.length; i++) {
                    if (newAlphabet[currentGuess.charAt(i)] !== 'correct'
                            && !(result[i] === 'incorrect' && newAlphabet[currentGuess.charAt(i)] === 'near')) {
                        newAlphabet[currentGuess.charAt(i)] = result[i];
                    }
                }

                setAlphabet(newAlphabet);
                setPreviousGuesses([...previousGuesses, currentGuess]);
                setCurrentGuess('');
            }
        }
        else if (currentGuess.length < 5) {
            if ((/[a-zA-Z]/).test(key) && key.length === 1) {
                setCurrentGuess(currentGuess.concat(key.toUpperCase()));
            }
        }
    }, [alphabet, currentGuess, previousGuesses]);
    
    useEffect(() => {
        window.addEventListener("keydown", handleUserKeyPress);
        return () => {
            window.removeEventListener("keydown", handleUserKeyPress);
        };
    }, [handleUserKeyPress]);

    const onClickHandler = useCallback(
        (value) => {
            if (value === 'Bk') {
                if (currentGuess.length > 0) {
                    setCurrentGuess(currentGuess.slice(0, -1));
                }
            }
            else if (value === 'En' && previousGuesses.length < 6) {
                if (currentGuess.length === 5) {
                    let newAlphabet = {...alphabet};
                    const result = checkWord(currentGuess, answer)
    
                    for (let i = 0; i < currentGuess.length; i++) {
                        if (newAlphabet[currentGuess.charAt(i)] !== 'correct'
                                && !(result[i] === 'incorrect' && newAlphabet[currentGuess.charAt(i)] === 'near')) {
                            newAlphabet[currentGuess.charAt(i)] = result[i];
                        }
                    }
    
                    setAlphabet(newAlphabet);
                    setPreviousGuesses([...previousGuesses, currentGuess]);
                    setCurrentGuess('');
                }
            }
            else if (currentGuess.length < 5) {
                setCurrentGuess(currentGuess.concat(value));
            }
        }, [currentGuess, previousGuesses]
    );

    return (
        <div className = "app">
            <header className = "header">
                <h1>{"Gödel"}</h1>
                <p>{"A wordle game for gamers"}</p>

            </header>
            <Gamebox
                answer = {answer}
                currentGuess = {currentGuess}
                previousGuesses = {previousGuesses}
            />
            <Keyboard
                alphabet = {alphabet}
                onClick = {onClickHandler}
            />
        </div>
    );
}
