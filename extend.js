// common properties should be in another class which will be extends
class Teammember {
    name;
    id;
    location;
    //input giving by user should be in constructor
    constructor(name, id, location) {
        this.name = name;
        this.id = id;
        this.location = location;
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback`)
    }
}

//use extends to use the value of another class
//class name first letter should be capital letter
class Instructor extends Teammember {
    kaj = 'web instructor';
    task = 'hw check';
    //constructor use to assign value to a variable
    //have to have as parameter to assign the value to that variable
    // we have to access to the variable of object by this.variable only then we can assign value to that variable
    //this.objProperty/variable=constructor parameter
    constructor(name, id, location) {
        //to use extends class variable we have to use super keywords
        super(name, id, location);
    }
    //like a function
    startsessionTime(time) {
        console.log(`start session at ${time}`);
    }
    createQuiz(mark) {
        console.log(`create quiz of ${mark}`);
    }

}

//class name first letter should be capital letter
class Developer extends Teammember {
    kaj = 'web instructor';
    task = 'hw check';
    tech;
    //constructor use to assign value to a variable
    //have to have as parameter to assign the value to that variable
    // we have to access to the variable of object by this.variable only then we can assign value to that variable
    //this.objProperty/variable=constructor parameter
    constructor(name, id, location, tech) {
        super(name, id, location);
        this.tech = tech;
    }
    //like a function
    developfeature(feature) {
        console.log(`please develop the feature at ${feature}`);
    }
    realeseVersion(version) {
        console.log(`create version realese of ${version}`);
    }
}

//class name first letter should be capital letter
class JobPlacement extends Teammember {
    kaj = 'job place kora';
    task = 'hw check';
    //constructor use to assign value to a variable
    //have to have as parameter to assign the value to that variable
    // we have to access to the variable of object by this.variable only then we can assign value to that variable
    //this.objProperty/variable=constructor parameter
    constructor(name, id, location) {
        super(name, id, location)
    }
    //like a function
    checkCv(feature) {
        console.log(`please develop the feature at ${feature}`);
    }
    selectCv(version) {
        console.log(`create version realese of ${version}`);
    }
}

const alia = new Instructor('alia', 4, 'kaliakoir');
console.log(alia);
alia.provideFeedback();

const nahid = new Developer('nahid', 1, 'kaliakoir', 'senior web dev and security analyst');
console.log(nahid);
nahid.provideFeedback();