# Copia | Andre Thomas | Software Engineer Candidate
## Algorithm Challange
### How to Run the Code
If you do not have node downloaded on your computer, navigate [here](https://nodejs.org/en/download/) and download the one that works with your operating system. After downloaded, clone this repo to a directory on your computer. Navigate to the directory and run the node command for any of the files to run the code:
1. `node copia-challenge.js`
2. `node deep-equality.js`
3. `node deep-equality-2.js`

### Sync Problem
__Alternative Method:__
Merge the arrays and sort the merged array. Afterwards loop through the array comparing the element (starting from the beginning) with the next element to see if they are the same. If they are, remove them both and log the integer removed (in case there is more than two of the same integer). If they aren't the same, then itereate to the second and so forth until you're left with unique elements. I choose not to do this way because I felt it would have been too complex for the task. For each element, after the first comparison, I would have to check with the array of removed elements which would have increased the number of operations.

__Edge Cases:__ TypeScript could have been to ensure that the arrays were an arrays of integers. Because JS is loosely typed, they could have been arrays of elements of different types. Also an additional check to see if the arrays were empty has the potential to speed up the function in cases that have and array of elements passed in with an empty array.

__Tests:__ I used the same tests listed in the challenge along with passing in...
1. ...two empty arrays.
2. ...arrays that were not in numerical order.
3. ...one empty array and one non-empty array.

### Deep Equality
__Alternative Method:__ I added two methods in different files: deep-equality.js and deep-equality-2.js. While I was working on the first one, I discovered, as I was writing out my comments, that I was doing double the work--two different solutions to the same problem. I'd probably choose the latter solution as my favorite because of it's simplicity.

__Edge Cases:__ I address edge cases in the comments. There are areas where I am assuming ideal situations for the sake of time. For example, I assume that the keys and values of both objects will be in the same order so when I compare both objects, it's a one to one comparison. I don't search the arrays to find the element.

__Tests:__ I used the same tests listed with the addition of objects where...
1. ...each value is an object.
2. ...the all but one value in the first object isn't an object and all the values in the the second object are objects.
3. ...there's another level of depth where a value is an object whose value is an object.