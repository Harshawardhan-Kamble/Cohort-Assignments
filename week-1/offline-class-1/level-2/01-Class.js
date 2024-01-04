
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

let dog= new Animal("Alphi",4)
console.log(dog)
const bio= dog.describe()
console.log(bio)