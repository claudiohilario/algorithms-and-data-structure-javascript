// Google Question
// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// It should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4];
// It should return 1

// Given an array [2, 3, 4, 5]

function test(arr) {
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

console.log(test([2, 3, 4, 5]));


