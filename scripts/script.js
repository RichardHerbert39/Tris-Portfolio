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
			if ( iIndex != aText.length ) {
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