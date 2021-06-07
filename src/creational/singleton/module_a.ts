import { MyDatabase } from './db/my-database'

const myDatabase = MyDatabase.instance

myDatabase.add({ name: 'Luiz', age: 30 })
myDatabase.add({ name: 'Maria', age: 50 })
myDatabase.add({ name: 'Eduardo', age: 25 })

export { myDatabase }
