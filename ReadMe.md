# Copia | Andre Thomas | Software Engineer Candidate
## Algorithm Challange
### How to Run the Code
If you do not have node downloaded on your computer, navigate [here](https://nodejs.org/en/download/) and download the one that works with your operating system. After downloaded, clone this repo to a directory on your computer. Navigate to the directory and run the node command for any of the files to run the code:
1. `node copia-challenge.js`
2. `node deep-equality.js`
3. `node deep-equality-2.js`

### Sync Problem

__Full Disclosure on Big O:__ I have been reading up on Big O notation for the past few weeks so I'm not well veresed in it. I do, howerever, understand the concept and program in such a way that reduces time/operations. Hopefully, that's evident in my code. Nonetheless, I gave my best explanation on the time and spatial complexity of my code given what I understand.

__Time Complexity__: O(n), The more elements there are in each array then more operations there will be which will add more time for the function to complete. As an illustration, the filter function will have to go through each element to make comparisons. If there are two 100 element arrays passed in, then more operations will have to take place as opposed to two 4 element arrays or an array with 3 elements and the second with 20 elements.

__Spcatial Complexity__: O(n), Dealing with arrays so the amount of elements directly affects the amount of space being taken up.

__Alternative Method:__
Merge the arrays and sort the merged array. Afterwards loop through the array comparing the element (starting from the beginning) with the next element to see if they are the same. If they are, remove them both and log the integer removed (in case there is more than two of the same integer). If they aren't the same, then itereate to the second and so forth until you're left with unique elements. I choose not to do this way because I felt it would have been too complex for the task. For each element, after the first comparison, I would have to check with the array of removed elements which would have increased the number of operations.

__Edge Cases:__ TypeScript could have been to ensure that the arrays were an arrays of integers. Because JS is loosely typed, they could have been arrays of elements of different types. Also an additional check to see if the arrays were empty has the potential to speed up the function in cases that have and array of elements passed in with an empty array.

__Tests:__ I used the same tests listed in the challenge along with passing in...
1. ...two empty arrays.
2. ...arrays that were not in numerical order.
3. ...one empty array and one non-empty array.

### Deep Equality
__Time Complexity:__ O(2^n), This solution creates a fork every time there's a nested object as the value. Inside the solution, it recursively calls the calling function (or main function) within it's execution when it runs into a nested object. There is an evident best and worse case. Best case being if there are no objects as values (which might defeat the purpose of the problem), or just one object as the value, or having mismatch amount of keys. Worst case being if every value was an object (given that both objects were indeed equal).

__Spatial Complexity:__ O(n), We are dealing with arrays and objects and not numbers. The larger the objects (more keys) means more space being taken up. Also the deeper the objects go (nested objects), the more operations there will be. There's no way around it unless there is a match not found.

__Alternative Method:__ I added two methods in different files: deep-equality.js and deep-equality-2.js. While I was working on the first one, I discovered, as I was writing out my comments, that I was doing double the work--two different solutions to the same problem. I'd probably choose the latter solution as my favorite because of it's simplicity.

__Edge Cases:__ I address edge cases in the comments. There are areas where I am assuming ideal situations for the sake of time. For example, I assume that the keys and values of both objects will be in the same order so when I compare both objects, it's a one to one comparison. I don't search the arrays to find the element.

__Tests:__ I used the same tests listed with the addition of objects where...
1. ...each value is an object.
2. ...the all but one value in the first object isn't an object and all the values in the the second object are objects.
3. ...there's another level of depth where a value is an object whose value is an object.