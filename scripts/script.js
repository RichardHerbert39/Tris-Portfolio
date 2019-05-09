//typewriter effect
// set up text to print, each item in array is new line
var aText =
	["Tristan Perkins", 
	"Software Developer"],
	iSpeed = 150, // time delay of print out
	iIndex = 0, // start printing array at this posision
	iArrLength = aText[0].length, // the length of the text array
	iScrollAt = 20, // start scrolling up at this many lines
	iTextPos = 0, // initialise text position
	sContents = '', // initialise contents variable
	iRow; // initialise current row
 
function typewriter() {
	sContents =  '';
	iRow = Math.max(0, iIndex-iScrollAt);
	var destination = document.getElementById("type-out");
	
	if (destination != null) {
		while ( iRow < iIndex ) {
			sContents += aText[iRow++] + '<br />';
		}
		destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "<span class='blinking'>_</span>";
		if ( iTextPos++ == iArrLength ) {
			iTextPos = 0;
			iIndex++;
			if (iIndex != aText.length) {
				iArrLength = aText[iIndex].length;
				setTimeout("typewriter()", 500);
			}
		}
		else {
			iSpeed = Math.floor(Math.random() * 201) + 50;
			setTimeout("typewriter()", iSpeed);
		}
	}
}

typewriter();

//nav button logic
var navbutton = document.getElementById("navbutton"),
	navlist = document.getElementById("navlist"),
	shown = false;

function navshow() {
	if (shown == false) {
		navlist.style.display = "inline-block";
		shown = true;
	}
	else {
		navlist.style.display = "none";
		shown = false;
	}
}

navbutton.addEventListener("click", navshow);

//enlarge logic for skills page
var skillArray = [],
	descArray = [],
	largeArray = [];

for (var i = 1; i < 100 && document.getElementById("skill-" + i) != null; i++) {
	var currentSkill = document.getElementById("skill-" + i),
		currentDesc = document.getElementById("skill-desc-" + i);
	skillArray.push(currentSkill);
	descArray.push(currentDesc);
	largeArray.push(false);
	function addEvent(number) {
		currentSkill.addEventListener("click", function() {
			enlarge(number);
		});
	}

	addEvent(i - 1);
}

function enlarge(number) {
	var skill = skillArray[number],
		description = descArray[number];
	description.style.display = "block";
	skill.style.animation = "enlarge 1s forwards";
	if (largeArray[number] == false) {
		setTimeout(function() {
			window.addEventListener("click", runShrink)
		}, 1);
		largeArray[number] = true;
	}
	
	function runShrink() {
		shrink();
	}
	
	function shrink() {
		largeArray[number] = false;
		skill.style.animation = "shrink 1s forwards";
		setTimeout(function() {
			description.style.display = "none";
			window.removeEventListener("click", runShrink);
		}, 1000);
	}
}



//modal logic for projects page
var projectOne = document.getElementById("project-1"),
	projectTwo = document.getElementById("project-2"),
	projectThree = document.getElementById("project-3");

function modalshow(number) {
	var modal = document.getElementById("project-modal-" + number);
	modal.style.display = "block";
	window.addEventListener("click", function() {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	})
}

if (projectOne != null) {
	projectOne.addEventListener("click", function() {
		modalshow(1);
	});
}
if (projectTwo != null) {
	projectTwo.addEventListener("click", function() {
		modalshow(2);
	});
}
if (projectThree != null) {
	projectThree.addEventListener("click", function() {
		modalshow(3);
	});
}