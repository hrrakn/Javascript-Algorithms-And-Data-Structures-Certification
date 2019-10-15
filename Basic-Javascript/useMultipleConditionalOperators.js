function checkSign(num) {
    return (num > 0) ? "positive" : (num === 0) ? "zero" : "negative";
}

checkSign(10);

function checkSign(num) {
    if (num > 0) {
        return "positive";
    } else if (num === 0) {
        return "zero";
    } else {
        return "negative";
    }
}