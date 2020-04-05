// Create a function that reverses a string:
// Hi how are you? should be: '?uoy era woh iH'

function reverse(str) {
    return str.split('').reverse().join('');
}

function reverseOne(str) {
    let newString = '';
    const strLength = str.length - 1;

    for(let i = strLength; i >= 0; i--) {
        newString += str[i];
    }

    return newString;
}

function reverseTwo(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'Error'
    }

    const backwards = [];
    const strLength = str.length - 1;

    for(let i = strLength; i >= 0; i--) {
        backwards.push(str[i]);
    }

    return backwards.join('');
}

const reverseThree = (str) => str.split('').reverse().join('');

const reverseFour = (str) => [...str].reverse().join('');
