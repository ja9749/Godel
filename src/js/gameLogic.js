export function checkWord(word, answer) {
    let results = ['blank', 'blank', 'blank', 'blank', 'blank'];
    let used = [false, false, false, false, false];

    for (let i = 0; i < 5; i++) {
        if (word.charAt(i) === answer.charAt(i)) {
            results[i] = 'correct';
            used[i] = true;
        }
    }

    for (let i = 0; i < 5; i++) {
        if (results[i] === 'correct') {
            continue;
        };

        let sliceIndex = 0;

        while (true) {
            const index = answer.slice(sliceIndex).indexOf(word.charAt(i));
            if (index < 0) {
                break;
            }
            else if (used[index + sliceIndex]) {
                sliceIndex += index + 1;
            }
            else {
                results[i] = 'near';
                used[index + sliceIndex] = true;
                break;
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        if (results[i] === 'blank') {
            results[i] = 'incorrect';
        }
    }

    return results;
}