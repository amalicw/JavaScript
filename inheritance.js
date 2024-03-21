class Car{

    setName(name){
        this.name = name;
    }

    startEngine(){
        console.log('Engine starting for '+this.name)
    }


    stopEngine(){
        console.log('Engine stopping for '+this.name)
    }


}

class Toyota extends Car {

    topSpeed(speed){
        console.log('Top speed for ' + this.name + ' is ' + speed);
    }

}

let myCar = new Toyota();

// let obje = {
//     setName: () => {},
//     startEngine: () => {},
//     stopEngine: () => {},
//     topSpeed:() => {},
//     name: 'll'
// }

myCar.setName('Elsa');
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed('2000kmh');