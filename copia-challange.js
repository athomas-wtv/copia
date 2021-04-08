// For this question we want you to synchronize two lists. 
// Each list contains only integers. The goal of the problem 
// is to return the list of integers which are not contained in both lists.

const sync = (arr1, arr2) => {
    const uniqueElements = [];
    
    uniqueElements.push(findUniqueElements(arr1, arr2));
    uniqueElements.push(findUniqueElements(arr2, arr1));
    
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

