// For this question we want to show the deep equality of two hashmaps. To simpify the 
// problem, you can assume that each hash map always uses a string as a key and a map, number, 
// or string as a value. For the purpose of this problem, you can assume that any equals operator 
// for two hash maps is not enabled.

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
    
    // If the number of keys in one object doesn't match the number of keys in the other
    // then it follows that the objects don't match.
    if(!keyArrayLengthMatch || !valueArrayLengthMatch)
        return false;
    
    // Now that we know the arrays match up, the function can proceed with checking to see
    // if the objects match. Since we know that both objects have the same keys, we can
    // just pass in one set.
    let objectsMatch = objMatchTest(obj1, obj2, firstObjKeys);
    return objectsMatch;
    
}

const objMatchTest = (obj1, obj2, objKeys) => {
    // Looping through the list of keys to see if each value is the same for both objects.
    let match = objKeys.every(key => {
        // First checking to see if the value is an object. If not, then the function proceeds
        // with the comparsion. If not, perform a recusive-like call back to the calling function
        // to breakdown the objects and test for equality.
        if(typeof obj1[key] != "object" || typeof obj2[key] != "object")
            return obj1[key] == obj2[key];
        else
            return equals(obj1[key], obj2[key]);
    });

    return match;
}

// Check to see if the length of two arrays match. Doing this check in hopes to get
// an early answer so the equation can avoid more operations.
const checkArrayLengthMatch = (arr1, arr2) => { return arr1.length == arr2.length }

// TEST CASES
console.log("Should be true", equals({"key2" : {"key3": 1} }, {"key2" : {"key3": 1} }));

console.log("Should be true", equals({"key1" : "value", "key2" : {"key3": 1}},
                                    {"key1" : "value", "key2" : {"key3": 1}}))

console.log("Should be true", equals({"key1" : {"key2": 1}, "key3" : {"key4": 1}, "key5" : {"key6": 1}},
                                    {"key1" : {"key2": 1}, "key3" : {"key4": 1}, "key5" : {"key6": 1}}))

console.log("Should be true", equals({"key1" : {"key2": 1}, "key3" : {"key4": 1}, "key5" : {"key6": {"key7": 1}}},
                                    {"key1" : {"key2": 1}, "key3" : {"key4": 1}, "key5" : {"key6": {"key7": 1}}}))

console.log("Should be false", equals({"key1" : "value", "key3" : {"key4": 1}, "key5" : {"key6": 1}},
                                    {"key1" : {"key2": 1}, "key3" : {"key4": 1}, "key5" : {"key6": 1}}))

console.log("Should be false", equals({"key1" : "value1", "key2" : {"key3": 1}, "key4" : "value2"},
                    {"key1" : "value", "key2" : {"key3": 1}}))