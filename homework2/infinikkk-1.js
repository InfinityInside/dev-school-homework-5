let group = [5,7,1,2,8,0,13,17];
let day = 2;

const sumHonor = (group, toChoose) =>{
    let sumToReturn = 0;

    for (let i = 0; i < group.length; i++){
        let sum = 0;
        let chosen = 0;
        for (let j = i; j <= group.length; j+=(group.length/toChoose)){
            if(j>group.length || chosen+1 > toChoose)break;
            sum+=group[j];
            chosen++;
        }
        if (i===0) sumToReturn = sum;
        if(sum > sumToReturn && chosen===toChoose) sumToReturn = sum;
    }
    return sumToReturn;
};

console.log(sumHonor(group,day));

