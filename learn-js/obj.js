const car = { type: "flat", model: "500", color: "white" };
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

const person2 = {
  firstName: "John",
  lastName: "Doe",
  id: 5556,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
