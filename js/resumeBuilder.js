// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.
var bio = {
  "name": "Eileen Duffner",
  "role": "Web Developer",
  "contacts": {
    "mobile": "815-351-0892",
    "email": "eileenmduffner@gmail.com",
    "github": "eduffner",
    "linkedin": "",
    "blog": "",
    "twitter": "@eireeny",
    "location": "Chicago, IL"
  },
  "welcomeMsg": "Thank you for taking time to look over my resume.",
  "skills": [
    "programming", "JS", "Objective-C", "C++", "Java", "Python"
  ],
  "bioPic": "images/bioPic.jpg",
  "display": function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    function inName(name) {
      name = name.trim().split(" ");
      name[1] = name[1].toUpperCase();
      name[0] = name[0][0].toUpperCase() + name[0].slice(1).toLowerCase();

      return name[0] + " " + name[1];
    }
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);
    $("#main").append(internationalizeButton);

    for (var contact in bio.contacts) {
      var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
      formattedContact = formattedContact.replace("%contact%", contact);
      $("#topContacts").append(formattedContact);
      $("#footerContacts").append(formattedContact);
    }

    if (bio.skills.length > 0) {

      $("#header").append(HTMLskillsStart);

      for (i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
      }
    }
  }
};
var work = {
  "jobs": [{
    "employer": "WashU Computer Vision Lab",
    "title": "Research Assistant",
    "location": "St. Louis, MO",
    "dates": 2016,
    "description": " "
  }, {
    "employer": "WashU Advanced Algorithms",
    "title": "Head Teaching Assistant",
    "location": "St. Louis, MO",
    "dates": 2016,
    "description": " "
  }, {
    "employer": "Local Backhaul Networks",
    "title": "Junior Web Developer",
    "location": "Chesterfield, MO",
    "dates": 2015,
    "description": "At LBN, I worked as a web developer both individually and in a small team setting. My first project consisted of using HTML and CSS to improve the cosmetics of a web application. From there, my work scope was increased to include the full range of feature development work. I successfully designed, developed, and tested new features using PHP and JQuery on multiple inter-team projects. In later projects I optimized the site’s performance by implementing efficient calls to the application’s database."
  }, {
    "employer": "WashU Computer Science Department",
    "title": "Teaching Assistant",
    "location": "St. Louis, MO",
    "dates": "2012-2016",
    "description": " "
  }, {
    "employer": "WashU Athletic Center",
    "title": "Lifeguard",
    "location": "St. Louis, MO",
    "dates": "2011-2014",
    "description": " "
  }],
  "research": [{
    "employer": "WashU Psychology",
    "title": "Research Assistant",
    "location": "St. Louis, MO",
    "dates": 2011,
    "description": ""
  }, {
    "employer": "WashU Computer Science",
    "title": "Research Assistant",
    "location": "St. Louis, MO",
    "dates": 2011,
    "description": ""
  }, {
    "employer": "University of Chicago Pyschology",
    "title": "Research Assistant",
    "location": "Chicago, IL",
    "dates": 2012,
    "description": ""
  }],
  "display": function() {
    for (var job in work.jobs) {
      job = work.jobs[job];
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer =
        HTMLworkEmployer.replace("%data%", job.employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedDates = HTMLworkDates.replace("%data%", job.dates);
      $(".work-entry:last").append(formattedDates);

      var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
      $(".work-entry:last").append(formattedDescription);

    }
  }
};
var projects = {
  "projects": [{
    "title": "Project 1",
    "dates": "",
    "description": "",
    "images": [
      "",
      ""
    ]
  }, {
    "title": "P2",
    "dates": "",
    "description": "",
    "images": [
      "",
      ""
    ]
  }, {
    "title": "P3",
    "dates": "",
    "description": "",
    "images": [
      "",
      ""
    ]
  }],
  "display": function() {
    for (var project in projects.projects) {
      project = projects.projects[project];
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
      $("#project-entry:last").append(formattedTitle);

      var formattedDate = HTMLprojectDates.replace("%data%", project.dates);
      $("#project-entry:last").append(formattedDate);

      var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
      $("#project-entry:last").append(formattedDescription);

      if (project.images.length > 0) {
        for (var image in project.images) {
          var formattedImage = HTMLprojectTitle.replace("%data%", project.images[image]);
          $("#project-entry:last").append(formattedImage);
        }
      }
    }
  }
};
var education = {
  "schools": [{
    "name": "Washington University",
    "city": "St. Louis",
    "degree": "Bachelors",
    "majors": ["Philosopjy-Neuroscience-Psychology"],
    "minors": ["Computer Science", "Law"],
    "dates": 2013,
    "url": "http://www.wustl.edu"
  }, {
    "name": "Washington University",
    "city": "St. Louis",
    "degree": "Masters",
    "majors": ["Computer Science"],
    "dates": 2016,
    "url": "http://www.wustl.edu"
  }],
  "onlineCourses": [{
    "title": "Computer Systems I/II",
    "school": "DePaul University",
    "dates": 2014,
    "url": "http://www.cdm.depaul.edu/academics/pages/classinfo.aspx?Term=20152&ClassNbr=20106&fid=46928"
  }, {
    "title": "Front-End Web Development",
    "school": "Udacity",
    "dates": 2016,
    "url": "http://www.udadcity.com"
  }],
  "display": function() {
    for (var edu in education.schools) {
      edu = education.schools[edu];
      $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%", edu.name);
      $(".education-entry:last").append(formattedName);

      var formattedCity = HTMLschoolLocation.replace("%data%", edu.city);
      $(".education-entry:last").append(formattedCity);

      var formattedMajor = HTMLschoolMajor.replace("%data%", edu.majors);
      $(".education-entry:last").append(formattedMajor);

    }
  }
};

$("#mapDiv").append(googleMap);

bio.display();
education.display();
work.display();
projects.display();