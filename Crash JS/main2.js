// const fruit = ['apples', 'oranges', 'pears']

// // fruit[3] = 'grapes'

// fruit.push('mango') //add to the array at the end

// fruit.unshift("pineapples")  // add to the array at the beginning

// fruit.pop() // remove last object

// console.log(Array.isArray(fruit)) // Check if its an array

// console.log(fruit)


// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// // console.log(person.hobbies[0])
// // const { firstName, lastName, address: {city} } = person

// // console.log(firstName, city)

// person.email = 'john.email'
// console.log(person)


// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with Boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'dentist appt',
//         isCompleted: false
//     },
// ]

// console.log(todos[1].text)

// COnvert to JSON
// const todoJSON = JSON.stringify(todos)

// console.log(todoJSON)

// For loop

// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
    
// }

// for (let todo of todos){
//     console.log(todo.text)
// }

// While loop

// let i = 0;
// while (i < 10){
//     console.log(i)
//     i++
// }


// forEach, map, filter

// todos.forEach(function(todo){
//     console.log(todo.text)
// })

// const todoText = todos.map(function(todo){
//     return todo.text
// })
// console.log(todoText)

// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true
// }).map(function(todo){
//     return todo.text
// })

// console.log(todoCompleted)

// const x = 10;
//                 //if x> 10 set to red else set to blue
// const color = x > 10 ? 'red' : "blue"

// console.log(color)

// const addNum = (x, y) => {
//     return x + y
// }

//Contructor function
// function Person (firstName, lastName, dob){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.dob = new Date(dob)
// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear()
// }
// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`
// }


// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.dob = new Date(dob)
//     }
//     getBirthYear() {
//         return this.dob.getFullYear()
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// //Instantiate the object
// const person1 = new Person('John', 'Doe', '4/4/1990')

// console.log(person1.dob.getFullYear())
// console.log(person1.getBirthYear())
// console.log(person1.getFullName())


