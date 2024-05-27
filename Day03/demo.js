// var trackName = "PHP";

// function SayHello() {
// 	 trackName = "dotnet";
// 	console.log(trackName);
// 	console.log("Welcome From ITI");
// 	return "Done";
// }

// var result = SayHello();
// console.log(trackName);
// console.log(result);

/**========================== */

// var sayHello = function (x) {
// 	console.log("Welcome From ITI Your inst is : ", x);
// };
// var great = function (trackName) {
// 	console.log("Welcome ", trackName);
// 	result = sayHello("Mona Ali");
// 	return result;
// };

// var output = great("PHP");
// console.log(output);

/**============================== */
// function add() {
// 	console.log(x);
// 	var x = 4;
// 	var y = 3;
// 	return x + y;
// }

// console.log(add(4, 5));

// var fname = "Ali";
// var x = 20;

// var fname = "mona";

// var y = 15;

// console.log();

/**
 * props --> key:value(any Datatype)
 * method
 *----------------------------
  == dotNotation
  -- subscript notation
 *
 */
// var student1 = {
// 	fname: "ali",
// 	age: 20,
// 	address: {
// 		street: "Ahmed ali Str",
// 		code: "123",
// 	},
// 	// method
// 	display: function () {
// 		console.log("welcome from display");
// 	},
// };
// student1.display();

// student1.display = "mona";
// student1.display();

// console.log(student1.address.code);
// console.log(student1["address"]["code"]);
// console.log(student1["address"].code);
// console.log(student1.address["code"]);

// student1["fname"] = "mona";
// student1["age"] = 40;
// student1["color"] = "red";

// student1.fname = "mona"; // override
// student1.color = "red"; // added
// get
// console.log(student1["age"]);
// console.log(student1["fname"]);
// console.log(student1["color"]);
// // get
// console.log(student1.age);
// console.log(student1.fname);
// console.log(student1.color); // undefined

// var fname = "hello";
// console.log(fname.length);

// fname.charAt(0);

// function print() {
// 	console.log("Btn clicked");
// }

/** How to select elements from Dom
 *  == querySelector ==> return element
 *  == getElementById() ==> return element
 *  == getElementsByClassName ==> return collection
 *  == getElementsByTagName ==> return collection
 *  == getElementsByName ==> return collection
 *  == querySelectorAll ==> return NodeList
 *---------------------------------------------
 document.body
 document.links
 document.forms
 document.images
 element.firstChild
 element.firstElementChild
 element.lastChild
 element.children
 element.childNodes
 *
 ----------------------How to changeContent-----------------
 * == innerHTML
   == innerText
   == textContent -- search
   -----------------------------
   == value 
   -- name
 */

// var div = document.getElementsByClassName("content")[0];
// console.log(div.children);
// console.log(div.childNodes);
// console.log(document.forms);

// var element = document.querySelector("p");

// console.log(element);
// for (var i = 0; i < elements.length; i++) {
// 	console.log(elements[i]);
// }
// var div = document.getElementById("myHead");
// console.log(div);

// var p = document.getElementsByClassName("contentInfo")[1];
// var input = document.getElementsByTagName("input")[3];
// function changeText() {
// 	input.value = 200;
// 	// console.log(input.value);
// 	// get
// 	// console.log(p.innerText);
// 	// p.innerText = "<h1>Welcome php track</h1>";
// 	// p.innerHTML = "<h1>Welcome php track</h1>";
// }

var inputs = document.getElementsByTagName("input");
var p = document.getElementById("output");
var showAnswers = function () {
	for (var i = 0; i < inputs.length; i++) {
		if (inputs[i].checked) {
			console.log(inputs[i].value);
			p.innerHTML += inputs[i].value;
		}
	}
};
