do {
	let num = window.prompt("Enter a whole number: ");
	if (num > 0) {
		let result = (num - 4) * 3;
		console.log("The Number " + num + " is above zero hence,\nResult of the calculations = " + result);

	}
	else{
		let result = (num + 3) * 4;
		console.log("The Number " + num + " is below zero hence,\nResult of the calculations = " + result);
	}
	ans = window.prompt("Do you want to repeat?: ");
}while (ans.toLowerCase() == "yes");