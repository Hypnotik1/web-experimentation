function Employee() {
    this.name = "";
    this.dept = "general";
}

Employee.prototype.specialty = "none";
//
// function Manager() {
//     Employee.call(this);
//     this.reports = [];
// }
//
// Manager.prototype = Object.create(Employee.prototype);
//
// function WorkerBee() {
//     Employee.call(this);
//     this.projects = [];
// }
//
// WorkerBee.prototype = Object.create(Employee.prototype);
//
// function SalesPerson() {
//     WorkerBee.call(this);
//     this.dept = "sales";
//     this.machine = "";
// }
//
// SalesPerson.prototype = Object.create(WorkerBee.prototype);
//
// function Engineer() {
//     WorkerBee.call(this);
//     this.dept = "engineering";
//     this.machine = "";
// }
//
// Engineer.prototype = Object.create(WorkerBee.prototype);

console.log();
console.log();
console.log();
console.log();
console.log();

function WorkerBee(projs) {
    this.projects = projs || [];
}

WorkerBee.prototype = new Employee;