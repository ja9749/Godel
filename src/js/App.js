import {useCallback} from 'react';
import {Keyboard} from './Keyboard';

export function App() {
    const onClickHandler = useCallback(
        (event) => {
            console.log(event);
        }, []
    );

    return (
        <div className = "app">
            <header className = "header">
                <h1>{"Gödel"}</h1>
                <p>{"A wordle game for gamers"}</p>
            </header>
            <div className = "game">
                <p>{"Gamebox"}</p>
            </div>
            <Keyboard onClick = {onClickHandler} />
        </div>
    );
}
