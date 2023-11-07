const num = 12;

const sumBelowNum = (num) =>{
    if (num < 0) return 0;
    let sum = 0;
    for (let i = 0; i < num; i++){
        if (i%3==0 || i%5==0) sum+=i;
    };
    return sum;
}
console.log(sumBelowNum(num))
