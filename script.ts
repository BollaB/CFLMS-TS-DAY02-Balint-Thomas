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