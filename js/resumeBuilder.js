var role = "Web Developer"

var skills = ["programming","competition coding","HTML & CSS"]

var bio = {
    "name" : "Saswata Gupta",
    "role" : role,
    "contactInfo" : {
        "mobile" : "416-452-4986",
        "email" : "gupta.saswata@gmail.com",
        "github" : "sas5580",
        "location" : "Mississauga ON"
    },
    "welcomeMessage" : "lorem ipsum dolor sit amet etc etc etc.",
    "skills" : ["programming", "competition coding", "HTML & CSS","cooperation","work ethic"],
    "pic": "images/fry.jpg"
};

var education = {
    "schools" : {
        "name" : "Glenforest Secondary School",
        "program" : "International Baccalaureate",
        "city" : "Mississauga, ON",
        "graduation_year" : "2016",
    },

    "online_courses" : [
        {
            "title" : "Intro to HTML and CSS at Udacity",
            "school" : "Udacity",
            "date" : "2016",
            "url": "http://www.udacity.com/course/ud304"
        },
        {
            "title" : "How to use Git and Github at Udacity",
            "school" : "Udacity",
            "date" : "2016",
            "url": "http://www.udacity.com/course/ud775"
        },
        {
            "title" : "Javascript Basics at Udacity",
            "school" : "Udacity",
            "date" : "2016",
            "url": "http://www.udacity.com/course/ud804"
        }
    ]
};

var work = [
    {
    "title" : "Marking Assistant",
    "employer" : "Grand Park Kumon",
    "dates" : "November 2015 - Present",
    "location" : "Mississauga",
    "description" : "WORK DESCRIPTION HERE"
    }
];

var projects = {
    "projects" :[ {
        "title" : "LIBestimote",
        "dates" : "November 2015",
        "description" : "An android app that emulates a library system using Estimore beacons",
        "images" : ["images/project1.png"],
        "url" : "https://github.com/sas5580/LIBestimote"
        } ]
};

projects.display = function(){
    for (i in projects.projects){
        console.log(i);
        $("#projects").append(HTMLprojectStart)
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[i].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[i].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[i].description));
        for (j in projects.projects[i].images){
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[i].images[j]));
        }
    }
}

function displayWork(){
    for (i in work){
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%",work[i].employer)+HTMLworkTitle.replace("%data%",work[i].title));
        $(".work-entry:last").append(HTMLworkDates.replace("%data%",work[i].dates));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%",work[i].description));
    }
}

function inName(name){
    var names = name.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    return names.join(" ");
}

/*
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});
*/



$("#header").prepend(HTMLheaderRole.replace("%data%",role));
$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));

$("#topContacts").append(HTMLmobile.replace("%data%",bio.contactInfo.mobile));
$("#topContacts").append(HTMLemail.replace("%data%",bio.contactInfo.email));
$("#topContacts").append(HTMLgithub.replace("%data%",bio.contactInfo.github));
$("#topContacts").append(HTMLlocation.replace("%data%",bio.contactInfo.location));

$("#header").append(HTMLbioPic.replace("%data%",bio.pic));
$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));

if (bio.skills.length>0){
    $("#header").append(HTMLskillsStart);
    for (i in bio.skills){
        $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
    }
}

displayWork();

projects.display();

$("#main").append(internationalizeButton);



/*
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#main").append(bio.name);
*/