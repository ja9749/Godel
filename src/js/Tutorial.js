export function Tutorial() {
    return (
        <div class="tutorial">
            <p>Guess the Gödel in six tries.</p>
            <p>Each guess must be a valid five-letter gaming reference. Hit the enter button to submit.</p>
            <p>For example, "SMASH" is a valid gaming reference, referring to the Nintendo game franchise Super Smash Bros.</p>
            <p>"CHAIR" although a five-letter word is not a reference to any particular game so is not valid.</p>
            <p>"WALUIGI" although a gaming reference is not five-letters so is not invited.</p>
            <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
            <p>Examples</p>
            <div class="gamebox-row">
                <div class="square blank">G</div>
                <div class="square correct">A</div>
                <div class="square blank">N</div>
                <div class="square blank">O</div>
                <div class="square blank">N</div>
            </div>
            <p>The letter A is in the word and in the correct spot.</p>
            <div class="gamebox-row">
                <div class="square blank">Y</div>
                <div class="square blank">O</div>
                <div class="square blank">S</div>
                <div class="square near">H</div>
                <div class="square blank">I</div>
            </div>
            <p>The letter H is in the word but in the wrong spot.</p>
            <div class="gamebox-row">
                <div class="square incorrect">S</div>
                <div class="square blank">N</div>
                <div class="square blank">A</div>
                <div class="square blank">K</div>
                <div class="square blank">E</div>
            </div>
            <p>The letter S is not in the word in any spot.</p>
            <p>A new Gödel will be available each day!</p>
        </div>
    );
}
