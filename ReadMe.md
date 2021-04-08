# Copia | Andre Thomas | Software Engineer Candidate
## Algorithm Challange
### Sync Problem
Time Complexity: O(n), The more elements there are in each array then more operations there will be which will add more time for the function to complete. As an illustration, the filter function will have to go through each element to make comparisons. If there are two 100 element arrays passed in, then more operations will have to take place as opposed to two 4 element arrays or an array with 3 elements and the second with 20 elements.

Alternative Method: 
Merge the arrays and sort the merged array. Afterwards loop through the array comparing the element (starting from the beginning) with the next element to see if they are the same. If they are, remove them both and log the integer removed (in case there is more than two of the same integer). If they aren't the same, then itereate to the second and so forth until you're left with unique elements. I choose not to do this way because I felt it would have been too complex for the task. For each element, after the first comparison, I would have to check with the array of removed elements which would have increased the number of operations.

Edge Cases: TypeScript could have been to ensure that the arrays were an arrays of integers. Because JS is loosely typed, they could have been arrays of elements of different types. Also an additional check to see if the arrays were empty has the potential to speed up the function in cases that have and array of elements passed in with an empty array.

Tests: I used the same tests listed in the challenge along with passing in...
1. ...two empty arrays.
2. ...arrays that were not in numerical order.
3. ...one empty array and one non-empty array.