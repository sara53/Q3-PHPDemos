// var p = document.getElementById("p1");
// var link1 = document.getElementById("link1");
// var link2 = document.getElementById("link2");
// var img = document.getElementById("img1");

/** search
 * before
 * after
 * insertAdjacentElement
 * insertBefore
 */
// function changeStyle() {
// 	// 1- style prop
// 	p.style.backgroundColor = "red";
// 	p.style.padding = "20px";
// 	p.style.color = "#fff";
// 	p.style.display = "none";
// }
// function changeStyle() {
// 	// 2- className p
// 	console.log(p.className); // get
// 	p.className = " jsClass"; // set override
// // }
// function changeStyle() {
// 	// 3- classList p
// 	console.log(p.classList[2]); // get
// 	p.classList.add("jsClass");
// 	p.classList.remove("p1");
// 	p.classList.toggle("jsClass");
// }

// function execute() {
// 	// img.setAttribute("src", "./2.jpg");
// 	// console.log(img.getAttribute("src"));
// 	// p.setAttribute("class", "jsClass");
// 	// console.log(p.getAttribute("class"));
// 	// console.log(link1.getAttribute("href")); // get
// 	// console.log(link2.getAttribute("href")); // get
// 	// link1.setAttribute("href", "#facebook");
// }
/** */

// function execute() {
// 	if (link1.hasAttribute("href")) {
// 		link1.removeAttribute("href");
// 	} else {
// 		link1.setAttribute("href", "#google");
// 	}
// 	// console.log(link1.hasAttribute("href"));
// }

/** p
 * <p class='test'>text</p>
 * <div></div>
 */

/** string
 *
 * 123 number
 * node -->
 */
// var result = document.getElementById("result");
// var p = document.createElement("p");
// var span = document.createElement("span");
// var myText = document.createTextNode("Welcome PHP Track");
// span.innerHTML = "Welcome Span";
// p.appendChild(myText);

// p.append("Welcome"); /** node */
// result.appendChild(p);
// var output = p.appendChild(span); // node
// var output = p.append(span); // node
// console.log(output);

// console.log(p);
// console.log(span);

// function execute() {
// 	// document.body.append(p, span);
// 	// result.append(p, span, "Welcome Text"); // accept more than element
// 	result.appendChild(p); // p
// 	result.append("string"); // undefined
// 	// result.appendChild(span);
// 	// var p = document.createElement("p");
// 	// p.innerHTML = "Welcome Php";
// 	// p.setAttribute("class", "jsClass");
// 	// p.setAttribute("id", "myDiv");
// 	// result.appendChild(p);
// }

/** BOM --> Browser Object Model
 *  -- window
 *  -- location
 *  -- history
 *  -- navigation
 *  -- screen // self study
 */
var myWind;
function openNewWindow() {
	myWind = window.open("about.html", "", "width=300,height=300");
}
function closeWindow() {
	myWind.close();
}
function moveToWindow(x, y) {
	myWind.moveTo(x, y);
}
function moveByWindow() {
	myWind.moveBy(-100, -100);
}
function resizeToWindow() {
	myWind.resizeTo(400, 400);
}
function resizeByWindow() {
	myWind.resizeBy(100, 100);
}

function execute() {
	console.log("Welcome PHP");
}

// var message = document.getElementById("message");
// function startDownload() {
// 	message.style.display = "block";
// 	setTimeout(function () {
// 		message.innerHTML = '<a href="#google">www.gg.comm</a>';
// 	}, 3000);
// }

// var i = 0;
// var myinterval = setInterval(function () {
// 	console.log(i++);
// }, 1000);

// setTimeout(function () {
// 	clearInterval(myinterval);
// }, 5000);
// function x() {
// 	console.log("welcome");
// }

// window.setTimeout(x(), 4000);

/** setTimeOut
 *  setInterval
 *
 */
