/**
 * Agenda
 * =======================
 * -- Asynchrouns Code in memory
 *    -- setTimeOut Execution
 * -- Promises
 * -- fetch
 * -- OOP
 *----------------------------------
 *
 */

// function first() {
// 	console.log("First");
// 	second();
// 	console.log("End");
// }

// function second() {
// 	setTimeout(() => {
// 		console.log("Second");
// 	}, 2000);
// 	console.log("After setTimeOut");
// }

// first();

// setTimeout(() => {
// 	console.log("first");
// }, 3000);

// setTimeout(() => {
// 	console.log("Second");
// }, 2000);

// console.log("End");

// setTimeout(() => {
// 	console.log("First");
// }, 0);

// console.log("Second");

// var x;

// setTimeout(() => {
// 	x = 10;
// 	console.log(x);
// }, 1000);

var productsID;

// setTimeout(() => {
// 	productsID = [100, 200, 300];
// 	setTimeout(() => {
// 		var product = {
// 			id: productsID[0],
// 			name: "Book",
// 			price: 300,
// 		};

// 		setTimeout(() => {
// 			var price = product.price;
// 			console.log(price);
// 		}, 500);
// 	}, 2000);
// }, 3000);

// function great(myFun) {
// 	myFun(
// 		function () {
// 			console.log("Cb1");
// 		},
// 		function () {
// 			console.log("CB2");
// 		}
// 	);
// }

// great(function (x, y) {
// 	x();

// 	y();
// });

// var myPromise = new Promise(function (x, y) {
// 	// x("PHP");
// 	y("Error Messgae");
// });
// myPromise
// 	.then(function (data) {
// 		console.log(data);
// 		console.log("Welcome Success");
// 	})
// 	.catch(function (e) {
// 		console.log(e);
// 		console.log("Error :(");
// 	});

/**
 * ==Pending
 * == fulfilled
 * == rejected
 */
/**---------------------------- */

// function getAllProducts() {
// 	var myPromise = new Promise(function (x, y) {
// 		var productsId;
// 		setTimeout(() => {
// 			productsId = [100, 200, 300];
// 			if (productsId) {
// 				x(productsId);
// 			} else {
// 				y("Error on getting Products id");
// 			}
// 		}, 3000);
// 	});

// 	return myPromise;
// }

// function getProductDetails(productId) {
// 	return new Promise((resolve, reject) => {
// 		var product = {
// 			id: productId,
// 			name: "Book",
// 			price: 300,
// 		};
// 		product ? resolve(product) : reject("Error on getting product");
// 	});
// }

// function getPrice(product) {
// 	return new Promise((resolve, reject) => {
// 		var price = product.price;
// 		price ? resolve(price) : reject("Error on getting price");
// 	});
// }

// async function execute() {
// 	try {
// 		let productsId = await getAllProducts();
// 		let product = await getProductDetails(productsId[0]);
// 		let price = await getPrice(product);
// 		console.log(price);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
// execute();

// getAllProducts()
// 	.then((productsId) => {
// 		return getProductDetails(productsId[0]);
// 	})
// 	.then((product) => {
// 		return getPrice(product);
// 	})
// 	.then((price) => {
// 		console.log(price);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// fetch("https://jsonplaceholder.typicode.com/users");
// .then((response) => {
// 	return response.json();
// })
// .then((data) => {
// 	console.log(data);
// })
// .catch((error) => {
// 	console.log(error);
// });

// async function execute() {
// 	try {
// 		let response = await fetch("https://jsonplaceholder.typicode.com/users");
// 		let data = await response.json();
// 		console.log(data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// execute();

// class Product {
// 	constructor(id = "", name = "", price = "") {
// 		this.id = id;
// 		this.name = name;
// 		this.price = price;
// 	}

// 	discount(rate) {
// 		return this.price * rate;
// 	}

// 	showData() {
// 		console.log(this.name);
// 	}
// }

// let p1 = new Product(1, "book", 200);
// let p2 = new Product(2, "Pen", 400);

// console.log(p1.discount(0.5));

// p1.showData();
// p2.showData();

// class Person {
// 	#id;
// 	constructor(name, age, address, id) {
// 		this.name = name;
// 		this.age = age;
// 		this.address = address;
// 		this.#id = id;
// 	}

// 	display() {
// 		console.log(`name : ${this.name} , age:${this.age}`);
// 	}

// 	get getId() {
// 		return this.#id;
// 	}
// 	set setId(value) {
// 		this.#id = value;
// 	}
// }

// let person1 = new Person("ali", 20, "banha", 3);

// person1.setId = "new ID";

// console.log( person1.getId );

// person1.setId("new ID");

// console.log(person1.getId());

// console.log( person1.#id );

// person1.address = "New Address"; // set
// console.log(person1.address);
// person1.address; // get

// // person -- parent superClass
// // user subClass --childClass
// class User extends Person {
// 	constructor(name, age, address, password) {
// 		super(name, age, address);
// 		this.password = password;
// 	}

// 	// override
// 	display() {
// 		console.log("New Imple");
// 	}
// 	generatePass() {
// 		return this.password.toUpperCase() + "@!#" + this.password;
// 	}
// }

// let myUser = new User("ahmed", 25, "banha", "ahmed123");
// myUser.display();
// console.log(myUser);

// class Person {
// 	constructor(name, age, address) {
// 		if (this.constructor == Person) {
// 			throw "Can't take object from abstract class";
// 		}
// 		this.name = name;
// 		this.age = age;
// 		this.address = address;
// 	}

// 	display() {
// 		throw "Method Not Implemented";
// 	}
// }

// var person1 = new Person();
// console.log(person1);
// class User extends Person {
// 	constructor() {
// 		super();
// 	}

// 	display() {
// 		console.log("Welcome");
// 	}
// }

// let myuser = new User();

// myuser.display();
