export default {
	mapDouble: (originalArray) => {
		let newArray = [];

		for (let value of originalArray) {
			newArray.push(value * 2);
		}

		return newArray;
	}
};
