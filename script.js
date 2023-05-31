// завдання 1

class Circle {
    constructor (x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    };

    circleLength() {
        return 2 * Math.PI * this.r;
    };

    static circleLengthByRadius(r) {
        return 2 * Math.PI * r;
    };

    copyCircle() {
        return new Circle(this.x, this.y, this.r);
    };

    static getCircle(x, y, r) {
        return new Circle(x, y, r);
    };

    isPointInside(pointX, pointY) {
        const location = Math.sqrt((pointX - this.x) ** 2 + (pointY - this.y) ** 2);
        return location <= this.r;
    };

    toString() {
        return `Circle with center (${this.x}, ${this.y}) and radius ${this.r}`;
    };
};

let circle = new Circle (1, 5, 5);

console.log(circle.circleLength());

let circleRadius = Circle.circleLengthByRadius(3);
console.log(circleRadius);

console.log(circle.copyCircle());

let newCircle = Circle.getCircle(0, 0, 8);
console.log(newCircle);

console.log(circle.isPointInside(3, 4));

console.log(circle.toString());

// завдання 2

let mentor = {
    course: 'JS',
    duration: 3,
    direction: 'web-development',
};

function propsCount(currentObject) {
    return Object.keys(currentObject).length;
};

console.log(propsCount(mentor));

// завдання 3

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    };

    showFullName() {
        console.log(`${this.name} ${this.surname}`);
    };
};

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    };

    showFullName(midleName) {
        return `${this.name} ${this.surname} ${midleName}`;
    };

    showCourse() {
        let date = new Date();
        let currentYear = date.getFullYear();

        return currentYear - this.year;
    };
};

const student = new Student('Petro', 'Petrenko', 2020);

console.log(student.showFullName('Petrovych'));
console.log('current course: ' + student.showCourse());

// завдання 4

class Marker {
    constructor (color, linkAmount) {
        this.color = color;
        this.linkAmount = linkAmount;
    };

    print(str) {
        let printedStr = '';
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== ' ' && this.linkAmount > 0) {
                printedStr += str[i];
                this.linkAmount -= 0.5;
            };
        };
        return printedStr;
    };
};

let marker = new Marker('blue', 5);

console.log(marker.print('yhjbnojopkpij'));

class RefillableMarker extends Marker {
    constructor(color, linkAmount) {
        super(color, linkAmount);
    };

    setLink(value) {
        if (value.length < 0) {
            alert("Link amount is too short");
            return;
        };
        this.linkAmount = value;
    };
};

let refillableMarker = new RefillableMarker('red', 9) ;

console.log(refillableMarker.print('gybihbujhygbhoiji'));
refillableMarker.setLink(18);
console.log(refillableMarker.print('ffuyghjmjikmjuhtftgjnjijiuh'));

// завдання 5

class Worker {
    constructor (fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    };

    showSalary() {
        let salary = this.dayRate * this.workingDays;
        return `${this.fullName} salary: ${salary}`;
    };

    #experience = 1.2;

    showSalaryWithExperience() {
        let salaryWithExperience = this.dayRate * this.workingDays * this.#experience;
        return `${this.fullName} salary: ${salaryWithExperience}`;
    };

    get experiense() {
        return this.#experience;
    };

    set experiense(value) {
        if (value < 0) throw new Error('Negative meaning');
        this.#experience = value;
    };
    
};

let worker1 = new Worker("John Johnson", 20, 23); 

console.log(worker1.fullName); 
console.log(worker1.showSalary());; 
console.log("New experience: " + worker1.experiense); 
console.log(worker1.showSalaryWithExperience());
worker1.experiense = 1.5;
console.log("New experience: " + worker1.experiense);
console.log(worker1.showSalaryWithExperience());

let worker2 = new Worker("Tom Tomson", 48, 22);

console.log(worker2.fullName); 
console.log(worker2.showSalary());; 
console.log("New experience: " + worker2.experiense); 
console.log(worker2.showSalaryWithExperience());
worker2.experiense = 1.5;
console.log("New experience: " + worker2.experiense);
console.log(worker2.showSalaryWithExperience());

let worker3 = new Worker("Kolya Biruk", 2, 27);

console.log(worker3.fullName); 
console.log(worker3.showSalary());; 
console.log("New experience: " + worker3.experiense); 
console.log(worker3.showSalaryWithExperience());
worker3.experiense = 1.3;
console.log("New experience: " + worker3.experiense);
console.log(worker3.showSalaryWithExperience());

const workers = [worker1, worker2, worker3];

console.log('Sorted salary:');

workers.sort((a, b) => a.experiense - b.experiense).map(worker => {
    console.log(`${worker.fullName}: ${worker.dayRate * worker.workingDays}`)});