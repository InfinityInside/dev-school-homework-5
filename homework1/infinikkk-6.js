let num = 145263;
let input = num.toString().split("");
let output = ``;
const max = (array)=> {
    let max = array[0];
    for (let i = 0; i < array.length - 1; i++) {
        if (max > array[i + 1]) continue;
        max = array[i + 1]
    }
    return max
}
const format = () => {
    while (output.length != input.length) {

        let cur = max(input);
        output += cur;
        for (let i = 0; i < input.length; i++)
        {
            if (input[i]==cur){
                input[i]=0;
                break;
            }
        }
    }
}
format();
console.log(output)
console.log(input)
