const island = [
    'XOOO',
    'XOXO',
    'XOXO',
    'OOXX',
    'OOOO']

const landPerimeter = (island) => {
    let perimeter = 0;
    const calcX = (island, i, j)=>{
        let X = 4;
        if (j>0 && island[i][j-1]==='X') X--
        if (i>0 && island[i-1][j]==='X') X--
        if (j<island[i].length-1 && island[i][j+1]==='X') X--
        if (i<island.length-1 && island[i+1][j]==='X') X--
        return X;
    }
    for (let i = 0; i<island.length; i++){
        for (let j = 0;j<island[i].length; j++){
            if (island[i][j]==="X") perimeter+=calcX(island,i,j)
        }
    }
    return "Total land perimeter: " +perimeter;
}
console.log(landPerimeter(island))