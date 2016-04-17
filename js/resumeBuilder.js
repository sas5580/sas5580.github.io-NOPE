var role = "Software Engineer"

var bio = {
    "name" : "Saswata Gupta",
    "role" : role,
    "contactInfo" : {
        "mobile" : "416-452-4986",
        "email" : "gupta.saswata@gmail.com",
        "github" : "sas5580",
        "location" : "Mississauga, ON"
    },
    "welcomeMessage" : "lorem ipsum dolor sit amet etc etc etc.",
    "skills" : ["competition coding", "HTML & CSS","C++","Python"],
    "pic": "images/pic.jpg"
};


var education = {
    "schools" :[  {
        "name" : "Glenforest Secondary School",
        "program" : "International Baccalaureate",
        "city" : "Mississauga, ON",
        "dates" : "2012-2016"
        }  ],

    "online_courses" : [
        {
            "title" : "Intro to HTML and CSS at Udacity",
            "school" : "Udacity",
            "date" : "2016",
            "description": "Teaches how to convert digital design mockups into static web pages and how to approach page layout, how to break down a design mockup into page elements, and how to implement that in HTML and CSS."
        },
        {
            "title" : "How to use Git and Github at Udacity",
            "school" : "Udacity",
            "date" : "2016",
            "description": "Introduces the basics of using version control by focusing on a particular version control system called Git and a collaboration platform called GitHub."
        },
        {
            "title" : "Javascript Basics at Udacity",
            "school" : "Udacity",
            "date" : "2016",
            "description": "Explores the JavaScript programming language by creating an interactive webpage. Teaches the JavaScript programming fundamentals you need while building new elements and sections to enhance any website."
        }
    ]
};

var work = [
    {
    "title" : "Marking Assistant",
    "employer" : "Grand Park Kumon",
    "dates" : "November 2015 - Present",
    "location" : "Mississauga, ON",
    "description" : "Cooperate with fellow employees to mark several students' homework and assignments provided by the Kumon program for mathematics and english. Occasionaly have to give feedback to the students on their performance and advice to improve their skills."
    }
];

var projects = {
    "projects" :[ {
        "title" : "LIBestimote",
        "dates" : "November 2015",
        "description" : "An android app that emulates a library system, including a login system, book finder and checkout system, using Estimore beacons and android studio. This project was created by Nathan Jiang, Diana Chang, Alicia Yu and I as an entry to the hackathon HackWestern 2.",
        "images" : ["images/lib2.png","images/lib1.png"],
        "url" : "https://github.com/sas5580/LIBestimote"
        },
        {
        "title": "Abstract Art Generator",
        "dates" : "December 2015",
        "description" : "Using python and its Tk interface module as a graphical user interface, abstract pixel art is generated at random base on a multitude of factors including pixel size, color and position. Patterns in the art are created through the use of nested periodic functions as the main factor in determining colour. Running the program will result in a different peice of art every (most of the) time.",
        "images" :["images/rng1.png","images/rng2.png","images/rng3.png"],
        "url" : "https://github.com/sas5580/Abstract-Art-Generator"
        }
        ]
};

projects.display = function(){
    for (i in projects.projects){
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
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%",work[i].location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%",work[i].description));
    }
}

function inName(name){
    var names = name.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    return names.join(" ");
}

$("#header").prepend(HTMLheaderRole.replace("%data%",role));
$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));

$("#topContacts").append(HTMLmobile.replace("%data%",bio.contactInfo.mobile));
$("#topContacts").append(HTMLemail.replace("%data%",bio.contactInfo.email));
$("#topContacts").append(HTMLgithub.replace("%data%",bio.contactInfo.github));
$("#topContacts").append(HTMLlocation.replace("%data%",bio.contactInfo.location));

$("#header").append(HTMLbioPic.replace("%data%",bio.pic));
//$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));

if (bio.skills.length>0){
    $("#header").append(HTMLskillsStart);
    for (i in bio.skills){
        $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
    }
}

displayWork();

projects.display();


for (i in education.schools){
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[i].name)+HTMLschoolDegree.replace("%data%",education.schools[i].program));
    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[i].city));
    $(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[i].dates));
    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%","Candiate to receive the International Baccalaureate diploma"));
}

$("#education").append(HTMLonlineClasses);
for (i in education.online_courses){
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(HTMLonlineTitle.replace("%data%",education.online_courses[i].title)+HTMLonlineSchool.replace("%data%",education.online_courses[i].school));
    $(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.online_courses[i].date));
    $(".education-entry:last").append(HTMLonlineDescription.replace("%data%",education.online_courses[i].description));
}

$("#footerContacts").append(HTMLmobile.replace("%data%",bio.contactInfo.mobile));
$("#footerContacts").append(HTMLemail.replace("%data%",bio.contactInfo.email));
$("#footerContacts").append(HTMLgithub.replace("%data%",bio.contactInfo.github));
$("#footerContacts").append(HTMLlocation.replace("%data%",bio.contactInfo.location));