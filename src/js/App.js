import {
    useCallback,
    useEffect,
    useState,
} from 'react';
import {Gamebox} from './Gamebox';
import {Keyboard} from './Keyboard';
import {Notice} from './Notice';
import {Tutorial} from './Tutorial';
import {
    handleKeyInput,
    rngIntSeed,
} from './gameLogic';
import answers from '../data/answers.json';
import words from '../data/words.json';

import tutorial from '../resources/tutorial-standard.svg';
import settings from '../resources/settings-standard.svg';

export function App() {
    const initialAlphabet = {
        'A': 'blank', 'B': 'blank', 'C': 'blank', 'D': 'blank', 'E': 'blank',
        'F': 'blank', 'G': 'blank', 'H': 'blank', 'I': 'blank', 'J': 'blank',
        'K': 'blank', 'L': 'blank', 'M': 'blank', 'N': 'blank', 'O': 'blank',
        'P': 'blank', 'Q': 'blank', 'R': 'blank', 'S': 'blank', 'T': 'blank',
        'U': 'blank', 'V': 'blank', 'W': 'blank', 'X': 'blank', 'Y': 'blank',
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
    const [showNotice, setShowNotice] = useState(false);
    const [noticeContent, setNoticeContent] = useState(null);
    const [noticeTitle, setNoticeTitle] = useState(null);

    const today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    
    const seed = mm + dd + yyyy;

    const answer = answers.map((entry) => entry.word)[rngIntSeed({max: answers.length, seed: seed})];

    const handleTutorialOpen = useCallback(() => {
        setNoticeContent(<Tutorial/>);
        setNoticeTitle('HOW TO PLAY');
        setShowNotice(true);
    });

    const handleSettingsOpen = useCallback(() => {
        setNoticeContent('Settings');
        setNoticeTitle('SETTINGS');
        setShowNotice(true);
    });

    const handleUserKeyPress = useCallback(event => {
        const {key} = event;
        let value = null;
        if (key === 'Backspace') {
            value = 'Bk';
        }
        else if (key === 'Enter') {
            value = 'En';
        }
        else if ((/[a-zA-Z]/).test(key) && key.length === 1) {
            value = key.toUpperCase();
        }

        if (value) {
            handleKeyInput(
                value,
                answer,
                currentGuess,
                setCurrentGuess,
                previousGuesses,
                setPreviousGuesses,
                alphabet,
                setAlphabet,
                results,
                setResults,
                words,
            );
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
            handleKeyInput(
                value,
                answer,
                currentGuess,
                setCurrentGuess,
                previousGuesses,
                setPreviousGuesses,
                alphabet,
                setAlphabet,
                results,
                setResults,
                words,
            );
        }, [alphabet, currentGuess, previousGuesses]
    );

    return (
        <div className = "app">
            {
                showNotice &&
                <Notice
                    title = {noticeTitle}
                    setShowNotice = {setShowNotice}
                >
                    {noticeContent}
                </Notice>
            }
            <header className = "header">
                <img src = {tutorial} onClick = {handleTutorialOpen}/>
                <div className = {'title'}>
                    <h1 className='main-title'>{"Nintordle"}</h1>
                    <p>{"A wordle game for Nintendo fans"}</p>
                </div>
                <img src = {settings} onClick = {handleSettingsOpen}/>
            </header>
            <Gamebox
                currentGuess = {currentGuess}
                previousGuesses = {previousGuesses}
                results = {results}
            />
            <Keyboard
                alphabet = {alphabet}
                onClick = {onClickHandler}
            />
        </div>
    );
}
