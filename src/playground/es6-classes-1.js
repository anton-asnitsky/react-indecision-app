class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    };

    getGreeting(){
        return `Hi! I am ${ this.name }!`;
    };

    getDescription(){
        return `${ this.name } is ${ this.age } year(s) old.`;
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    };
    getDescription(){
        let dsecription = super.getDescription();

        if(this.hasMajor()){
            dsecription += ` Their major is ${ this.major }.`;
        }
        return dsecription;
    };
    hasMajor(){
        return !!this.major;
    };
};

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();

        if(this.hasHomeLocation()){
            greeting += ` I'm visiting from ${ this.homeLocation}.`;
        }
        return greeting;
    };
};

const me = new Traveler('Anton Asnitsky',42, 'Hadera');
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Student();
console.log(other.getGreeting());
console.log(other.getDescription());
console.log(other.hasMajor());