# AND Digital Challenge
This is a technical test I have done for AND Digital.
## About
I've spent a little under an hour to complete this.    
The challenge is basically a permutation problem. I.e. The input is a string that may contain numbers and the task is to generate all possible permutations using only the numbers.   
I've over-commented my code in an attempt to explain all my steps.
## How I solved this problem
This can be split into two parts
1) Extract the numbers out of the input   
  i.e. if the input  is 'ABC 3A 2B CCC' then we want [3,2]
2) Recursively generate all the permutations using the result of step 1
