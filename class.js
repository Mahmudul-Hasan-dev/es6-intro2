//class name first letter should be capital letter
class Instructor {
    name;
    id;
    kaj = 'web instructor';
    task = 'hw check';
    location;
    //constructor use to assign value to a variable
    //have to have as parameter to assign the value to that variable
    // we have to access to the variable of object by this.variable only then we can assign value to that variable
    //this.objProperty/variable=constructor parameter
    constructor(name, id, location) {
        this.name = name;
        this.id = id;
        this.location = location;
    }
    //like a function
    startsessionTime(time) {
        console.log(`start session at ${time}`);
    }
    createQuiz(mark) {
        console.log(`create quiz of ${mark}`);
    }
}
const amir = new Instructor();
console.log(amir);
amir.startsessionTime(9.00);
amir.createQuiz(60);

//have to pass variable value as parameter to set the value of property
//const newvariable= new className(parameter)
const sakib = new Instructor('sakib', 2, 'dhaka');
console.log(sakib);