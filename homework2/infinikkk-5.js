const obj= {
    "abc": [15],
    "r1n": {
        "mkg": {
            "zma": [21, 45, 66, 111],
            "mii": {
                "ltf": [2, 5, 3, 9, 21]
            },
            "fv": [1, 3, 6, 9]
        },
        "rmk": {
            "amr": [50, 50, 100, 150, 250]
        }
    },
    "fik": {
        "er": [592, 92, 32, 13],
        "gp": [12, 34, 116, 29]
    }
}
const getRootProperty = (obj, toFind, rootKey = null) => {
    if (Array.isArray(obj)){
        if (obj.includes(toFind))
            return rootKey;
    } else
        for (const key in obj) {
            const result = getRootProperty(obj[key], toFind, rootKey || key);
            if (result) return result
        }
    return null;
}

console.log(getRootProperty(obj, 13))