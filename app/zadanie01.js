//Twój kod
const crypto = require('crypto');

const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';
const texts = ['??TegoHasła', 'CodersLab', 'Node.js Szyfruje Pliki', 'Zaźółć Gęślą Jaźń', 'Moje Haslo 1@3!', '111#$((@)n', 'Dzisiaj Szyfruje 83'];
const algorithms = ['sha256', 'sha512', 'md5', 'rmd160'];

texts.forEach((text) => {
    algorithms.forEach((algorithm) => {
        let hash = crypto.createHmac(algorithm, text).digest('hex');
        if (hash === MY_PWD_HASH) {
            console.log(`Użyty tekst: ${text}; Użyty algorytm: ${algorithm}`);
        } else {
            console.log('Nie znaleziono funkcji skrótu');
        }
    });
});
