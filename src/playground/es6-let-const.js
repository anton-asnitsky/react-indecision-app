var nameVar = 'Anton';
var nameVar = 'Bob';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet ', nameLet);

const nameConst = 'Frank';
console.log('nameConst ',nameConst);

function getPetName(){
    let petName = 'Zeus';
    return petName;
}

const petName = getPetName();
console.log(petName);


var fullName = 'Anton Asnitsky';
let firstName;
if(fullName ){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);