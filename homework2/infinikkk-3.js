const group = ["tsar", "rat", "tar", "star", "tars", "cheese"];
const groupAnagrams = (group) => {
    const result = [];

    const compare = (w1,w2)=>{
        return [...w1].sort().toString() === [...w2].sort().toString();
    }
    const recursiveGrouping = (group) => {
        if (group.length === 0) return;
        const array = []
        if (group.length===1)
            result.push(group);
        else {
            for (let i = 0; i < group.length; i++) {
                if (compare(group[0], group[i])) {
                    array.push(group[i])
                }
            }
            const group1 = group.filter(value => !array.includes(value))
            result.push(array)
            if (group1.length > 0) recursiveGrouping(group1);
        }
    }
    recursiveGrouping(group);
    return result;
}
console.log(groupAnagrams(group))

