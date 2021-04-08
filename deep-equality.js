const equals = (obj1, obj2) => {
    let matchlenght = CheckKeyAndValueLengthMatch(obj1, obj2);
    let firstObjKeys = Object.keys(obj1);
    let secObjKeys = Object.keys(obj2);

    if(firstObjKeys.length != secObjKeys.length)
        return false;

    let firstObjValues = Object.values(obj1);
    let secObjValues = Object.values(obj2);

    if(firstObjValues != secObjValues)
        return false;

    let keysMatch = arraysMatch(firstObjKeys, secObjKeys);
    if(!keysMatch)
    return false;
    
    let valuesMatch = arraysMatch(firstObjKeys, secObjKeys);
    firstObjKeys.forEach(key)
}

const arraysMatch = (arr1, arr2) => {
    let match = arr1.every((el, idx) => el == arr2[idx]);
    return match;
}
console.log(equals({"key1" : "value", "key2" : {"key3": 1}},
    {"key1" : "value", "key2" : {"key3": 1}}))

console.log(equals({"key1" : "value1", "key2" : {"key3": 1}, "key4" : "value2"},
    {"key1" : "value", "key2" : {"key3": 1}}))