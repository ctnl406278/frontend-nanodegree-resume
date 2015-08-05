//RESUMEBUILDER

var name = "Daniel Struwig";
var role = "Global Technical Trainee";
var email = "Daniel.Struwig@dnvgl.com";
var skills = [
		"surveying",
		"programming",
		"exploring"
	];

var bio = {
    "name": "Daniel Struwig",
    "role": "Global Technical Trainee",
    "contacts": {
        "mobile": "+12 (3) 456 7890",
        "email": "Daniel.Struwig@dnvgl.com",
        "github": "ctnl406278",
        "location": "Saint-Nazaire, France"
    },
    "age": 31,
    "welcomeMsg": "Hi y'all my name is Danstr. How y'all doin?",
    "skills": [
        "surveying",
        "programming",
        "exploring"
    ],
    "bioPic": "images/PolarBear.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedEmail = HTMLemail.replace("%data%", email);
var formattedSkills = HTMLskills.replace("%data%", skills);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedEmail);
$("#header").append(formattedSkills);

var education = {
    "schools": [
        {
            "name": "Univeristy of Stellenbosch",
            "yearsAttended": "2002 - 2006",
            "location": "Stellenbosch, WC, RSA",
            "qualification": "BEng (E&E)",
            "major": [
                "High Voltage",
                "Power Electronics"
            ]
        },
        {
            "name": "Univeristy of Stellenbosch",
            "yearsAttended": "2007 - 2009",
            "location": "Stellenbosch, WC, RSA",
            "qualification": "BEng (M&M)",
            "major": [
                "Fluid Mechanics",
                "Computational Fluid Dynamics"
            ]
        },
        {
            "name": "Univeristy of Stellenbosch",
            "yearsAttended": "2010 - 2012",
            "location": "Stellenbosch, WC, RSA",
            "qualification": "MScEng (Mech)",
            "major": [
                "Computational Fluid Dynamics",
                "Turbomachinery"
            ]
        }
    ],
    "onlineCourses": [
        {
            "name": "Udacity",
            "title": "Intro to Java Programming",
            "date": "March 2015 - Present",
            "url": "http://wwww.udacity.com/course/Intro_to_Java_Programming/"
        },
        {
            "name": "Udacity",
            "title": "JavaScript Basics",
            "date": "August 2015 - Present",
            "url": "http://wwww.udacity.com/course/JavaScript_Basics/"
        },
        {
            "name": "Udacity",
            "title": "How to Use Git and GitHub",
            "date": "August 2015 - Present",
            "url": "http://wwww.udacity.com/course/How_to_Use_Git_and_GitHub/"
        }
    ]
}

for (i = 0; i < education.schools.length; i ++){ 
var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].qualification);
var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].yearsAttended);
var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].name);
var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", education.schools[i].url);

$("#education").append(formattedHTMLschoolName);
$("#education").append(formattedHTMLschoolDegree);
$("#education").append(formattedHTMLschoolDates);
$("#education").append(formattedHTMLschoolLocation);
$("#education").append(formattedHTMLschoolMajor);

$("#education").append(formattedHTMLonlineTitle);
$("#education").append(formattedHTMLonlineSchool);
$("#education").append(formattedHTMLonlineDates);
$("#education").append(formattedHTMLonlineURL);
}

var work = {
    "job": [
        {
            "employer": "InnoWind (Pty) Ltd",
            "title": "Study Engineer",
            "location": "Cape Town, WC, RSA",
            "yearsEmployed": "Jan 2014 - Jul 2015",
            "description": "Energy assesments as part of developing wind farms"
        },
        {
            "employer": "DNV GL",
            "title": "Global Technical Trainee",
            "location": "Cape Town, WC, RSA",
            "yearsEmployed": "Aug 2014 - present",
            "description": "As a Global Trainee my role is to gain working experience in various business units of the compnay in different locations around the globe"
        }
    ]
};

var projects = {
    "project": [
        {
            "title": "Energy assesment for Wesley Windfarm",
            "location": "Wesley, EC, RSA",
            "yearsActive": "Jan 2014 - Jul 2015",
            "description": "Energy assesments for the development of this wind farm"
        },
        {
            "title": "RCCL Harmony of the Seas",
            "location": "Saint-Nazaire, Loire-Atlantique, FRA",
            "yearsActive": "Mar 2015 - Aug 2015",
            "description": "Newbuild surveying of the construction of the ship"
        }
    ]
};

//-------------------------------------------------------------------------------------

/* HTMLschoolName = '<a href="#">%data%';
HTMLschoolDegree = ' -- %data%</a>';
HTMLschoolDates = '<div class="date-text">%data%</div>';
HTMLschoolLocation = '<div class="location-text">%data%</div>';
HTMLschoolMajor = '<em><br>Major: %data%</em>'; */


//-------------------------------------------------------------------------------------
//APPEND AND CONSOLE OUTPUT
/* $("#main").append("Dan Str");
 
var email = "Danstr@email.com";
var newEmail = email.replace("email","mymail");
console.log(email);
console.log(newEmail);

var awesomeThoughts = "I am Danstr and I am AWESOME!";
$("#main").append(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts); */

//-------------------------------------------------------------------------------------
//ARRAY MANIPULATION
/* var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    newArray = _array;
    newArray[2] = _array[2] + 1;
    
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
console.log(nameChanger(name)); */

//-------------------------------------------------------------------------------------
//OBJECT LITERAL NOTATION
/* var bio = {
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
$("#main").append(bio.bioPic); */

//-------------------------------------------------------------------------------------
//OBJECT LITERALS WITH DOT AND BRACKET NOTATION
/* bio.city = "Trignac";
bio.altEmail = "Danstr@dnvgl.com";
$("#main").append(bio.city);

bio["dorp"] = "Doringkop";
bio["epos"] = "DaanSeEpos@epos.co.za";
$("#main").append(bio.dorp);

var work = {};
work.workTitle = "Global Technical Trainee";
work.workEmplopyer = "DNV GL";
work.workYearsEmployed = "2 yrs";
work.workLocation = "Cape Town, WC, RSA";
$("#main").append(work["workTitle"]);
console.log(work["workTitle"]);

var education = {};
education["schoolName"] = "Univeristy of Stellenbosch";
education["schoolYearsAttend"] = "2002 - 2012";
education["schoolLocation"] = "Stellenbosch, WC, RSA";
$("#main").append(education.schoolName);
console.log(education.schoolName); */

//-------------------------------------------------------------------------------------
//JSON (JavaScript Object Notation)
/* var education = {
    "schools": [
        {
            "name": "Univeristy of Stellenbosch",
            "yearsAttend": "2002 - 2006",
            "location": "Stellenbosch, WC, RSA",
            "qualification": "BEng (E&E)",
            "major": [
                "High Voltage",
                "Power Electronics"
            ]
        },
        {
            "name": "Univeristy of Stellenbosch",
            "yearsAttend": "2007 - 2009",
            "location": "Stellenbosch, WC, RSA",
            "qualification": "BEng (M&M)",
            "major": [
                "Fluid Mechanics",
                "Computational Fluid Dynamics"
            ]
        },
        {
            "name": "Univeristy of Stellenbosch",
            "yearsAttend": "2010 - 2012",
            "location": "Stellenbosch, WC, RSA",
            "qualification": "MScEng (Mech)",
            "major": [
                "Computational Fluid Dynamics",
                "Turbomachinery"
            ]
        }
    ],
    "onlineCourses": [
        {
            "name": "Udacity",
            "title": "Intro to Java Programming",
            "date": "March 2015 - Present",
            "url": "http://wwww.udacity.com/course/Intro_to_Java_Programming/"
        },
        {
            "name": "Udacity",
            "title": "JavaScript Basics",
            "date": "August 2015 - Present",
            "url": "http://wwww.udacity.com/course/JavaScript_Basics/"
        },
        {
            "name": "Udacity",
            "title": "How to Use Git and GitHub",
            "date": "August 2015 - Present",
            "url": "http://wwww.udacity.com/course/How_to_Use_Git_and_GitHub/"
        }
    ]
} */

//-------------------------------------------------------------------------------------
