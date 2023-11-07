function VigenèreCipher(key, abc) {
    this.encode = function (str, sign = 1) {
        let nstr = '';
        for (let c in str){
            let char = str[c];
            if (abc.includes(char)) {
                let encoder = key[c % key.length];
                let shift = abc.indexOf(encoder);
                let newindex = abc.indexOf(str[c]) + sign*shift;
                char = abc.at(newindex % abc.length);
            }
            nstr+=char;
        }
        return nstr;
    };
    this.decode = function (str) {
        return this.encode(str, -1)
    };
}