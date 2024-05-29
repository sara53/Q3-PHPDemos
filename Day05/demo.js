// var execute = function () {
// 	console.log(navigator.geolocation);
// 	// console.log(history);
// 	// console.log(location.reload);
// 	// location.reload();
// 	// location.assign("https://www.google.com.eg/");
// 	// location.replace("https://www.google.com.eg/");
// 	// location.href = "https://www.google.com.eg/";
// 	// console.log()
// 	// location.pathname = "/about.html";
// 	// // get
// 	// console.log(location.pathname);
// };

// function successCb(position) {
// 	console.log(position.coords.latitude);
// 	console.log(position.coords.longitude);
// }

// function rejectCb() {
// 	console.log("reject");
// }
// navigator.geolocation.getCurrentPosition(successCb, rejectCb);

// 2- attach function
// var p = document.getElementById("result");
// var btn = document.getElementById("btn");

// var input = document.getElementsByTagName("input")[0];
// var errorMsg = document.getElementById("errorMsg");

// btn.addEventListener("click", function () {
// 	p.innerHTML = "Welcome";
// });

// setTimeout(function () {
// 	console.log("Removed");
// 	btn.removeEventListener("click", function () {
// 		p.innerHTML = "Welcome";
// 	});
// }, 3000);

// function login(e) {
// 	e.preventDefault();
// 	console.log("Login");
// }

// input.addEventListener("focus", function (e) {
// 	e.target.style.border = "2px solid blue";
// });
// input.addEventListener("blur", function (e) {
// 	e.target.style.border = "2px solid orange";
// });
// input.addEventListener("change", function (e) {
// 	console.log(e.target.value);
// });
// input.addEventListener("input", function (e) {
// 	if (e.target.value.length < 3) {
// 		input.style.border = "2px solid red";
// 		errorMsg.style.display = "block";
// 	} else {
// 		input.style.border = "2px solid green";
// 		errorMsg.style.display = "none";
// 	}
// 	console.log(e.target.value);
// 	p.innerHTML = e.target.value;
// });

// function changeText(e) {
// 	console.log(e.target);
// 	p.innerHTML = "Welcome PhP";
// }

// function changeStyle(e) {
// 	console.log(e.target);
// 	p.style.background = "red";
// }

// btn.onclick = changeStyle;
// btn.addEventListener("click", changeText);
// btn.addEventListener("click", changeStyle);
// btn.onclick = changeText;
// btn.onclick = changeStyle;

// btn.onclick = function () {
// 	changeStyle("green");
// 	changeText();
// };

function first() {
	console.log("first");
}
function second(e) {
	e.stopPropagation();

	console.log("second");
}
function third(event) {
	e.stopPropagation();
	console.log("third");
}
