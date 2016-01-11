function makeDiamond(num) {
	var size = num * 2 - 1;
	var line = 0;
	var sIdx = 0;

	while(line < size) {
		var str = "";
		for(var col = 1; col <= size; col++) {
			if(col <= num + sIdx && col >= num - sIdx) {
				str += "*";
				continue;
			}
			str += " ";		
		}
		
		console.log(str);
		
		if(line < num - 1) {
			sIdx++;
		} else {
			sIdx--;
		}

		line++;
	}
}

makeDiamond(5);
makeDiamond(3);
