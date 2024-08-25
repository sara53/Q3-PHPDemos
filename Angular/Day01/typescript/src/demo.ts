/**
 *  == string
 *  == number
 *  == boolean
 *  == undefined
 *  == null
 *  == any
 *
 */

// var fname: string = "mona";

// fname = "ali";

// fname = false;
// console.log(fname);

// var num: boolean = false;

// console.log(num);

// var fname: any;
// fname = "mona";
// fname = 10;
// fname = true;

// var fname;

// console.log(fname);
// union
// var fname: string | number | boolean = "ali";

// fname = 10;
// fname = true;

// type stringOrNumber = string | number;
// var fname: stringOrNumber = 10;

// var num: stringOrNumber = 30;

// var arr: string[][] = [["ali"]];

// arr.push(true);

// var person: {
// 	fname: string;
// 	color: string;
// 	age: number;
// } = { fname: "ali", color: "red", age: 20 };

// person.fname = "ahmed";
// person.age = false;

// var products: { id: number; name: string; price: number }[] = [];

// products.push({ id: 20, name: "Book", price: 200 });

// var arr: [string, string] = ["mona", "ali"];

// function sum(x: number, y: number, ...w: string[]) {
// 	console.log(w);
// 	console.log(x + y);
// }
// let result: [number, string] = [10, "mona"];
// function sum(x: number, y: string): void {
// 	// console.log(x + y);
// }

// sum(...result); // sum(10,"mona")

/**=============        Lab      =============== */
/**
  == define [] with only numbers values
  == define [] with number type or string
  == create function that shows course information
    -- courseName --> string
    -- duration --> number
    -- insName --> string
    -- then call this function

  ==  create Imployee interface {id,name,age,address,salary,bouns function}
  == create class employee implement Imployee
  == create class manger extends from employee class


  create Employee[]
 */

// class X {
// 	constructor(public fname: string, public age: number) {}
// }

// class Person {
// 	private fname: string;
// 	age: number;
// 	constructor(fname: string, age: number) {
// 		this.fname = fname;
// 		this.age = age;
// 	}

// 	set setFname(value: string) {
// 		this.fname = value;
// 	}

// 	get getFname() {
// 		return this.fname;
// 	}
// 	display(): void {
// 		console.log(`${this.fname}`);
// 	}
// }

// let myPerson = new Person("ahmed", 40);
// myPerson.setFname = "MONA";
// console.log(myPerson.getFname);

// myPerson.setFname("new Value");
// console.log(myPerson.getFname());
// class User extends Person {
// 	password: string;
// 	constructor(fname: string, age: number, password: string) {
// 		super(fname, age);
// 		this.password = password;
// 	}
// }

// let myUser = new User("mona", 30, "MONAahmed");
// myUser.display();

interface IProduct {
	id: number;
	name: string;
	price: number;
	quantity: number;
	imgSrc?: string;
	cat: string;
	discount: (rate: number) => number;
}

class Product implements IProduct {
	constructor(
		public id: number,
		public name: string,
		public price: number,
		public quantity: number,
		public cat: string
	) {}

	discount(rate: number): number {
		return this.price * rate;
	}
}
