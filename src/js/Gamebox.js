import {checkWord} from "./gameLogic";

export function Gamebox(props) {
    const {answer, currentGuess, previousGuesses} = props;

    let guesses = ['     ', '     ', '     ', '     ', '     ', '     '];
    let colours = [
        ['blank', 'blank', 'blank', 'blank', 'blank'],
        ['blank', 'blank', 'blank', 'blank', 'blank'],
        ['blank', 'blank', 'blank', 'blank', 'blank'],
        ['blank', 'blank', 'blank', 'blank', 'blank'],
        ['blank', 'blank', 'blank', 'blank', 'blank'],
        ['blank', 'blank', 'blank', 'blank', 'blank'],
    ];

    for (let i = 0; i < previousGuesses.length; i++) {
        guesses[i] = previousGuesses[i];
        colours[i] = checkWord(previousGuesses[i], answer);
    }

    guesses[previousGuesses.length] = currentGuess.padEnd(5 - currentGuess.length);

    return (
        <div className = {'gamebox-container'}>
            <div className = {'gamebox'}>
                <div className = {'gamebox-row'}>
                    <div className = {`square ${colours[0][0]}`}>{guesses[0].charAt(0)}</div>
                    <div className = {`square ${colours[0][1]}`}>{guesses[0].charAt(1)}</div>
                    <div className = {`square ${colours[0][2]}`}>{guesses[0].charAt(2)}</div>
                    <div className = {`square ${colours[0][3]}`}>{guesses[0].charAt(3)}</div>
                    <div className = {`square ${colours[0][4]}`}>{guesses[0].charAt(4)}</div>
                </div>
                <div className = {'gamebox-row'}>
                    <div className = {`square ${colours[1][0]}`}>{guesses[1].charAt(0)}</div>
                    <div className = {`square ${colours[1][1]}`}>{guesses[1].charAt(1)}</div>
                    <div className = {`square ${colours[1][2]}`}>{guesses[1].charAt(2)}</div>
                    <div className = {`square ${colours[1][3]}`}>{guesses[1].charAt(3)}</div>
                    <div className = {`square ${colours[1][4]}`}>{guesses[1].charAt(4)}</div>
                </div>
                <div className = {'gamebox-row'}>
                    <div className = {`square ${colours[2][0]}`}>{guesses[2].charAt(0)}</div>
                    <div className = {`square ${colours[2][1]}`}>{guesses[2].charAt(1)}</div>
                    <div className = {`square ${colours[2][2]}`}>{guesses[2].charAt(2)}</div>
                    <div className = {`square ${colours[2][3]}`}>{guesses[2].charAt(3)}</div>
                    <div className = {`square ${colours[2][4]}`}>{guesses[2].charAt(4)}</div>
                </div>
                <div className = {'gamebox-row'}>
                    <div className = {`square ${colours[3][0]}`}>{guesses[3].charAt(0)}</div>
                    <div className = {`square ${colours[3][1]}`}>{guesses[3].charAt(1)}</div>
                    <div className = {`square ${colours[3][2]}`}>{guesses[3].charAt(2)}</div>
                    <div className = {`square ${colours[3][3]}`}>{guesses[3].charAt(3)}</div>
                    <div className = {`square ${colours[3][4]}`}>{guesses[3].charAt(4)}</div>
                </div>
                <div className = {'gamebox-row'}>
                    <div className = {`square ${colours[4][0]}`}>{guesses[4].charAt(0)}</div>
                    <div className = {`square ${colours[4][1]}`}>{guesses[4].charAt(1)}</div>
                    <div className = {`square ${colours[4][2]}`}>{guesses[4].charAt(2)}</div>
                    <div className = {`square ${colours[4][3]}`}>{guesses[4].charAt(3)}</div>
                    <div className = {`square ${colours[4][4]}`}>{guesses[4].charAt(4)}</div>
                </div>
                <div className = {'gamebox-row'}>
                    <div className = {`square ${colours[5][0]}`}>{guesses[5].charAt(0)}</div>
                    <div className = {`square ${colours[5][1]}`}>{guesses[5].charAt(1)}</div>
                    <div className = {`square ${colours[5][2]}`}>{guesses[5].charAt(2)}</div>
                    <div className = {`square ${colours[5][3]}`}>{guesses[5].charAt(3)}</div>
                    <div className = {`square ${colours[5][4]}`}>{guesses[5].charAt(4)}</div>
                </div>
            </div>
        </div>
    );
}
