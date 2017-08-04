// function Person(first, last, age, gender, interests) {
//     this.name = [first, last];
//     this.age = age;
//     this.gender = gender;
//     this.interests = interests;
//     this.bio = function () {
//         return this.name.join(" ") + " is " + this.age + " years old.  " +
//             "They like " + this.interests.join(" ");
//     };
//     this.greeting = function () {
//         return "Hi! I'm " + this.name.join(" ");
//     };
// }

/******************************************
 * A better way to write the above
 *****************************************/
function Person(first, last, age, gender, interests) {
    this.name = [first, last];
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

Person.prototype.bio = function () {
    return this.name.join(" ") + " is " + this.age + " years old.  " +
        "They like " + this.interests.join(" ");
};

Person.prototype.greeting = function () {
    return "Hi! I'm " + this.name.join(" ");
};