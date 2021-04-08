// For this question we want you to synchronize two lists. 
// Each list contains only integers. The goal of the problem 
// is to return the list of integers which are not contained in both lists.

const sync = (arr1, arr2) => {
    let uniqueElements = [];
    let firstSet = findUniqueElements(arr1, arr2)
    let secondSet = findUniqueElements(arr2, arr1)
    
    if(firstSet.length > 0)
        uniqueElements.push(firstSet);

    if(secondSet.length > 0)
        uniqueElements.push(secondSet);

    return uniqueElements;
}

const findUniqueElements = (arrToCheck, control) => {
    let uniqueElms = [];

    arrToCheck.forEach(el => {
        if(control.indexOf(el) == -1)
            uniqueElms.push(el);
    })

    return uniqueElms;
}

const testCases = [
    [[1, 2, 3], [1, 3, 4]],
    [[1, 9], [1]],
    [[1, 2, 3], [1, 2, 3]]
]

testCases.forEach(test => {
    let uniqueElms = sync(test[0], test[1]);
    console.log(`The unique elements in [${test[0]}] and [${test[1]}] are [${uniqueElms}]`);
})
// console.log(sync([1, 2, 3], [1, 3, 4]));i