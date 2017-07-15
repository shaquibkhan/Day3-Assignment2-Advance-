//class implementing interface
var Car = (function () {
    function Car() {
        this.type = '2 wheeler';
        this.safety = 'Dual air bag';
        this.efficiency = 20.0;
    }
    Car.prototype.getCarInfo = function () {
        console.log("Features of a car is as follows Type " + this.type + " , Safety " + this.safety + " & Efficiency " + this.efficiency);
    };
    return Car;
}());
//object creation of class Car
var mycar = new Car();
mycar.getCarInfo();
