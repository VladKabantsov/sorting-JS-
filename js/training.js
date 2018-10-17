const getPrimes = (n) => {

    let result = [];

    for (let i = 2; i <= n; i++) {

        for (let j = 2; j <= i; j++) {

            if (j === i) {

                result.push(i);
            }

            if (i % j === 0) {

                break;
            }
        }
    }

    return result;
};

const left = [ '(', '[', '{' ];

const right = [ ')', ']', '}' ];

const check = (brs) => {
    let opening = {
        '[': ']',
        '{': '}',
        '(': ')',
        '<': '>',
    };

    let stack = [];
    let ret = '';

    for(let i = 0; i < brs.length; i++){

        let c = brs[i];

        if(opening[c]){

            stack.push(c);
        } else {

            if(stack.length === 0){
                return false;
            }

            let br = stack.pop();

            c = opening[br];
        }

        ret += c;
    }

    if (stack.length > 0){
        return false;
    }

    return ret;
};

const sum = () => {

    let currentSum = 0;

    let add = val => {
        currentSum += val;
        return add;
    };

    add.toString = () => {
      return currentSum;
    };

    return add;
};

const getAnagrams = (arguments) => {

    let result = [];

    const isAnagram = (firstVal, secondVal) => {

        let firstSplited = firstVal.split('');

        let secondSplited = secondVal.split('');

        while (firstSplited.length) {

            let char = firstSplited[ 0 ];

            let index = secondSplited.indexOf(char);

            if (index !== -1) {

                firstSplited.splice(0 ,1);

                secondSplited.splice(index, 1);
            } else {

                return false;
            }
        }

        return !firstSplited.length && !secondSplited.length;
    };

    for (let i = 0, dataLength = arguments.length; i < dataLength; i++) {

        for (let j = i + 1; j < dataLength; j++) {

            if (isAnagram(arguments[ i ], arguments[ j ])) {

                result.push([ arguments[ i ], arguments[ j ] ]);
            }
        }
    }

    return result;
};

// console.log(getAnagrams(['нос', 'сон', 'снедь', 'днесь']));

const five = (arg) => arg ? arg + 5 : 5;
const one = (arg) => arg ? arg + 1 : 1;
const two = (arg) => arg ? arg + 2 : 2;
const seven = (arg) => arg ? arg + 7 : 7;
const add = (val) => val;
const subtract = (val) => -1 * val;

console.log(five(add(one())));
console.log(seven(subtract(two())));
console.log(seven(add(seven())));
