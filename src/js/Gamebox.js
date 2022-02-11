import {checkWord} from "./gameLogic";

export function Gamebox(props) {
    const {currentGuess, previousGuesses, results} = props;

    let guesses = ['     ', '     ', '     ', '     ', '     ', '     '];

    for (let i = 0; i < previousGuesses.length; i++) {
        guesses[i] = previousGuesses[i];
    }

    guesses[previousGuesses.length] = currentGuess.padEnd(5 - currentGuess.length);

    return (
        <div className = {'gamebox-container'}>
            <div className = {'gamebox'}>
                <div className = {'gamebox-row'}>
                    <div className = {`square ${results[0][0]}`}>{guesses[0].charAt(0)}</div>
                    <div className = {`square ${results[0][1]}`}>{guesses[0].charAt(1)}</div>
                    <div className = {`square ${results[0][2]}`}>{guesses[0].charAt(2)}</div>
                    <div className = {`square ${results[0][3]}`}>{guesses[0].charAt(3)}</div>
                    <div className = {`square ${results[0][4]}`}>{guesses[0].charAt(4)}</div>
                </div>
                <div className = {'gamebox-row'}>
                    <div className = {`square ${results[1][0]}`}>{guesses[1].charAt(0)}</div>
                    <div className = {`square ${results[1][1]}`}>{guesses[1].charAt(1)}</div>
                    <div className = {`square ${results[1][2]}`}>{guesses[1].charAt(2)}</div>
                    <div className = {`square ${results[1][3]}`}>{guesses[1].charAt(3)}</div>
                    <div className = {`square ${results[1][4]}`}>{guesses[1].charAt(4)}</div>
                </div>
                <div className = {'gamebox-row'}>
                    <div className = {`square ${results[2][0]}`}>{guesses[2].charAt(0)}</div>
                    <div className = {`square ${results[2][1]}`}>{guesses[2].charAt(1)}</div>
                    <div className = {`square ${results[2][2]}`}>{guesses[2].charAt(2)}</div>
                    <div className = {`square ${results[2][3]}`}>{guesses[2].charAt(3)}</div>
                    <div className = {`square ${results[2][4]}`}>{guesses[2].charAt(4)}</div>
                </div>
                <div className = {'gamebox-row'}>
                    <div className = {`square ${results[3][0]}`}>{guesses[3].charAt(0)}</div>
                    <div className = {`square ${results[3][1]}`}>{guesses[3].charAt(1)}</div>
                    <div className = {`square ${results[3][2]}`}>{guesses[3].charAt(2)}</div>
                    <div className = {`square ${results[3][3]}`}>{guesses[3].charAt(3)}</div>
                    <div className = {`square ${results[3][4]}`}>{guesses[3].charAt(4)}</div>
                </div>
                <div className = {'gamebox-row'}>
                    <div className = {`square ${results[4][0]}`}>{guesses[4].charAt(0)}</div>
                    <div className = {`square ${results[4][1]}`}>{guesses[4].charAt(1)}</div>
                    <div className = {`square ${results[4][2]}`}>{guesses[4].charAt(2)}</div>
                    <div className = {`square ${results[4][3]}`}>{guesses[4].charAt(3)}</div>
                    <div className = {`square ${results[4][4]}`}>{guesses[4].charAt(4)}</div>
                </div>
                <div className = {'gamebox-row'}>
                    <div className = {`square ${results[5][0]}`}>{guesses[5].charAt(0)}</div>
                    <div className = {`square ${results[5][1]}`}>{guesses[5].charAt(1)}</div>
                    <div className = {`square ${results[5][2]}`}>{guesses[5].charAt(2)}</div>
                    <div className = {`square ${results[5][3]}`}>{guesses[5].charAt(3)}</div>
                    <div className = {`square ${results[5][4]}`}>{guesses[5].charAt(4)}</div>
                </div>
            </div>
        </div>
    );
}
