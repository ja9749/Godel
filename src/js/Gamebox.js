import {Square} from './Square';

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
                    <Square className = {results[0][0]} value = {guesses[0].charAt(0)}/>
                    <Square className = {results[0][1]} value = {guesses[0].charAt(1)}/>
                    <Square className = {results[0][2]} value = {guesses[0].charAt(2)}/>
                    <Square className = {results[0][3]} value = {guesses[0].charAt(3)}/>
                    <Square className = {results[0][4]} value = {guesses[0].charAt(4)}/>
                </div>
                <div className = {'gamebox-row'}>
                    <Square className = {results[1][0]} value = {guesses[1].charAt(0)}/>
                    <Square className = {results[1][1]} value = {guesses[1].charAt(1)}/>
                    <Square className = {results[1][2]} value = {guesses[1].charAt(2)}/>
                    <Square className = {results[1][3]} value = {guesses[1].charAt(3)}/>
                    <Square className = {results[1][4]} value = {guesses[1].charAt(4)}/>
                </div>
                <div className = {'gamebox-row'}>
                    <Square className = {results[2][0]} value = {guesses[2].charAt(0)}/>
                    <Square className = {results[2][1]} value = {guesses[2].charAt(1)}/>
                    <Square className = {results[2][2]} value = {guesses[2].charAt(2)}/>
                    <Square className = {results[2][3]} value = {guesses[2].charAt(3)}/>
                    <Square className = {results[2][4]} value = {guesses[2].charAt(4)}/>
                </div>
                <div className = {'gamebox-row'}>
                    <Square className = {results[3][0]} value = {guesses[3].charAt(0)}/>
                    <Square className = {results[3][1]} value = {guesses[3].charAt(1)}/>
                    <Square className = {results[3][2]} value = {guesses[3].charAt(2)}/>
                    <Square className = {results[3][3]} value = {guesses[3].charAt(3)}/>
                    <Square className = {results[3][4]} value = {guesses[3].charAt(4)}/>
                </div>
                <div className = {'gamebox-row'}>
                    <Square className = {results[4][0]} value = {guesses[4].charAt(0)}/>
                    <Square className = {results[4][1]} value = {guesses[4].charAt(1)}/>
                    <Square className = {results[4][2]} value = {guesses[4].charAt(2)}/>
                    <Square className = {results[4][3]} value = {guesses[4].charAt(3)}/>
                    <Square className = {results[4][4]} value = {guesses[4].charAt(4)}/>
                </div>
                <div className = {'gamebox-row'}>
                    <Square className = {results[5][0]} value = {guesses[5].charAt(0)}/>
                    <Square className = {results[5][1]} value = {guesses[5].charAt(1)}/>
                    <Square className = {results[5][2]} value = {guesses[5].charAt(2)}/>
                    <Square className = {results[5][3]} value = {guesses[5].charAt(3)}/>
                    <Square className = {results[5][4]} value = {guesses[5].charAt(4)}/>
                </div>
            </div>
        </div>
    );
}
