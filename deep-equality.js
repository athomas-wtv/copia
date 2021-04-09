const equals = (obj1, obj2) => {
    // Store keys and values of objects into arrays to use
    let firstObjKeys = Object.keys(obj1);
    let secObjKeys = Object.keys(obj2);
    
    let firstObjValues = Object.values(obj1);
    let secObjValues = Object.values(obj2);
    
    // Checking to see if the length of the arrays match. If they don't then
    // the function can terminate since it would be a giveaway that they didn't match
    let keyArrayLengthMatch = checkArrayLengthMatch(firstObjKeys, secObjKeys);
    let valueArrayLengthMatch = checkArrayLengthMatch(firstObjValues, secObjValues);
    
    if(!keyArrayLengthMatch || !valueArrayLengthMatch)
        return false;
    
    // Checking to see if the elements in these arrays (values array and keys array) match. If not,
    // then the objects don't match.
    let keysMatch = arraysMatch(firstObjKeys, secObjKeys);
    if(!keysMatch)
        return false;
        
    let valuesMatch = arraysMatch(firstObjValues, secObjValues);
    if(!valuesMatch)
        return false;
    
    return true;
}

const arraysMatch = (arr1, arr2) => {
    // Check to see if either array has an object
    let ojectFoundInArr1 = objectCheck(arr1);
    let ojectFoundInArr2 = objectCheck(arr2);
    
    // If they both have objects, then run logic to get both objects and 
    // compare them. More logic could be added to make this full proof
    // but for the sake of time, I'm assuming the both objects will be
    // in the same position in the array.
    if(ojectFoundInArr1 && ojectFoundInArr2)
    {
        // Get objects in both array.
        let objInArr1 = getObjectInArray(arr1);
        let objInArr2 = getObjectInArray(arr2);

        // Run them back through the main function to see if they equal. if not, then the arrays 
        // don't equal. If so, remove the object and continue with the execution. Keeping the object 
        // will run into problems later in the code. Since we already tested their equality,
        // there is no need for them the remain in the array. We just need to test the remaining elements
        if(!equals(objInArr1, objInArr2))
            return false;
        else
        {
            arr1 = arr1.filter(removeObjTypes);
            arr2 = arr2.filter(removeObjTypes);
        }
    }

    // Checking to see if the remaining elements match. Again, this assumes
    // that the array elements in both arrays will be in the same position (i.e. the same index). 
    // More logic can be added for the edge case of elements having different indexes with though the same value
    let match = arr1.every((el, idx, arr1) => { return arr1[idx] == arr2[idx] });
    return match;
}

// These are helper functions for the ES6 functions and to help with readability.
const objTypes = el => typeof el == "object";
const getObjectInArray = arr => { return arr.find(objTypes) }
const objectCheck = arr => { return arr.some(objTypes) }
const removeObjTypes = el => typeof el != "object";
const checkArrayLengthMatch = (arr1, arr2) => { return arr1.length == arr2.length }


// TEST CASES
console.log("Should be true", equals({"key2" : {"key3": 1} }, {"key2" : {"key3": 1} }));

console.log("Should be true", equals({"key1" : "value", "key2" : {"key3": 1}},
                                    {"key1" : "value", "key2" : {"key3": 1}}))

console.log("Should be false", equals({"key1" : "value1", "key2" : {"key3": 1}, "key4" : "value2"},
                    {"key1" : "value", "key2" : {"key3": 1}}))