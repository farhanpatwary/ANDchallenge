# AND Digital Challenge
This is a technical test I, Farhan Patwary, have taken for AND Digital.
## About
I've spent a little under an hour to complete this.    
The challenge is basically a permutation problem.   
i.e. The input is a string that may contain numbers and the task is to generate all possible permutations using only the numbers.   
I've over-commented my code in an attempt to explain all my steps.
## How I solved this problem
This can be split into two parts
1) Extract the numbers out of the input   
  i.e. if the input  is 'ABC 3A 2B CCC' then we want [3,2]
2) Recursively generate all the permutations using the result of step 1

## More
This readme will also be included in the submission so I am including the [link](https://github.com/farhanpatwary/ANDchallenge)
to this repository.

### My thoughts on this Challenge
I enjoyed doing this challenge, once I figured out what to do it was fairly straight forward.   

### Places where I've had hiccups
I have only come across one minor hiccup.
Initially I was just logging to the console whenever I reached a complete permutation.
i.e.
```js
if(available.length === 0){
	console.log(used)
}
```
However I later realised I may need to give the output as an array of arrays, where each sub-array is a permutation.
I initially didn't know how that would be done as I was printing out the output from within the recursive function, but after a few minutes I figured I would store all the permutations in a global variable and clear it before running the function.
i.e.
```js
// in getPermutations()
if(available.length === 0){
	permutations.push(used)
}
```
```js
// in solution()
permutations = [];
getPermutations(used,unused)
return permutations; 
```
### Assumptions I have made
1) I am assuming that the input may not contain negative numbers.   
I did this because I wasn't sure if an input such as 'ABC-3D4A7' should become `[-3,4,7]` or `[3,4,7]` after extracting the integers. My method assumes that it would be the latter option i.e. `[3,4,7]`.   
In the case that the input needs to consider negative numbers, i.e. `'ABC-3D4A7'` gives `[-3,4,7]` when extracting the numbers, I would need to make a simple change.   
i.e. In this part of the code: 
```js
for(var i=0; i<input.length; i++){
	if(is_num(input[i])){
		available.push(parseInt(input[i]));
	}
}
```
I could add a  `&& input[i-1] !== '-'` to the if statement. This would make sure only positive integers get added.
i.e. something like this:
```js
for(var i=0; i<input.length; i++){
	if(is_num(input[i]) && input[i-1] !== '-'){
		available.push(parseInt(input[i]));
	}
}
```
