//Twój kod
const fs = require('fs');
const crypto = require('crypto');

const fileName = process.argv.slice(2);

fs.readFile(`${fileName[0]}`, 'utf8', (error, data) => {
    if (error === null) {
        const hash = crypto.createHmac('sha256', data).digest('hex');
        console.log(hash);
    } else {
        console.log('Błąd podczas odczytu pliku!', error);
    }
});
