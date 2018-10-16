let startArray  = [5, 3, 8, 2, 9, 7, 4, 6, 0, 1];

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const bubbleSort = array => {

    for (let  i = 0, endI = array.length - 1; i < endI; i++) {

        let wasSwap = false;

        for (let j = 0, endJ = endI - i; j < endJ; j++) {

            if (array[ j ] > array[ j + 1 ]) {

                [array[ j ], array[ j + 1 ]] = [array[j + 1], array[ j ]];
                wasSwap = true;
            }
        }

        if (!wasSwap) break;
    }

    return array;
};

const swap = (arr , i, j) => {

    const akum = arr[i];
    arr[i] = arr[j];
    arr[j] = akum;
};

const coctailSort = (array) => {

    let leftIndex = firstSwap =  0;
    let rightIndex = lastSwawp = array.length - 1;

    while (leftIndex < rightIndex) {

        for (let idx = leftIndex; idx < rightIndex; idx++) {

            if ( array[idx] > array[idx + 1]) {

                swap(array, idx, idx + 1);
                lastSwawp = i;
            }
        }

        for (let idx = rightIndex; idx > leftIndex; idx--) {

            if ( array[idx] < array[idx - 1]) {

                swap(array, idx, idx - 1);
                firstSwap = i;
            }
        }
    }

    return array
};

const merge_sort = (array) => {

    function merge(left, right){
        let result = [];
        let il = 0;
        let ir = 0;

        while (il < left.length && ir < right.length){

            if (left[il] < right[ir]){

                result.push(left[il++]);
            } else {

                result.push(right[ir++]);
            }
        }

        //merge what is left
        return result.concat(left.slice(il)).concat(right.slice(ir));
    }

    function merge_sort(items){
        //well it is only 1 element
        if (items.length < 2){

            return items;
        }

        let middle = Math.floor(items.length / 2);
        //create two arrays
        let left = items.slice(0, middle);
        let right = items.slice(middle);

        return merge(merge_sort(left), merge_sort(right));
    }

    return merge_sort(array);
};

console.log(merge_sort(startArray));

