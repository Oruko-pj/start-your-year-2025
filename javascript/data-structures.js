const x = [1, 2]; // an array
const y = {
  key: "pair",
  date: new Date(),
  generateDate() {
    this.date = new Date();
  },
}; // a key-value pair or a dictionary or object

console.log(x, typeof x);
console.log(y, typeof y);
y.generateDate();
console.log(y);


let person = {};
person.age = 20;
person.name = {};
person.name.first = "Dave";
person.name.last = "Oruko";
person.name.updateFirstName = function (x) {
  this.first = x;
};
console.log(person);
person.name.updateFirstName("David");
console.log(person);