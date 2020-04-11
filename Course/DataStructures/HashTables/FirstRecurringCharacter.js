// Google Question
// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// It should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4];
// It should return 1

// Given an array [2, 3, 4, 5]

function firstRecurringCharacter(arr) {
    const obj = {};
    let count = 0;
    let value = 0;

    for (let i = 0; i < arr.length; i++) {
        if(obj[arr[i]]) {
            obj[arr[i]] = obj[arr[i]] + 1;
        } else {
            obj[arr[i]] = 1;
        }

        if(count < obj[arr[i]]) {
            count = obj[arr[i]];
            value = arr[i];
        }
    }

    return count > 1 ? value : undefined;
}

function firstRecurringCharacterOne(input) {
    const aux = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            console.log(j, i);
            if(input[i] === input [j]) {
                return input[i];
            }
        }
    }

    return undefined;
} // O(n^2)


function firstRecurringCharacterTwo(input) {
    const aux = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            console.log(j, i);
            if(input[i] === input [j]) {
                return input[i];
            }
        }
    }

    return undefined;
} // O(n^2)


console.log(firstRecurringCharacterOne([2, 1, 1, 2, 1, 1, 1]));


