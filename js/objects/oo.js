function createNewPerson(name) {
    const obj = {};
    obj.name = name;
    obj.greeting = function () {
        alert('Hi! I\'m ' + this.name + '.');
    };
    return obj;
}

const salva = createNewPerson('Salva');
salva.name;
salva.greeting();

// Other ways to create object instances

// The Object() constructor
let newObject = new Object();
newObject.name = 'test';
newObject['age'] = 38;
newObject.greeting = function () {
    alert("ok");
};

let newObject2 = new Object({
    name: "Test",
    age: 38,
    greeting: function () {
        alert("ok");
    }
});

// Using the create() method
let newObject3 = Object.create(newObject2);