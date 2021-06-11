const personPrototype = {
  firstName: 'nome',
  lastName: 'sobrenome',

  fullName() {
    return `${this.firstName} ${this.lastName}`
  },
}

const anotherPeson = Object.create(personPrototype)

anotherPeson.firstName = 'outroNome'
console.log(anotherPeson)
console.log(anotherPeson.fullName())
