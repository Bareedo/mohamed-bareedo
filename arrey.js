//Arrey Destructing

const fruits = ["Apple" , "Banana" , "Orange"];

// const first = fruits[0];
// const second = fruits[1];
// const thirt = fruits[2];

const [first , second , thirt] = fruits


console.log(first);
console.log(second);
console.log(thirt);

// object Destructing

const person = {
    firstName: "Mohamed",
    lastName: "Bareedo",
    age: 37,
}

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person['age'];

const {firstName,  lastName, age} =person;

console.log(firstName, lastName, age);

