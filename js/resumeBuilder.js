/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
/* $("#main").append("Dan Str");
 
var email = "Danstr@email.com";
var newEmail = email.replace("email","mymail");
console.log(email);
console.log(newEmail);

var awesomeThoughts = "I am Danstr and I am AWESOME!";
$("#main").append(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts); */

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
bio.city = "Trignac";
bio.altEmail = "Danstr@dnvgl.com";
$("#main").append(bio.city);

bio["dorp"] = "Doringkop";
bio["epos"] = "DaanSeEpos@epos.co.za";
$("#main").append(bio.dorp);





