const volume = 441;

const findNb = (volume) => {
    let sum = 0;
    let n = 0;
    while (volume !== sum){
        sum+=n**3;
        n++;
        if (sum > volume) return -1;
    }
    return n-1;
};

console.log(findNb(volume));



