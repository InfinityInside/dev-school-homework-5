let array = [20,10,-80,10,10,15,35];

const findEvenIndex = (array) => {
    let rightIndex;
    for (let i = 0; i<array.length; i++){
        let leftSum = array.slice(0, i).reduce((sum, current)=> sum+=current, 0);
        let rightSum = array.slice(i+1).reduce((sum, current)=> sum+=current, 0);
        if (leftSum===rightSum) {rightIndex = i; break}
        else rightIndex = -1
    }
    return rightIndex;
}
console.log(findIndex(array))