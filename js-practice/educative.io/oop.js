//creating an object named employee
var employee = {
  firstName: 'Joe',
  lastName: 'Adams',
  age: 23,
  sex: 'male',
  designation: 'chef'
};


var product = {
  name: 'Cheese',
  price: 20,
  amount: 10,
  madeIn: 'USA'
};

function set(property, value, obj) {
  for (let x in obj) {
    if (x == property) {
      obj[property] = value;
    }
  }
}

set("name", "lmao", product);

console.log(product);