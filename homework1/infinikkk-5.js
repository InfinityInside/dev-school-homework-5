let input = "4 -9 17 -2 -4";
let array = input.split(' ');
array.forEach((value, index)=>array[index]=parseInt(value));

const maxAndMin = (array)=> {
    let max = array[0];
    let min = array[0];

    for (let i = 0; i < array.length - 1; i++) {
        if (max > array[i + 1]) continue;
        max = array[i + 1]
    }
    for (let i = 0; i < array.length - 1; i++) {
        if (min < array[i + 1]) continue;
        min = array[i + 1]
    }
    return `${max} ${min}`
}
console.log(maxAndMin(array))



