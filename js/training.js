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

console.log( check('{([[[])}') );