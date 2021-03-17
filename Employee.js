class Employee {
    constructor(id,firstName,lastName,salary){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.salary=salary;
    }
    getId(){
        return this.id;
    }
    getfirstName(){
        return this.firstName;
    }
    getlastName(){
        return this.lastName;
    }
    getName(){
        return this.firstName + this.lastName;
    }
    getSalary(){
        return this.salary;
    }
    getAnnualSalary(){
        return this.salary*12;
    }
    raiseSalary(){
        return this.salary*0.1+this.salary;
    }
}

let result = new Employee(1,'James','Nguyen',1000)
let id= result.getId();
console.log(id);