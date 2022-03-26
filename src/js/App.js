import {
    useCallback,
    useEffect,
    useState,
} from 'react';
import {Gamebox} from './Gamebox';
import {Keyboard} from './Keyboard';
import {Notice} from './Notice';
import {TempNotice} from './TempNotice';
import {Tutorial} from './Tutorial';
import {Results} from './Results';
import {
    handleKeyInput,
    rngIntSeed,
} from './gameLogic';
import {useLocalStorage} from "./useLocalStorage";
import answers from '../data/answers.json';
import words from '../data/words.json';

import tutorialSvg from '../resources/tutorial-standard.svg';
import settingsSvg from '../resources/settings-standard.svg';
import resultsSvg from '../resources/results-standard.svg';
import blankSvg from '../resources/blank.svg';

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

    const [previousGuesses, setPreviousGuesses] = useLocalStorage("previousGuesses", []);
    const [currentGuess, setCurrentGuess] = useLocalStorage("currentGuess", '');
    const [alphabet, setAlphabet] = useLocalStorage("alphabet", initialAlphabet);
    const [results, setResults] = useLocalStorage("results", initialResults);
    const [showNotice, setShowNotice] = useLocalStorage("showNotice", false);
    const [noticeTitle, setNoticeTitle] = useLocalStorage("noticeTitle", null);
    const [showTempNotice, setShowTempNotice] = useLocalStorage("showTempNotice", false);
    const [tempNoticeContent, setTempNoticeContent] = useLocalStorage("tempNoticeContent", null);
    const [showResultsAfter, setShowResultsAfter] = useLocalStorage("showResultsAfter", false);

    const today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    
    const seed = mm + dd + yyyy;

    const newAnswers = answers.filter((entry) => entry.game !== "");

    const answer = newAnswers[rngIntSeed({max: newAnswers.length, seed: seed})];

    const finished = (previousGuesses[previousGuesses.length - 1] === answer.word) || previousGuesses.length === 6;

    console.log(finished);

    let noticeContent = null;
    switch(noticeTitle) {
        case 'Results':
            noticeContent = 
                <Results
                    game = {answer.game}
                    img = {answer.img}
                    url = {answer.url}
                    word = {answer.word}
                    finished = {finished}
                />;
            break;
        case 'How to play':
            noticeContent = <Tutorial/>;
            break;
        case 'Settings':
            noticeContent = 'Settings';
            break;
    }

    const handleTutorialOpen = useCallback(() => {
        setNoticeTitle('How to play');
        setShowNotice(true);
    });

    const handleSettingsOpen = useCallback(() => {
        setNoticeTitle('Settings');
        setShowNotice(true);
    });

    const handleResultsOpen = useCallback(() => {
        setNoticeTitle('Results');
        setShowNotice(true);
    });

    const handleUserKeyPress = useCallback(event => {
        const {key} = event;
        let value = null;
        if (key === 'Backspace') {
            value = 'Back';
        }
        else if (key === 'Enter') {
            value = 'Enter';
        }
        else if ((/[a-zA-Z]/).test(key) && key.length === 1) {
            value = key.toUpperCase();
        }

        if (value) {
            handleKeyInput(
                value,
                answer.word,
                currentGuess,
                setCurrentGuess,
                previousGuesses,
                setPreviousGuesses,
                alphabet,
                setAlphabet,
                results,
                setResults,
                setShowTempNotice,
                setTempNoticeContent,
                setShowResultsAfter,
                showNotice,
                words,
            );
        }
    }, [alphabet, currentGuess, previousGuesses, showNotice]);
    
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
                answer.word,
                currentGuess,
                setCurrentGuess,
                previousGuesses,
                setPreviousGuesses,
                alphabet,
                setAlphabet,
                results,
                setResults,
                setShowTempNotice,
                setTempNoticeContent,
                setShowResultsAfter,
                showNotice,
                words,
            );
        }, [alphabet, currentGuess, previousGuesses, showNotice]
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
            {
                showTempNotice &&
                <TempNotice
                    answer = {answer}
                    setShowTempNotice = {setShowTempNotice}
                    setNoticeTitle = {setNoticeTitle}
                    setShowNotice = {setShowNotice}
                    showResultsAfter = {showResultsAfter}
                >
                    {tempNoticeContent}
                </TempNotice>
            }
            {   
                !showNotice &&
                <>
                    <header className = "header">
                        <img src = {tutorialSvg} onClick = {handleTutorialOpen}/>
                        <img src = {blankSvg}/>
                        <div className = {'title'}>
                            <h1 className='main-title'>{"Nintordle"}</h1>
                        </div>
                        <img src = {resultsSvg} onClick = {handleResultsOpen}/>
                        <img src = {settingsSvg} onClick = {handleSettingsOpen}/>
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
                </>
            }
        </div>
    );
}
