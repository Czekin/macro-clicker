const robot = require('robotjs');
const io = require('iohook');
const color = require('chalk');
const config = require('../config.json');

let status = false;
const pauseAnimation = ['Paused', 'Paused.', 'Paused..', 'Paused...'];
let animationIterator = 0;

const clickInterval = setInterval(() => {
    if (status) {
        robot.mouseClick('left');
        // console.log(color.redBright.underline('[DEBUG]:'), 'click');
    } else {
        if (animationIterator > pauseAnimation.length - 1) animationIterator = 0;

        console.clear();
        console.log(color.yellowBright('Czekin Macro Clicker\n'));
        console.log(color.white("(Press 'Shift + Z' to resume)"));
        console.log(color.gray(pauseAnimation[animationIterator]));

        animationIterator++;
    }
}, config.clickInterval);

io.on('keydown', (keyData) => {
    const key = {
        shiftkey: keyData.shiftKey,
        keycode: keyData.keycode
    }

    if (key.shiftkey && key.keycode == 1) {
        clearInterval(clickInterval);
        console.clear();
        console.log(color.yellowBright('Czekin Macro Clicker\n'));
        console.log(color.white('> Macro stopped. >\n'))
        return process.exit(0);
    }

    if (key.shiftkey && key.keycode == 44) {
        if (status) {
            status = false;
            animationIterator = 0;
        } else {
            status = true;
            console.clear();
            console.log(color.yellowBright('Czekin Macro Clicker\n'));
            console.log(color.greenBright(`Clicking: ${config.clickInterval} ms`));
        }
    }
});

io.start();

console.log(color.gray('Please wait...'));