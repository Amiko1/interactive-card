export function onlyLetters(str) {
    return /^[a-zA-Z\s.,]+$/.test(str);
}

export function maxLength(string, maxSize)  {
    console.log(string.length, maxSize)
    if(string.length > maxSize) {
        return true
    }

    return false
}

