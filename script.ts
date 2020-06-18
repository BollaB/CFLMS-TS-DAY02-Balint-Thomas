class Person {
	fullName = "";
	age = "";
	jobTitle = "";
constructor(fullName, age, jobTitle) {
		this.fullName = fullName;
		this.age = age;
		this.jobTitle = jobTitle;
}
name() {
	return `${this.fullName} ${this.age} ${this.jobTitle}`;
}
whoAreYou() {
	return `Hello there, My name is ${this.fullName} I am ${this.age} years old, and I am a ${this.jobTitle}.`
}
}

let firstone = new Person("John Doe", 28, "developer");

console.log(firstone.whoAreYou());

class More extends Person {
	salary;
	jobLocation;

	constructor(fullName, age, jobTitle, salary, jobLocation) {
		super(fullName, age, jobTitle);
		this.salary = salary;
		this.jobLocation = jobLocation;
	}

	whoAreYou() {
		return `${super.whoAreYou()} my salary is ${this.salary} and I work in ${this.jobLocation}`;
	}
}

let secondone = new More ("Jane Doe", 27, "developer", 1500, "Vienna");

console.log(secondone.whoAreYou());