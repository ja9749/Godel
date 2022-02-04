import {
    useCallback,
    useEffect,
    useState,
} from 'react';
import {Gamebox} from './Gamebox';
import {Keyboard} from './Keyboard';

export function App() {
    const [previousGuesses, setPreviousGuesses] = useState([]);
    const [currentGuess, setCurrentGuess] = useState('');

    const handleUserKeyPress = useCallback(event => {
        const {key} = event;

        if (key === 'Backspace') {
            if (currentGuess.length > 0) {
                setCurrentGuess(currentGuess.slice(0, -1));
            }
        }
        else if (key === 'Enter') {
            if (previousGuesses.length < 6 && currentGuess.length === 5) {
                setPreviousGuesses([...previousGuesses, currentGuess]);
                setCurrentGuess('');
            }
        }
        else if (currentGuess.length < 5) {
            if ((/[a-zA-Z]/).test(key) && key.length === 1) {
                setCurrentGuess(currentGuess.concat(key.toUpperCase()));
            }
        }
    }, [currentGuess, previousGuesses]);
    
    useEffect(() => {
        window.addEventListener("keydown", handleUserKeyPress);
        return () => {
            window.removeEventListener("keydown", handleUserKeyPress);
        };
    }, [handleUserKeyPress]);

    const onClickHandler = useCallback(
        (value) => {
            console.log(value);
            if (value === 'Bk') {
                if (currentGuess.length > 0) {
                    setCurrentGuess(currentGuess.slice(0, -1));
                }
            }
            else if (value === 'En' && previousGuesses.length < 6) {
                if (currentGuess.length === 5) {
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
            </header>
            <Gamebox
                answer = {'ROXAS'}
                currentGuess = {currentGuess}
                previousGuesses = {previousGuesses}
            />
            <Keyboard onClick = {onClickHandler} />
        </div>
    );
}
