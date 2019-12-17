let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
// do not change code above this line

// Solution1
function checkInventory(scannedItem) {
    // change code below this line
    for (var key in foods) {
        if (scannedItem === key) {
            return foods[key];
        }
    }
}

// Solution2
function checkInventory(scannedItem) {
    return foods[scannedItem];
}

// change code below this line to test different cases:
console.log(checkInventory("apples"));
