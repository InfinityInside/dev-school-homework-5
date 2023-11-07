class Vector {
    params;
    constructor(arr) {
        this.params = arr;
    }
    toString(){
        return `(${this.params.toString()})`
    }
    equals(b){
        for (let i in this.params)
            if (this.params[i]!==b.params[i]) return false;
        return this.params.length === b.params.length
    }
    check(b){
        if (this.params.length !== b.params.length) throw new Error();
    }
    add(b, sign = 1){
        this.check(b);
        let params = [];
        for (let i in this.params)
            params.push(this.params[i]+sign*b.params[i]);
        return new Vector(params);
    }
    subtract(b){
        return this.add(b,-1);
    }
    dot(b){
        this.check(b);
        let dot = 0;
        for (let i in this.params)
            dot+= this.params[i]*b.params[i];
        return dot;
    }
    norm(){
        let norm = this.params.reduce((previous, cur)=> previous+=cur**2 , 0);
        return Math.sqrt(norm);
    }
}