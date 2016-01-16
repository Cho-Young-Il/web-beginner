function sumLineNum(num) {
	var sum = 0;
	while((num / 10) != 0) {
		sum += num % 10;
		num = parseInt(num / 10);
	}
	console.log(sum);
}

sumLineNum(54321); //15
sumLineNum(543); //12