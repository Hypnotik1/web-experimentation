// function Teacher(subject) {
//     this.subject = subject;
//     this.greeting = function () {
//         return "Hello.  My name is " + this.name.join(" ") + ", and I teach " + this.subject;
//     };
// }

/******************************************
 * A better way to write the above
 *****************************************/

function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function () {
    alert("Hi!  I'm a teacher named " + this.name.join(" "));
};