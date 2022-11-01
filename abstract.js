// абстрактный класс

class Transport{
    constructor(type, model, color) {
        this.type = type;
        this.model = model;
        this.color = color;
    }
   
}


class Auto extends Transport {
    constructor(type, model, color, capacity){
        super(type, model, color)
        this.capacity = capacity;
    }
    startEngine(){
            console.log(`Type: ${this.type}\nColor: ${this.color}`);
    }

}

const mercedes = new Auto ('sedan', 'brabus', 'black', 500)
console.log(mercedes);
mercedes.startEngine()

class Avia extends Transport {
    constructor(type, model, color,spaciousness){
    super(type, model, color)
    this.spaciousness = spaciousness;
    }
    alga(){
        console.log(`Model: ${this.model}\nColor: ${this.color}\nSpaciousness: ${this.spaciousness}`);
    }
}
const boeing = new Avia ('aerobus', 'Yng700', 'white', 1500)
console.log(boeing);
boeing.alga()

class Water extends Transport {
    constructor(type, model, color,fuel){
    super(type, model, color)
    this.fuel = fuel;
    }
    yahaiblya(){
        console.log(`Type: ${this.type}\nColor: ${this.color}\nFuel: ${this.fuel}`);
    }
}
const scooter = new Water ('hidroscooter', 'Yamaha', 'yellow', 'petrol')
console.log(scooter);
scooter.yahaiblya()