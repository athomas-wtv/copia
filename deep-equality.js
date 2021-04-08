const equals = (obj1, obj2) => {
    let firstObjKeys = Object.keys(obj1);
    let secObjKeys = Object.keys(obj2);

    let firstObjValues = Object.values(obj1);
    let secObjValues = Object.values(obj2);

    let keyArrayLengthMatch = checkArrayLengthMatch(firstObjKeys, secObjKeys);
    let valueArrayLengthMatch = checkArrayLengthMatch(firstObjValues, secObjValues);

    if(!keyArrayLengthMatch || !valueArrayLengthMatch)
        return false;

    let keysMatch = arraysMatch(firstObjKeys, secObjKeys);
    if(!keysMatch)
        return false;
        
    let valuesMatch = arraysMatch(firstObjValues, secObjValues);
    if(!valuesMatch)
        return false;

    firstObjKeys.forEach(key)
}

const checkArrayLengthMatch = (arr1, arr2) => { return arr1.length == arr2.length }

const arraysMatch = (arr1, arr2) => {
    let match = arr1.every((el, idx) => {
        if(typeof el != "Object" || typeof arr2[idx] != "Object")
            el == arr2[idx];
        else
        {
            let match = checkArrayLengthMatch(el, arr2);
            if(!match)
                return false;
            
            let keysMatch = arraysMatch(el, arr2)
        }
    });
    return match;
}
console.log(equals({"key1" : "value", "key2" : {"key3": 1}},
    {"key1" : "value", "key2" : {"key3": 1}}))

console.log(equals({"key1" : "value1", "key2" : {"key3": 1}, "key4" : "value2"},
    {"key1" : "value", "key2" : {"key3": 1}}))