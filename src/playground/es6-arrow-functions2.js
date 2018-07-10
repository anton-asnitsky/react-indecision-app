const add = (a, b) => {
    return a + b;
}
console.log(add(3,4));

const user = {
    name: 'Anton',
    cities: [
        'Nahariya',
        'Carmiel',
        'Hadera'
    ],
    printPalcesLived(){
        return  this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPalcesLived());

const multiplier = {
    numbers: [0,1,2,3,4,5,6,7,8,9],
    multiplyBy(numberToMultiplyBy){
        return this.numbers.map((number) => number * numberToMultiplyBy);
    },
    multiply(){
        return this.numbers.map((number) => this.multiplyBy(number))
    }
};

console.log(multiplier.multiply());