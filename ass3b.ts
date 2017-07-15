//interface starts
interface Drivable{
	type: string;
	safety: string;
	efficiency: number;
}
//class implementing interface
class Car implements Drivable {
	type='2 wheeler';
	safety='Dual air bag';
	efficiency=20.0;
 getCarInfo(){
 	console.log(`Features of a car is as follows Type ${this.type} , Safety ${this.safety} & Efficiency ${this.efficiency}`);
 }
}
//object creation of class Car
var mycar = new Car();
mycar.getCarInfo();