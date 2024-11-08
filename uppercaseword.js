const fs = require('node:fs');

fs.readFile('1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;

    }

    let newstring = '';

    for (let i = 1; i < data.length; i++) {
        if (data[i] === ' ' || data[i] === ',' || data[i] === '?' || data[i] === '.' || data[i] === '!' || data[i] === ';'){
            const lastLetter = data[i - 1];
            const UpperCaselastLetter = lastLetter.toUpperCase();
            console.log(UpperCaselastLetter);
            newString = newString.slice(0, -1) + UpperCaselastLetter;
            newstring += data[i];
        } else {
            newString += data[i];
        }
        console.log(data)

        fs.writeFile('2.txt', data, 'utf8', (err) => {
            if (err) {
                console.error(err);
            }
        }

      )}
    })