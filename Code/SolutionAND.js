// The problem can be split into two parts:
// 1) The first part of the problem is to extract all the digits from the input.
//    This needs to be done because the input may contain letters and other characters.
//    This part is quite simple, all we need to do is iterate through the string and check each character
//    we can then push characters that are digits to a list and leave the rest.
// 
// 2) The second part of the problem is generating all the permutations
//    This is an instance of the backtracking algorithm.
//    We can generate all possible solutions using a recursive method and then backtracking
//    i.e. removing the last character we added and trying different available characters.

// permutations is a global array to store all the permutations that get generated recursively
let permutations = []

function solution (input) {
	// Part 1 - extracting all the integers from the input
	let available = [];
	// Input has to be of type String
	if(typeof input !== "string"){
		return "Input must be of type string"
	}
	for(var i=0; i<input.length; i++){
		if(is_num(input[i])){
			available.push(parseInt(input[i]));
		}
	}
	// Available now contains all the numbers from the input
	// i.e. if input is 'A 3B2 C6D', then Available = [3,2,6]

	// Part 2 - Generating all the permutations
	let used = [];
	let unused = available;
	let ouput = [];
	permutations = [];
	getPermutations(used,unused)
	return permutations; 
}

// Helper function to check if input is a number
function is_num(input){
	try {
		let result = parseInt(input)
		if(isNaN(result)){
			// result is not a number
			return false;
		} else {
			// result is a number
			return true;
		}
	} catch(e) {
		return e
	}
}

function getPermutations(used, available){
	let current_available = [];
	let current_used = [];
	// available.length is 0 when there are no more available characters to add
	if(available.length === 0){
		permutations.push(used)
	} else {
		// this for loop calls the function recursively for all available 
		// characters that haven't been added to the output yet
		for(var x=0; x<available.length;x++){
			// use the spread operator i.e. ... to clone the arrays so the original arrays aren't modified
			current_used = [...used];
			current_available = [...available];
			// adds current character to used
			current_used.push(current_available[x]);
			// removes the character we just added to used from available
			current_available.splice(x,1);
			getPermutations(current_used,current_available);
		}
	}
}

// some example inputs
console.log('')
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
console.log('')
console.log(solution('A 3B7 C6D')); // expected ouput 632,623,362,326,263,236
