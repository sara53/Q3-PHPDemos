// function add(x, y) {
// 	x = x || 0;
// 	y = y || 0;
// 	console.log("x ", x);
// 	console.log("y", y);
// 	console.log(x + y);
// }

// add(5, 10);

// function sayHello() {
// 	console.log("Welcome PHP");
// }

// sayHello("ITI");

// add();
// add(3);
// add(3, 4);
// console.log("============");
// add(5, 10);

// add("welcome", "ali");
// add(true, true);

// user defined function
// function statement
// function add(x, y) {
// 	console.log(x + y);
// }

// var result = add(4, 5);
// console.log(result);

// fly(); // call

// var result = Number(true);
// console.log(result);

// function expression
// var result = function (x, y) {
// 	console.log(x + y);
// };
// result(3, 4);

// var sayHello = function () {
// 	console.log("Say Hello");
// 	return "ITI";
// };

// var result = sayHello();
// console.log(result);

// add(5, 6);
// function add(x, y) {
// 	console.log(x + y);
// }

// result(3, 4);
// console.log(result);
// var result = function (x, y) {
// 	console.log(x + y);
// };

// console.log(this);

// console.log(window);

// console.log(a);
// var a = 5;
// console.log(a);
/** ==================================== */

// var php = function (supName) {
// 	console.log("Hello PHP", supName);
// };

// var dotNet = function (sup) {
// 	console.log("Hello dot net", sup);
// };
// var mearn = function () {
// 	console.log("Hello mearn");
// };
// function great(myFun1, myFun2) {
// 	console.log("Welcome From iti");
// 	myFun1("tasneem");
// 	myFun2();
// }

// great(
// 	function (x) {
// 		console.log(x);
// 		// x();
// 		console.log("cb1");
// 	},
// 	function () {
// 		console.log("cb2");
// 	}
// );
// great(php, dotNet);

// great(function (x) {
// 	console.log("Welcome call back 1", x);
// }, "Mona Ali");

// console.log("--------");
// great(dotNet, "Ahmed mohamed");
// great(function () {
// 	console.log("Welcome call back");
// });

// call back function

// great(mearn);
// console.log("---------");
// great(dotNet);
// console.log("----------");
// great(php);
/**=========================
 * string Object
 * --------------------------
 * == length
 * -------------------
 * -- charAt(index) --> char
 * -- indexOf( char) --> index
 * -- concat
 * -- toUpperCase
 * -- toLowerCase
 * -- startsWith
 * -- endWith
 * -- includes
 * -- split
 * ========================== */

// var fname = "username=ali;password=123";
// var result = fname.charAt(3);
// var result = fname.split(";")[0].split("=");
// console.log(result);
// for (var i = 0; i < fname.length; i++) {
// 	console.log(fname[i]);
// }

/**==========
 * arr
 * --------------------------
 * == length
 * ----------------------
 * == concat
 * == push
 * == unshift
 * == pop
 * == shift
 * ========= */

// var arr = ["mona", "ali", "ahmed"];
// // arr.unshift(123);
// // arr.unshift("alaa");
// var result = arr.join("=======");
// console.log(result);
// var arr = [
// 	"mona",
// 	123,
// 	true,
// 	function () {
// 		console.log("welcome");
// 	},
// ];

// var result = arr.concat([1, 2, 4, true]);

// console.log(result);
// console.log( arr[ 3 ]() );

// for (var i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }
// // set
// arr[0] = "PHP";
// // get
// console.log(arr[0]);

/** =======
 * -- push on specifc index on arr
 * -- callback function inside sort
 * -- date object
 *-----------------------
 == PI
 * ======== */

// var fname = "ahmed"; // demha
// var result = fname.split("").reverse().join("");

// console.log(result);

// var arr = [10, 20, 22, 5, 2];

// console.log(arr.sort(/** call back function */));

/*---------Math --------------
 == PI
 ----------------------
 -- sqrt
 -- pow
 -- abs
 -- sign --> positive --> 1
         --> negative--> -1
                0 --> 0

-- round
-- floor
-- ceil
-- random
-- sin

 * ======== */
// console.log(Math.sin((90 * Math.PI) / 180));
/**
 * jan --> 0
 *
 *
 */
// var myDate = new Date();

// // get
// console.log(myDate.getFullYear());

console.log(Math.min(10.2, 9, 33, 14));
