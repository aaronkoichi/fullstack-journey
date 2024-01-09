function longestString(arr) {
	var string = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (string.length < arr[i].length) {
			string = arr[i];
		}
	}
	return string;
}

const longestStringES6 = (arr) -> {
	let word = '';
	arr.forEach((element) => {
		if (element.length > word.length) {
			word = element;
		}
	});
	return word;
}







