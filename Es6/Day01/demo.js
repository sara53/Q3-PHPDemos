/**
 * Agenda
 * --------------------------
 * == var  let const
 * == spread Operator
 * == rest Params -- default values
 * == destructuring
 * == Arrow Function
 * == Array API
 * == String
 * --------------------------
 * == Object.values
 * == Object.assign
 * == object.key
 * == object.entries
 * --------------------------------
 */

/**
 * Var
 * --------------------
 *  == reassign
 *  == redeclartion
 *  == Hoisting
 *  == function scope
 * == added to window object
 *----------------------------
  == let
  == reassign
  == can't redeclare
  == can't hoisting
  == block scope
 * == not added to window object
  ==  
 *----------------------------
  == const
  == can't reassign
  == can't redeclare
  == can't hoisting
  == block scope
  == can't hoisting
  == block scope
  == not added to window object

 */

// const PI = 45;

// console.log(fname);
// let fname = "ali";
// console.log(fname);

// function showData() {
// 	let test = "PHP";
// 	for (let i = 0; i < 3; i++) {
// 		console.log(i);
// 		console.log(test);
// 	}

// 	// console.log("i outside loop is : ", i);
// }

// showData();

// const arr = [1, 2, "mona"];

// // arr = 3;
// // arr.push("PHP");

// console.log(arr);
/**========================= */

// let [, , z] = [10, 20, "mona", "PHP"];

// // console.log("x :", x);
// // console.log("y : ", y);
// console.log("z : ", z);

// function useArr(str) {
// 	return [
// 		str,
// 		function () {
// 			console.log(str);
// 		},
// 		"PHP",
// 	];
// }

// let [x, y] = useArr(true);

// y();
/**============================ */
// let person = {
// 	fname: "ali",
// 	lname: "ahmed",
// 	age: 20,
// };

// // let { fname: fname, age: age } = person;
// let { fname, age } = person;

// console.log("fname : ", fname);
// console.log("age : ", age);
/**============================ */

// let a = 3;
// let b = a;

// a = 5;

// console.log(" a : ", a);
// console.log(" b : ", b);
/**=============Spread Operator=============== */

// let arr1 = ["mona", true, 123];
// let arr2 = [1, 2, 3, ...arr1, "Welcome"];

// for (let i = 0; i < arr1.length; i++) {
// 	arr2[i] = arr1[i];
// }

// arr2.push("PHP");

// console.log(" arr1 : ", arr1);
// console.log(" arr2 : ", arr2);

// let person1 = { fname: "ali", color: "red" };

// let person2 = { age: 20, ...person1 };

// console.log(person1);
// console.log(person2);
// let arr = [10, 20, 50, 3, 70];

// console.log(Math.max(...arr));

/**===============Default Values , Rest================ */

// function add(...w) {
// 	console.log(w);
// }

// add(2, 3, "mona", "php", 123);

// let [x, ...y] = [1, "mona", "ali", "php"];

// console.log(x);
// console.log(y);
/**==================== */

// var str = "Welcome";

// console.log(`PHP Track

// ${str}

// :)
// `);

// statement (declaration)
// function add(x, y) {
// 	return x + y;
// }

// // expression
// let add2 = function (x, y) {
// 	return x + y;
// };
// arrow
// let add = (x = 0, y = 0) => {
// 	console.log("sdfg");
// 	return x + y;
// };

// let result = add(2, 3);
// console.log(result);

// let square = (x, y) => x + y;

// let square = (_) => console.log("Welcome");

// var fname = "mona";
// let person = {
// 	fname: "ali",
// 	display: function () {
// 		setTimeout(function () {
// 			console.log(this.fname);
// 		}, 2000);
// 	},
// };

// person.display();

// var fname = "mona";

// let person = {
// 	fname: "ahmed",
// 	display: () => {
// 		window.setTimeout(() => {
// 			console.log(this.fname);
// 		}, 2000);
// 	},
// };

// person.display();
/**==========Array API
 * == find
 * == findIndex
 * == map
 * ==every
 * == some
 * == filter
 * == reduce --- self study
 * ========== */

// let itiTracks = ["PHP", "DotNet", "POS"];

// itiTracks.forEach((item, index, arr) => {
// 	itiTracks[index]
// });
// var result = itiTracks.some((item) => item.startsWith("P"));

// console.log(result);
// var result = itiTracks.map(function (item, index) {
// 	return `<div>
//      <h1>${item}</h1>
//     </div>`;
// });

// console.log(result);

// let arr = [10, 20, 30, 40, 19];

// var result = arr.findIndex(function (item, index, arr) {
// 	return item > 25;
// });

// console.log(result);

// function findElement(x, y, z) {
// 	console.log("x : ", x);
// 	console.log("y : ", y);
// 	console.log("z : ", z);
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 25) return arr[i];
// 	}

//
// }

// for (let i = 0; i < arr.length; i++) {
// 	findElement(arr[i], i, arr);
// 	console.log("=============");
// }

// let products = [
// 	{
// 		id: 1,
// 		name: "Book",
// 		price: 200,
// 		cat: "school",
// 	},
// 	{
// 		id: 2,
// 		name: "Mouse",
// 		price: 2100,
// 		cat: "electronics",
// 	},
// 	{
// 		id: 3,
// 		name: "Pen",
// 		price: 2100,
// 		cat: "school",
// 	},
// 	{
// 		id: 4,
// 		name: "Juice",
// 		price: 2100,
// 		cat: "food",
// 	},
// ];

// var result = products.filter((item, index) => {
// 	return item.cat == "school";
// });

// console.log(result);
/** */

// let person1 = {
// 	fname: "ali",
// 	lname: "ahmed",
// 	age: 20,
// 	color: "green",
// };

// let person2 = {
// 	color: "red",
// 	gender: "male",
// };

// let output = Object.assign({}, person1, person2);

// console.log("Person1 :", person1);
// console.log("Person2 :", person2);
// console.log("output", output);

// // let result = Object.keys(person);
// // let result = Object.values(person);
// let result = Object.entries(person);
// console.log(result);

// function showData(options = {}) {
// 	let defaultValues = {
// 		fname: "default fname",
// 		age: 1,
// 		address: "default add",
// 	};

// 	Object.assign(defaultValues, options);

// 	console.log(`fname:${defaultValues.fname},
//                  age : ${defaultValues.age}
//                  address:${defaultValues.address}`);
// }

// // showData();
// showData();

a = 3;
b = 4;

a = 4;
b = 3;

// [ 'mona', 'ali', 'ahmed' ]
// ["Mona","Ali",'Ahmed']
