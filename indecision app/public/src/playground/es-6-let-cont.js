var nameVar = 'Andrew'
console.log('nameVar', nameVar);



const multiplier = {
    numbers: [1,2,3,4,5],
    multiplyBy: 5,
    multiply(){
        return this.numbers.map((num) => this.multiplyBy * num);
    }
}

console.log(multiplier.multiply());