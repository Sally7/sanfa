let line ='BBGGBBBGG'
minSteps2(line) {
		if (!line) {
			return 0;
		}
		let arr = line.split('')
		let step1 = 0;
		let step2 = 0;
		let gi = 0;
		let bi = 0;
		for (let i = 0; i < str.length; i++) {
			if (str[i] == 'G') { // 当前的G，去左边   方案1
				step1 += i - (gi++);
			} else {// 当前的B，去左边   方案2
				step2 += i - (bi++);
			}
		}
		return Math.min(step1, step2);
	}