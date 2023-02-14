const unecessaryDay = () => {
	let single = true;
	let day = 1;
	while (day <= 27) {
		day++;
		if (i == 14 && single) {
			continue;
		}
		console.log(day);
	}
};

unecessaryDay();
