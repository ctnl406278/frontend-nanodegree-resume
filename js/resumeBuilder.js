//RESUMEBUILDER
//BIO INFORMATION------------------------------------------------------------------------------------------
var bio = {
    "name": "Daniel Struwig",
    "role": "Global Technical Trainee",
    "contacts": {
        "mobile": "+12 (3) 456 7890",
        "email": "Daniel.Struwig@dnvgl.com",
        "github": "ctnl406278",
        "location": "Durban, Kwazulu-Natal, South Africa"
    },
    "age": 31,
    "welcomeMsg": "Hi y'all my name is Danstr. How y'all doin?",
    "skills": [
        " surveying",
        " programming",
        " exploring",
		" farming",
		" photagraphy"
    ],
    "profilePic": "images/PolarBear.jpg"
};

var formattedBioName = HTMLheaderName.replace("%data%", bio.name);
var formattedBioRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedBioMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedBioEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedBioGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBioLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioProfilePic = HTMLbioPic.replace("%data%", bio.profilePic);

$("#header").append(formattedBioName);
$("#header").append(formattedBioRole);
$("#header").append(formattedBioWelcomeMsg);
$("#header").append(formattedBioMobile);
$("#header").append(formattedBioEmail);
$("#header").append(formattedBioGitHub);
$("#header").append(formattedBioLocation);
$("#header").append(formattedBioProfilePic);

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var skillsCnt = 0;
	while (skillsCnt < bio.skills.length){
		var formattedBioSkills = HTMLskills.replace("%data%", bio.skills[skillsCnt]);
		$("#skills").append(formattedBioSkills);
		skillsCnt = skillsCnt + 1;
	}
}

//EDUCATION INFORMATION------------------------------------------------------------------------------------
var education = {
    "schools": [
        {
            "name": "Univeristy of Stellenbosch",
            "yearsAttended": "2002 - 2006",
            "location": "Stellenbosch, Western Cape, South Africa",
            "qualification": "BEng (E&E)",
            "major": [
                "High Voltage",
                "Power Electronics"
            ]
        },
        {
            "name": "Univeristy of Stellenbosch",
            "yearsAttended": "2007 - 2009",
            "location": "Stellenbosch, Western Cape, South Africa",
            "qualification": "BEng (M&M)",
            "major": [
                "Fluid Mechanics",
                "Computational Fluid Dynamics"
            ]
        },
        {
            "name": "Univeristy of Stellenbosch",
            "yearsAttended": "2010 - 2012",
            "location": "Stellenbosch, Western Cape, South Africa",
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

education.display = function(){
	$(".education-entry:last").append(HTMLschools);
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
		$(".education-entry:last").append(formattedSchoolMajor);;
	}
	
	$(".education-entry:last").append(HTMLonlineClasses);
	for (course in education.onlineCourses){
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].name);
		var formattedOnlineCourse = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedOnlineCourse);
		
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}
education.display();

//WORK INFORMATION-----------------------------------------------------------------------------------------
var work = {
    "jobs": [
        {
            "employer": "InnoWind (Pty) Ltd",
            "title": "Study Engineer",
            "location": "Cape Town, Western Cape, South Africa",
            "yearsEmployed": "Jan 2014 - Jul 2015",
            "description": "Energy assesments as part of developing wind farms"
        },
        {
            "employer": "DNV GL",
            "title": "Global Technical Trainee",
            "location": "Cape Town, Western Cape, South Africa",
            "yearsEmployed": "Aug 2014 - present",
            "description": "As a Global Trainee my role is to gain working experience in various business units of the compnay in different locations around the globe"
        }
    ]
};

work.display = function(){
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
work.display();

//PROJECT INFORMATION--------------------------------------------------------------------------------------
var projects = {
    "projects": [
        {
            "title": "Energy assesment for Wesley Windfarm",
            "location": "Wesley, Eastern Cape, South Africa",
            "yearsActive": "Jan 2014 - Jul 2015",
            "description": "Energy assesments for the development of this wind farm"
        },
        {
            "title": "RCCL Harmony of the Seas",
            "location": "Saint-Nazaire, Loire-Atlantique, France",
            "yearsActive": "Mar 2015 - Aug 2015",
            "description": "Newbuild surveying of the construction of the ship"
        }
    ]
};

//Encapsulation of display function with projects object.
projects.display = function(){
	for (project in projects.projects){
	$("#projects").append(HTMLprojectStart);
	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].yearsActive);
	var formattedProjectLocation = HTMLprojectDescription.replace("%data%", projects.projects[project].location);
	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	var formattedProjects = formattedProjectTitle + formattedProjectDates + formattedProjectLocation + formattedProjectDescription;
	$(".project-entry:last").append(formattedProjects);
	}
}
projects.display();

//INTERNATIONALIZE YOUR NAME---------------------------------------------------------------------------------
function inName(localName){
    var internationalName = localName;
	var names = localName.trim().split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    internationalName = names.join(" ");
	    
	return internationalName;
};
console.log(inName(bio.name));

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);