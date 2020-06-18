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
$(document).ready(function () {
    var vehicle = /** @class */ (function () {
        function vehicle(year, HP, brand) {
            this.year = "";
            this.HP = "";
            this.brand = "";
            this.year = year;
            this.HP = HP;
            this.brand = brand;
        }
        return vehicle;
    }());
    var cars = /** @class */ (function (_super) {
        __extends(cars, _super);
        function cars(year, HP, brand, seats, color, kilometers) {
            var _this = _super.call(this, year, HP, brand) || this;
            _this.seats = seats;
            _this.color = color;
            _this.kilometers = kilometers;
            return _this;
        }
        cars.prototype.price = function () {
            return map.get(this.brand) * (this.HP / 100) * (10000 / this.kilometers) * (10 / (2020 - this.year));
        };
        return cars;
    }(vehicle));
    var bikes = /** @class */ (function (_super) {
        __extends(bikes, _super);
        function bikes(year, HP, brand, type, color, kilometers) {
            var _this = _super.call(this, year, HP, brand) || this;
            _this.type = type;
            _this.color = color;
            _this.kilometers = kilometers;
            return _this;
        }
        bikes.prototype.price = function () {
            return map.get(this.brand) * (this.HP / 20) * (10000 / this.kilometers) * (10 / 2020 - this.year) * biketype.get(this.type);
        };
        return bikes;
    }(vehicle));
    var trucks = /** @class */ (function (_super) {
        __extends(trucks, _super);
        function trucks(year, HP, brand, color, kilometers) {
            var _this = _super.call(this, year, HP, brand) || this;
            _this.color = color;
            _this.kilometers = kilometers;
            return _this;
        }
        trucks.prototype.price = function () {
            return map.get(this.brand) * (this.HP / 200) * (10000 / this.kilometers) * (10 / 2020 - this.year);
        };
        return trucks;
    }(vehicle));
    var map = new Map()
        .set("Mercedes", 50000)
        .set("VW", 30000)
        .set("Honda", 40000)
        .set("Toyota", 40000)
        .set("Porsche", 60000);
    var brands = {
        "Mercedes": 50000,
        "VW": 30000,
        "Honda": 40000,
        "Toyota": 40000,
        "Porsche": 60000
    };
    var biketype = {
        "Chopper": 1.5,
        "Race": 1
    };
    var car1 = new cars(1995, 105, "VW", 5, "blue", 200000);
    for (var val1 in brands) {
        $("#brand").append("<option value=" + val1 + ">" + val1 + "</option>");
    }
    for (var val2 in biketype) {
        $("#type").append("<option value=" + val2 + ">" + val2 + "</option>");
    }
    $("#carbutton").on("click", function () {
        $(".cars").show();
    });
    $("#bikebutton").on("click", function () {
        $(".bikes").show();
    });
    $("#truckbutton").on("click", function () {
        $(".trucks").show();
    });
    $("#carcalc").on("click", function () {
        year = document.getElementById("year").value;
        HP = document.getElementById("HP").value;
        brand = document.getElementById("brand").value;
        seats = document.getElementById("seats").value;
        color = document.getElementById("color").value;
        kilometers = document.getElementById("kilometers").value;
        var car = new cars(year, HP, brand, seats, color, kilometers);
        console.log(car.price());
    });
    $("#bikecalc").on("click", function () {
        year = document.getElementById("year").value;
        HP = document.getElementById("HP").value;
        brand = document.getElementById("brand").value;
        type = document.getElementById("type").value;
        color = document.getElementById("color").value;
        kilometers = document.getElementById("kilometers").value;
        var bike = new bikes(year, HP, brand, type, color, kilometers);
        console.log(bike.price());
    });
    $("#truckcalc").on("click", function () {
        year = document.getElementById("year").value;
        HP = document.getElementById("HP").value;
        brand = document.getElementById("brand").value;
        color = document.getElementById("color").value;
        kilometers = document.getElementById("kilometers").value;
        var truck = new trucks(year, HP, brand, color, kilometers);
        console.log(truck.price());
    });
});
