const is_prime = (num) =>{
    num = Math.round(num)
    if (num<=1) return false;
    if (num < 6  && num !== 4) return true
    else
        return !(num % 2 === 0 || num % 3 === 0 || num % 5 === 0)

}
console.log(is_prime(5))