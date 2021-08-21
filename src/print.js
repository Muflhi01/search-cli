var chalk = require('chalk');

function printTitle(text) {
    console.log(`\n\n\n${chalk.blue(text)}`);

}

function printURL(text, onlyUrls) {

    console.log(onlyUrls ? chalk.blue(text) : chalk.green(text));
}

function printDUM(text) {
    console.log(
        `\n\ndid you mean: ${text}`
    )
}

module.exports = {
    printDUM,
    printTitle,
    printURL
}