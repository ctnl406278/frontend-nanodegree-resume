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

var formattedName = HTMLheaderName.replace("%data%", name)
var formattedRole = HTMLheaderRole.replace("%data%", role)
$("#header").prepend(formattedName);
$("#header").append(formattedRole);