function repeatStringNumTimes(str, num) {
    // repeat after me
    let repeatingStr = ""
    while (num > 0) {
        repeatingStr += str
        num--
    }
    return repeatingStr
}

repeatStringNumTimes("abc", 3);
