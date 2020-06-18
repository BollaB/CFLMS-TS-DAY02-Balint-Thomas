var Person = /** @class */ (function () {
    function Person(fullName, age, jobTitle) {
        this.fullName = "";
        this.age = "";
        this.jobTitle = "";
        this.fullName = fullName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.name = function () {
        return this.fullName + " " + this.age + " " + this.jobTitle;
    };
    Person.prototype.whoAreYou = function () {
        return "Hello there, My name is " + this.fullName + " I am " + this.age + " years old, and I am a " + this.jobTitle + ".";
    };
    return Person;
}());
var firstone = new Person("John Doe", 28, "developer");
console.log(firstone.whoAreYou());
