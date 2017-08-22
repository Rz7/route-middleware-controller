export default class Cat {
    constructor() {
        this.name = "";
        this.age = 0;
        this.gender = "";
    }

    greeting() {
        return `Hi, my name is ${this.name}`;
    }
}