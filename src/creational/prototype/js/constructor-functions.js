function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

const personPrototype = {
  firstName: 'nome',
  lastName: 'sobrenome',

  fullName() {
    return `${this.firstName} ${this.lastName}`
  },
}

Person.prototype = Object.create(personPrototype)

const person1 = new Person('alfredo', 'alves')
console.log(person1.fullName())
