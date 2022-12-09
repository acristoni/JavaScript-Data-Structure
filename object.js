const person = {
    firstName: 'Adonai',
    age: 30,
    hobbies: ['Music', 'Cooking'],
    greet () {
        console.log('Hi, I am ' + this.firstName)
    }
}

console.log(age in person)

function foo() {
    console
}

//GET VALUE BY KEY
// console.log(person['firstName'])
// console.log(person.firstName)

//ADD NEW VALUE AND KEY
person.lastName = 'Cristoni'
// console.log(person)

//DELETE VALUE
delete person.hobbies
// console.log(person)

//access method in a object
// person.greet()