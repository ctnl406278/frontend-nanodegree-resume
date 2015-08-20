
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
//OLD CODE FOR SECTIONS IN RESUME

/* if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedBioSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedBioSkills);
	formattedBioSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedBioSkills);
	formattedBioSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedBioSkills);
} */

/* $("#workExperience").append(HTMLworkStart);
for (i = 0; i < work.jobs.length; i ++){
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].yearsEmployed);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

$("#workExperience").append(formattedWorkEmployer);
$("#workExperience").append(formattedWorkTitle);
$("#workExperience").append(formattedWorkDates);
$("#workExperience").append(formattedWorkLocation);
$("#workExperience").append(formattedWorkDescription);
} */

/* function displayWork(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].yearsEmployed);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedWork = formattedWorkEmployer + formattedWorkTitle + formattedWorkDates + formattedWorkLocation + formattedWorkDescription;
		$(".work-entry:last").append(formattedWork);
	}
}
displayWork(); */

/* $("#projects").append(HTMLprojectStart);
for (i = 0; i < projects.project.length; i ++){
var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[i].yearsActive);
var formattedProjectLocation = HTMLprojectDescription.replace("%data%", projects.project[i].location);
var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);

$("#projects").append(formattedProjectTitle);
$("#projects").append(formattedProjectDates);
$("#projects").append(formattedProjectLocation);
$("#projects").append(formattedProjectDescription);
} */

/* for (i = 0; i < education.schools.length; i ++){ 
var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].qualification);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].yearsAttended);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

$("#education").append(formattedSchoolName);
$("#education").append(formattedSchoolDegree);
$("#education").append(formattedSchoolDates);
$("#education").append(formattedSchoolLocation);
$("#education").append(formattedSchoolMajor);
} */

/* for (i = 0; i < education.schools.length; i ++){ 
var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].qualification);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].yearsAttended);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

$("#education").append(formattedSchoolName);
$("#education").append(formattedSchoolDegree);
$("#education").append(formattedSchoolDates);
$("#education").append(formattedSchoolLocation);
$("#education").append(formattedSchoolMajor);
} */

/* $("#education").append(HTMLonlineClasses);
for (i = 0; i < education.onlineCourses.length; i ++){ 
var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].name);
var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

$("#education").append(formattedOnlineTitle);
$("#education").append(formattedOnlineSchool);
$("#education").append(formattedOnlineDates);
$("#education").append(formattedOnlineURL);
} */

education.displaySchools = function(){
	$("#education").append(HTMLschools);
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].qualification);
		var formattedSchool = formattedSchoolName + formattedSchoolDegree;
		$(".education-entry:last").append(formattedSchool);
		
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].yearsAttended);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedSchoolMajor);
/* 		var formattedSchools = formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor;
		$(".education-entry:last").append(formattedSchools); */
	}	
}

education.displaySchools();

education.displayOnlineCourses = function(){
	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses){
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].name);
		var formattedOnlineCourse = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedOnlineCourse);
		
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedOnlineURL);
/* 		var formattedOnlineCourses = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL;
		$(".education-entry:last").append(formattedOnlineCourses); */
	}	
}

education.displayOnlineCourses();