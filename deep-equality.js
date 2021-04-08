const equals = (obj1, obj2) => {
    
    let firstObjKeys = Object.keys(obj1);
    let secObjKeys = Object.keys(obj2);

    let firstObjValues = Object.values(obj1);
    let secObjValues = Object.values(obj2);

    let keyArrayLengthMatch = checkArrayLengthMatch(firstObjKeys, secObjKeys);
    let valueArrayLengthMatch = checkArrayLengthMatch(firstObjValues, secObjValues);

    console.log(1);
    if(!keyArrayLengthMatch || !valueArrayLengthMatch)
    return false;
    
    console.log(2);
    let keysMatch = arraysMatch(firstObjKeys, secObjKeys);
    if(!keysMatch)
        return false;
    
    console.log(3);
    console.log(firstObjValues);
    console.log(secObjValues);
    let valuesMatch = arraysMatch(firstObjValues, secObjValues);
    console.log("3.5", valuesMatch);
    if(!valuesMatch)
        return false;
    
    console.log(4);
    let objectsMatch = objMatchTest(obj1, firstObjKeys, obj2);
    return objectsMatch;
    
}

const checkArrayLengthMatch = (arr1, arr2) => { return arr1.length == arr2.length }

const objMatchTest = (obj1, obj1Keys, obj2) => {
    let match = obj1Keys.every(key => {
        if(typeof obj1[key] != "Object" || typeof obj2[key] != "Object")
            obj1[key] == obj2[key];
        else
            equals(obj1[key], obj2[key]);
    });
    return match;
}

const arraysMatch = (arr1, arr2) => {
    // These two lines here is where I stopped
    let ojectFoundInArr1 = objectCheck(arr1);
    let ojectFoundInArr2 = objectCheck(arr2);
    //////////////////////////////////////////
    
    // This assumes that the array elements in both arrays will be in
    // the same position (i.e. the same index). More logic can be added
    // for the edge case of elements having different indexes with though the same value
    let match = arr1.every((el, idx, arr1) => {
        return arr1[idx] == arr2[idx];
    });

    return match;
}

const objectCheck = (arr) => { return arr.some(el => typeof el == "Object") }

console.log("should be true", equals({"key1" : "value", "key2" : {"key3": 1}},
                                    {"key1" : "value", "key2" : {"key3": 1}}))

// console.log(equals({"key1" : "value1", "key2" : {"key3": 1}, "key4" : "value2"},
//     {"key1" : "value", "key2" : {"key3": 1}}))