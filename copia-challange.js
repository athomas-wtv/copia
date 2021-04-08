// For this question we want you to synchronize two lists. 
// Each list contains only integers. The goal of the problem 
// is to return the list of integers which are not contained in both lists.

const sync = (arr1, arr2) => {
    // Initialize an array to add the unique elements
    let uniqueElements = [];

    // Get both sets of unique elements
    let firstSet = findUniqueElements(arr1, arr2)
    let secondSet = findUniqueElements(arr2, arr1)

    // Checking each set to see if they contains elements because
    // I don't want to add a null element (e.g. [9,] ).
    if(firstSet.length > 0)
        uniqueElements.push(firstSet);

    if(secondSet.length > 0)
        uniqueElements.push(secondSet);

    return uniqueElements;
}

// This function returns unique elements that exist in one array (the first param)
// but not in another array (the second param).
const findUniqueElements = (arrToCheck, control) => {
    // Filtering the array to find unique elements and adding them
    // to the uniqueElems array.
    let uniqueElms = arrToCheck.filter(el => { return control.indexOf(el) == -1 })
    return uniqueElms;
}

const testCases = [
    [[1, 2, 3], [1, 3, 4]],
    [[3, 2, 1], [1, 5, 3, 4]],
    [[1, 9], [1]],
    [[1, 2, 3], [1, 2, 3]],
    [[1],[]],
    [[], [1,4,6,9]],
    [[],[]]
]

testCases.forEach(test => {
    let uniqueElms = sync(test[0], test[1]);
    console.log(`The unique elements in [${test[0]}] and [${test[1]}] are [${uniqueElms}]`);
})