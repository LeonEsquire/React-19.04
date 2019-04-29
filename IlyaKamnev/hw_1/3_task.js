class Human {
    constructor(name, age, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    displayInfo() {
        return {
            name: this.name, 
            age: this.age, 
            dateOfBirth: this.dateOfBirth,
        };
    }
}

class Employee extends Human {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth);
        this.salary = salary;
        this.department = department;
    }

    displayInfo() {
        return {
            ...super.displayInfo(),
            salary: this.salary,
            department: this.department,
        };
    }
}

class Developer extends Employee {
    constructor({...employee}) {
        super(employee.name, employee.age, employee.dateOfBirth, employee.salary, employee.department);
        this.manager;
    }

    setManager(manager) {
        this.manager = manager;
    }
}

class Manager extends Employee {
    constructor({...employee}) {
        super(employee.name, employee.age, employee.dateOfBirth, employee.salary, employee.department);
        this.developers = [];
    }

    addDeveloper(developer) {
		this.developers.push(developer);
    }
    
    removeDeveloper(developer) {
        this.developers.splice(this.developers.indexOf(developer), 1);
        developer.setManager(null);
    }
}

const employeeDev1 = new Employee('Max', 23, '20.04.19', 3500, 'DEF');
const employeeDev2 = new Employee('Alex', 27, '13.04.19', 3500, 'DEF');
const employeeDev3 = new Employee('Mari', 21, '10.03.19', 3500, 'DEF');

const employeeMan = new Employee('Ivan', 31, '20.01.17', 4000, 'DEF');

const developer1 = new Developer({...employeeDev1.displayInfo()});
const developer2 = new Developer({...employeeDev2.displayInfo()});
const developer3 = new Developer({...employeeDev3.displayInfo()});
developer1.setManager(employeeMan.name);
developer2.setManager(employeeMan.name);
developer3.setManager(employeeMan.name);

const manager = new Manager({...employeeMan.displayInfo()});
manager.addDeveloper(developer1);
manager.addDeveloper(developer2);
manager.addDeveloper(developer3);

manager.removeDeveloper(developer2);
console.log(manager);