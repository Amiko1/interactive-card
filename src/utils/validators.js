export function onlyLetters(str) {
    return /^[a-zA-Z\s.,]+$/.test(str);
}

export function onlyNumbers(str) {
    return /^[0-9]+$/.test(str);
  }
