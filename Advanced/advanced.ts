

$( document ).ready(function(){

class vehicle {
	year: number="";
	HP: number="";
	brand: string="";
	constructor(year, HP, brand){
		this.year = year;
		this.HP = HP;
		this.brand = brand;
	}
}

class cars extends vehicle {
	seats: number;
	color: string;
	kilometers: number;
	constructor(year, HP, brand, seats, color, kilometers){
		super(year, HP, brand);
		this.seats = seats;
		this.color = color;
		this.kilometers = kilometers;
	}
	price () {
		return map.get(this.brand)*(this.HP/100)*(10000/this.kilometers)*(10/(2020-this.year))
	}
}

class bikes extends vehicle {
	type: string;
	color: string;
	kilometers: number;
	constructor(year, HP, brand, type, color, kilometers){
		super(year, HP, brand);
		this.type = type;
		this.color = color;
		this.kilometers = kilometers;
	}
	price () {
		return map.get(this.brand)*(this.HP/20)*(10000/this.kilometers)*(10/2020-this.year)*biketype.get(this.type)
	}
}

class trucks extends vehicle {
	color;
	kilometers;
	constructor(year, HP, brand, color, kilometers){
		super(year, HP, brand);
		this.color = color;
		this.kilometers = kilometers;
	}
	price () {
		return map.get(this.brand)*(this.HP/200)*(10000/this.kilometers)*(10/2020-this.year)
	}
}


let map = new Map()
	.set("Mercedes", 50000)
	.set("VW", 30000)
	.set("Honda", 40000)
	.set("Toyota", 40000)
	.set("Porsche", 60000)

let brands = {
	"Mercedes": 50000,
	"VW": 30000,
	"Honda": 40000,
	"Toyota": 40000,
	"Porsche": 60000
}

let biketype= {
	"Chopper": 1.5,
	"Race": 1
}

let car1 = new cars (1995, 105, "VW", 5, "blue", 200000)

for (let val1 in brands){
	$("#brand").append("<option value="+val1+">"+val1+"</option>")
}


for (let val2 in biketype){
	$("#type").append("<option value="+val2+">"+val2+"</option>")
}


$("#carbutton").on("click", ()=>{
	$(".cars").show()
})

$("#bikebutton").on("click", ()=>{
	$(".bikes").show()
})

$("#truckbutton").on("click", ()=>{
	$(".trucks").show()
})

$("#carcalc").on("click", ()=>{
	year = document.getElementById("year").value
	HP = document.getElementById("HP").value
	brand = document.getElementById("brand").value
	seats = document.getElementById("seats").value
	color= document.getElementById("color").value
	kilometers = document.getElementById("kilometers").value
	let car = new cars (year, HP, brand, seats, color, kilometers)
	console.log(car.price())
})

$("#bikecalc").on("click", ()=>{
	year = document.getElementById("year").value
	HP = document.getElementById("HP").value
	brand = document.getElementById("brand").value
	type = document.getElementById("type").value
	color= document.getElementById("color").value
	kilometers = document.getElementById("kilometers").value
	let bike = new bikes (year, HP, brand, type, color, kilometers)
	console.log(bike.price())
})

$("#truckcalc").on("click", ()=>{
	year = document.getElementById("year").value
	HP = document.getElementById("HP").value
	brand = document.getElementById("brand").value
	color= document.getElementById("color").value
	kilometers = document.getElementById("kilometers").value
	let truck = new trucks (year, HP, brand, color, kilometers)
	console.log(truck.price())
})

})