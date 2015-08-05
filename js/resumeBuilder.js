//--------------------------------------------------------------------------------------
//WORKING RESUME

var name = "Daniel Struwig";
var role = "Global Technical Trainee";
var email = "Daniel.Struwig@dnvgl.com";
var skills = [
	"surveying",
	"programming",
	"exploring"
	];
	
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedEmail = HTMLemail.replace("%data%", email);
var formattedSkills = HTMLskills.replace("%data%", skills);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedEmail);
$("#header").append(formattedSkills);

//-------------------------------------------------------------------------------------
//PRACTISE WRITING TO THE CONSOLE
 
$("#main").append("Dan Str");
 
var email = "Danstr@email.com";
var newEmail = email.replace("email","mymail");
console.log(email);
console.log(newEmail);

var awesomeThoughts = "I am Danstr and I am AWESOME!";
$("#main").append(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts);

//--------------------------------------------------------------------------------------
//ARRAY MANIPULATION
var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    newArray = _array;
    newArray[2] = _array[2] + 1;
    
    // Don't delete this line!
    return newArray;
};
console.log(incrementLastArrayElement(sampleArray));

function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);							// make a copy of _array.
    var lastNumber = newArray.pop();					// .pop returns and removes the last element of the array.
    newArray.push(lastNumber + 1);						// .push adds an element to the end of array & increase the number by 1.
    return newArray;										
}
console.log(incrementLastArrayElement(sampleArray));

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
	var whiteSpace = oldName.indexOf(' ');
    var firstName = oldName.slice(0,whiteSpace);
	var lastName = oldName.slice(whiteSpace).toUpperCase();
	firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
	finalName = firstName.concat(lastName);
    
	return finalName;
};
console.log(nameChanger(name));

//-------------------------------------------------------------------------------------
//OBJECT LITORAL NOTATION

var bio = {
	"name": 	"Daniel Struwig",
	"role": 	"Global Technical Trainee",
	"contacts": {
		"mobile":	"+12 (3) 456 7890",
		"email":	"Daniel.Struwig@dnvgl.com",
		"github":	"ctnl406278",
		"location":	"Saint-Nazaire, France"
	},
	"age":	31,
	"welcomeMsg":	"Hi y'all my name is Danstr. How y'all doin?",
	"skills": 	skills,
	"bioPic":	"images/PolarBear.jpg"
};
$("#main").append(bio.name);
$("#main").append(bio.bioPic);

//-------------------------------------------------------------------------------------
//DOT & BRACKET NOTATION

bio.city = "Trignac";
bio.altEmail = "Danstr@dnvgl.com";
bio["dorp"] = "Doringkop";
bio["epos"] = "DaanSeEpos@epos.co.za";

$("#main").append(bio.city);
$("#main").append(bio.dorp);

//DOT
var work = {};
work.workTitle = "Global Technical Trainee";
work.workEmployer = "DNG- GL";
work.workYearsEmployed = "2 yrs";
work.workLocation = "Cape Town, South Africa";

//BRACKET
var education = {};
education["schoolName"] = "Stellenbosch University";
education["schoolYearsAttended"] = "12 yrs";
education["schoolLocation"] = "Stellenbosch, South Africa";

$("#main").append(work.workTitle);
$("#main").append(education["schoolName"]);

//--------------------------------------------------------------------------------------