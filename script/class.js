export class Person {
    constructor (name){
        this.name = name
    }
    sayHallo(name){
        console.info(`Hello ${name}, my name is ${this.name}`)
    }
}