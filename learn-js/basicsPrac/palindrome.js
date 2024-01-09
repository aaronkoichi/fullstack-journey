function checkPali(word) {
  let reverse = word.split("").reverse().join("");
  if (reverse === word) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPali("level"));
console.log(checkPali("hello"));
