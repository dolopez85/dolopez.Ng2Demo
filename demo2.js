"use strict";
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    ;
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
}
class Student extends Person {
    constructor(name, age, mark) {
        super(name, age);
        this._mark = mark;
    }
    get mark() {
        return this._mark;
    }
    set mark(mark) {
        this._mark = mark;
    }
}
//let student = new Person("Luis", 25);
//let student = new Student("Luis", 25);
let student = new Student("Luis", 25, 10);
console.log(student.age);
student.age = 34;
console.log(student.age);
//# sourceMappingURL=test2.js.map