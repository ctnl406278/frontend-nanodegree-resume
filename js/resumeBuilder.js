//RESUMEBUILDER
//BIO INFORMATION------------------------------------------------------------------------------------------
var bio = {
    "name": "Daniel J. Struwig",
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

/* if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedBioSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedBioSkills);
	formattedBioSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedBioSkills);
	formattedBioSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedBioSkills);
} */

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
}

$("#education").append(HTMLonlineClasses);
for (i = 0; i < education.onlineCourses.length; i ++){ 
var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].name);
var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

$("#education").append(formattedOnlineTitle);
$("#education").append(formattedOnlineSchool);
$("#education").append(formattedOnlineDates);
$("#education").append(formattedOnlineURL);
}

//WORK INFORMATION-----------------------------------------------------------------------------------------
var work = {
    "jobs": [
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

function displayWork(){
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

displayWork();

//PROJECT INFORMATION--------------------------------------------------------------------------------------
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

$("#projects").append(HTMLprojectStart);
for (i = 0; i < projects.project.length; i ++){
var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[i].yearsActive);
var formattedProjectLocation = HTMLprojectDescription.replace("%data%", projects.project[i].location);
var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);

$("#projects").append(formattedProjectTitle);
$("#projects").append(formattedProjectDates);
$("#projects").append(formattedProjectLocation);
$("#projects").append(formattedProjectDescription);
}

