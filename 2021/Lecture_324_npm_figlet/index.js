const franc = require('franc');
const colors = require('colors');
const langs = require('langs');
const text = process.argv[2];

let langCode = franc(text);
console.log(langCode);

if (langCode === 'und') {
    console.log('Could not determine language. Please, try using a larger sample text'.red);
} else {
    const language = langs.where('3', langCode).name;
    console.log(`Our best guess is: ${language}`.cyan);
}
