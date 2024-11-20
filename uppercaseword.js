const fs = require('node:fs');

fs.readFile('1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;

    }
[]
    let newString = '';

    for (let i = 1; i < data.length; i++) {
        if (data[i] === ' ' || data[i] === ',' || data[i] === '?' || data[i] === '.' || data[i] === '!' || data[i] === ';'){
            const lastLetter = data[i - 1];
            const UpperCaselastLetter = lastLetter.toUpperCase();
            newString = newString.slice(0, -1) + UpperCaselastLetter;
            newString += data[i];
        } else {
            newString += data[i];
        }

        fs.writeFile('2.txt', newString, 'utf8', (err) => {
            if (err) {
                console.error(err);
            }
        }

      )}
    })
