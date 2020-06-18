var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var More = /** @class */ (function (_super) {
    __extends(More, _super);
    function More(fullName, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, fullName, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    More.prototype.whoAreYou = function () {
        return _super.prototype.whoAreYou.call(this) + " my salary is " + this.salary + " and I work in " + this.jobLocation;
    };
    return More;
}(Person));
var secondone = new More("Jane Doe", 27, "developer", 1500, "Vienna");
console.log(secondone.whoAreYou());
