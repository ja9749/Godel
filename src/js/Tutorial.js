import {Square} from "./Square";

export function Tutorial() {
    return (
        <div className = {"tutorial"}>
            <p>Guess the <strong>Nintordle</strong> in six tries.</p>
            <p>Each guess must be a valid five-letter gaming reference. Hit the enter button to submit.</p>
            <p>For example, <strong>SMASH</strong> is a valid gaming reference, referring to the Nintendo game franchise Super Smash Bros.</p>
            <p><strong>CHAIR</strong> although a five-letter word is not a reference to any particular game so is not valid.</p>
            <p><strong>WALUIGI</strong> although a gaming reference is not five-letters so is not invited.</p>
            <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
            <p><strong>Examples</strong></p>
            <div className = {"gamebox-row"}>
                <Square className = {'blank'} value = {'G'}/>
                <Square className = {'correct'} value = {'A'}/>
                <Square className = {'blank'} value = {'N'}/>
                <Square className = {'blank'} value = {'O'}/>
                <Square className = {'blank'} value = {'N'}/>
            </div>
            <p>The letter <strong>A</strong> is in the word and in the correct spot.</p>
            <div className = {"gamebox-row"}>
                <Square className = {'blank'} value = {'Y'}/>
                <Square className = {'blank'} value = {'O'}/>
                <Square className = {'blank'} value = {'S'}/>
                <Square className = {'near'} value = {'H'}/>
                <Square className = {'blank'} value = {'I'}/>
            </div>
            <p>The letter <strong>H</strong> is in the word but in the wrong spot.</p>
            <div className = {"gamebox-row"}>
                <Square className = {'incorrect'} value = {'S'}/>
                <Square className = {'blank'} value = {'N'}/>
                <Square className = {'blank'} value = {'A'}/>
                <Square className = {'blank'} value = {'K'}/>
                <Square className = {'blank'} value = {'E'}/>
            </div>
            <p>The letter <strong>S</strong> is not in the word in any spot.</p>
            <p>A new <strong>Nintordle</strong> will be available each day!</p>
        </div>
    );
}
