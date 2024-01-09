function findMax(arr) {
  let hold = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > hold) {
      hold = arr[i];
    }
  }
	return hold;
}

console.log(findMax([4, 7, 8, 3, 2]));
