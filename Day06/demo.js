// var tbody = document.getElementsByTagName("tbody")[0];
// console.log(tbody);
// function getAllUsers(userId) {
// 	var xhr = new XMLHttpRequest();
// 	xhr.open("GET", "https://jsonplaceholder.typicode.com/users/" + userId);
// 	xhr.send("");

// 	xhr.onreadystatechange = function () {
// 		if (xhr.readyState == 4) {
// 			if (xhr.status == 200) {
// 				var result = JSON.parse(xhr.response);
// 				tbody.innerHTML = `
// 				<tr>

// 				<td>${result.id}</td>
// 				<td>${result.name}</td>
// 				<td>${result.email}</td>
// 				<td><button>Remove user</button></td>
// 				</tr>
// 				`;
// 			}
// 		}
// 	};
// }
/** Cookies */

// document.cookie = "email=aa@gmail.com";
// document.cookie = "password=123";

// var expireDate = new Date();

// expireDate.setDate(expireDate.getDate() + 3);

// document.cookie = "email=asd@gmail.com;expires=" + expireDate;
// console.log(expireDate);
// console.log(document.cookie);

// function saveCookie(key, value) {
// 	document.cookie = key + "=" + value + ";expires=" + expireDate;
// }

// function getAllCookies() {
// 	return document.cookie;
// }

// var x = new Date();
// x.setDate(x.getDate() - 1);
// document.cookie = "email=asd@gmail.com;expires=" + x;

// // saveCookie("username", "ahmed");
// // saveCookie("username", "ali");
// // saveCookie("age", "20");

// console.log(getAllCookies());

// localStorage.setItem("email",'3gf')
/** */
// try {
// 	console.log("First");
// 	throw "Special Error";
// } catch (error) {
// 	console.log(error);
// 	// throw "Welcome Error :)";
// 	document.writeln("Network Error.. please try Again");
// } finally {
// 	console.log("finally Block");
// }

/**==================== */

// function add(x, y) {
// 	if (arguments.length != 2) {
// 		throw "Call fun with 2 arguments";
// 	}

// 	console.log(x + y);
// }

// add(3, 5);
/**==================== */
// var fname = "mona";

// function getName() {
// 	console.log(this.fname);
// }

// var person1 = {
// 	fname: "ali",
// 	display: getName,
// };

// getName();
// person1.display();

// getName();
// console.log(fname);
// console.log(window.fname);

// function sayHello() {
// 	console.log("Welcome");
// }

// sayHello();
// window.sayHello();
/***/
// this--> window

// var person1 = {
// 	fname: "Ali",
// 	lname: "ahmed",
// 	display: function (emoji, x) {
// 		console.log(this.fname + " " + this.lname + " " + emoji, " " + x);
// 	},
// };
// var person2 = {
// 	fname: "mona",
// 	lname: "Kareem",
// };

// var result = person1.display.bind(person1);

// result(":(", ":)");
// console.log(result);
// person1.display(":)");

// person1.display.call( person1, ":)", ":(" );
// person1.display.apply(person1, [":)", ":("]);
// person1.display.apply(person2);
// person1.display.call(person2);
