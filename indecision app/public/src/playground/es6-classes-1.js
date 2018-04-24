
class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        //console.log('Hello ' + this.name)
        return `Hi, I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if (this.hasMajor()) {
            description = description + ` Their major is ${this.major}`;
        }

        return description;

    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.location = homeLocation;
    }
    hasLocation(){
        return !!this.location;
    }
    getDescription(){
        let description = super.getDescription();

        if(this.hasLocation()){
           return description += `. I am visiting from ${this.location}`;
        } 
        return description;
    }
}


const me = new Traveler('Tam Nguyen', 30, 'Alabama');
console.log(me.getDescription());

const rando = new Traveler('Renee', 29);
console.log(rando.getDescription());