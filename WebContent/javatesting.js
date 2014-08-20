
// example
// 
/*
var batwing = {
	status: "Ready",
	RescueBatmat: function() {
		document.write("Loading his transponder... initiating launch ...");
	}	
}

if (batwing.status === "Ready") {
	batwing.RescueBatman();
}

var utilities = {
	printAllMembers: function(targetObject) {
		for (i in targetObject) {
			document.write("<br />" + targetObject[i]);
		}
	}
}

utilities.printAllMembers(batwing);

*/
/*
window.onload = function() {
var clickMeButton = document.getElementById('ClickMe');
ClickMeButton.onclick = runTheExample;
}
*/

window.onload = function() {

document.getElementById("ClickMe").onclick = runTheExample;

function runTheExample () {
alert("running the example");
	}
}
