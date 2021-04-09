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
    
    // Checking to see if the elements in these arrays match. If not,
    // then the objects don't match.
    let keysMatch = arraysMatch(firstObjKeys, secObjKeys);
    if(!keysMatch)
        return false;
    
    let valuesMatch = arraysMatch(firstObjValues, secObjValues);
    if(!valuesMatch)
        return false;
    
    let objectsMatch = objMatchTest(obj1, firstObjKeys, obj2);
    return objectsMatch;
    
}

const checkArrayLengthMatch = (arr1, arr2) => { return arr1.length == arr2.length }

const objMatchTest = (obj1, obj1Keys, obj2) => {
    let match = obj1Keys.every(key => {
        if(typeof obj1[key] != "object" || typeof obj2[key] != "object")
            return obj1[key] == obj2[key];
        else
            return equals(obj1[key], obj2[key]);
    });
    return match;
}

const arraysMatch = (arr1, arr2) => {
    // These two lines here is where I stopped
    let ojectFoundInArr1 = objectCheck(arr1);
    let ojectFoundInArr2 = objectCheck(arr2);
    //////////////////////////////////////////
    
    if(ojectFoundInArr1 && ojectFoundInArr2)
    {
        let objInArr1 = getObjectInArray(arr1);
        let objInArr2 = getObjectInArray(arr2);
        if(!equals(objInArr1, objInArr2))
            return false;
        else
        {
            arr1 = arr1.filter(el => typeof el != "object");
            arr2 = arr2.filter(el => typeof el != "object");
        }
    }

    // This assumes that the array elements in both arrays will be in
    // the same position (i.e. the same index). More logic can be added
    // for the edge case of elements having different indexes with though the same value
    let match = arr1.every((el, idx, arr1) => { 
        return arr1[idx] == arr2[idx];
    });
    return match;
}

const getObjectInArray = (arr) => { return arr.find(el => typeof el == "object")}

const objectCheck = (arr) => { return arr.some(el => typeof el == "object") }

console.log("should be true".toUpperCase(), equals({"key2" : {"key3": 1} }, {"key2" : {"key3": 1} }));

console.log("should be true".toUpperCase(), equals({"key1" : "value", "key2" : {"key3": 1}},
                                    {"key1" : "value", "key2" : {"key3": 1}}))

console.log("SHOULD BE FALSE", equals({"key1" : "value1", "key2" : {"key3": 1}, "key4" : "value2"},
                    {"key1" : "value", "key2" : {"key3": 1}}))