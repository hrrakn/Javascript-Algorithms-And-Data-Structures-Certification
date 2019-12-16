// Solution1
function quickCheck(arr, elem) {
    // change code below this line

    if (arr.indexOf(elem) === -1) {
        return false;
    } else {
        return true;
    };
    // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//Solution 2
function quickCheck(arr, elem) {
    // change code below this line

    return arr.indexOf(elem) >= 0 ? true : false;

    // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// Solution 3
function quickCheck(arr, elem) {
    // change code below this line

    return arr.indexOf(elem) != -1;

    // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
