let person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing"]);
console.log(person1);

// First checks to see if person1 has bio()
// person1.bio = function () {
//     return "I'm overriding the bio() function from the constructor.";
// };
// Then checks if person1 object's prototype object (Person) has a bio()
// If I comment out the bio() function above, the bio() function defined in the Person constructor will be used

// Then checks if Person() constructor's prototype object (Object) has bio()
// If I comment out the above bio() and the one in the constructor, it won't find one because Object does not have a bio function

let teacher1 = new Teacher("Ted", "LaRue", "45", "male", ["breaking code"], "Math");

/**
 * Revisiting Object.create();
 */
let person2 = Object.create(person1);
// person2.__proto__ = person1

/**
 * The Constructor Property
 */
let person3 = new person1.constructor("first", "last", "age", "gender", []);