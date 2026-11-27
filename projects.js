/* =====================================================
   projects.js  -  THIS IS THE ONLY FILE YOU NEED TO EDIT
   (this whole file was written by the "Make Changes" section)
   ===================================================== */

// Your GitHub profile link (don't change unless your username changes)
const GITHUB_USER = "https://github.com/likhithlikki/";

// Your GitHub Pages address (used to build every "View Website" link)
const GITHUB_PAGES = "https://likhithlikki.github.io/";

/* ---------- FAVORITES (always pinned, on every device) ----------
   Write the repo name of any project you want pinned at the top.
   Example: const FAVORITES = ["resume", "polutry_farm"];
   Remove a name from this list to unpin it.
   TIP: you don't need to type this by hand. Use the "Make Changes"
   button on the website: it writes this whole file for you. */
const FAVORITES = ["EXAM","-Farm-Equipment-Rental-Management-System-","College-Academic-Event-Management-System","simple-gate-tests","MULTI-USERS--EVENTPAY","phone-activity","resume","sairaj"];

/* ---------- PROJECTS ----------
   To add a new project, copy ONE line, paste it at the top of the
   list, and change the values:
     icon  = any emoji
     name  = title shown on the card
     desc  = short description
     repo  = exact GitHub repo name
     live  = website link. "" = automatic (GITHUB_PAGES + repo name),
             "none" = no website button, or paste a full link
     lang  = HTML / JavaScript / Python ... (or "")
   Keep the comma at the end of every line except the last one. */
const projects = [
 {icon:"🐔",name:"polutry_farm",desc:"Poultry farm website.",repo:"polutry_farm",live:"https://likhithlikki.github.io/polutry_farm/",lang:"HTML"},
 {icon:"🔌",name:"gpio_control",desc:"Shell scripts to control GPIO pins.",repo:"gpio_control",live:"",lang:"Shell"},
 {icon:"📱",name:"phone-activity",desc:"Phone activity web app.",repo:"phone-activity",live:"https://likhithlikki.github.io/phone-activity/",lang:"JavaScript"},
 {icon:"📍",name:"Phone-Tracker",desc:"Phone tracking project.",repo:"Phone-Tracker",live:"",lang:"JavaScript"},
 {icon:"🛰️",name:"tracker_app",desc:"Tracker application.",repo:"tracker_app",live:"",lang:"JavaScript"},
 {icon:"📝",name:"EXAM",desc:"Online exam project.",repo:"EXAM",live:"",lang:"JavaScript"},
 {icon:"🧪",name:"simple-gate-tests",desc:"Simple GATE practice tests.",repo:"simple-gate-tests",live:"",lang:"HTML"},
 {icon:"🎯",name:"gate-mocktests",desc:"GATE mock tests.",repo:"gate-mocktests",live:"",lang:"JavaScript"},
 {icon:"🎓",name:"GATE",desc:"GATE preparation project.",repo:"GATE",live:"",lang:"JavaScript"},
 {icon:"💳",name:"MULTI-USERS--EVENTPAY",desc:"Multi-user event payments system.",repo:"MULTI-USERS--EVENTPAY",live:"",lang:"HTML"},
 {icon:"🌟",name:"sairaj",desc:"Sairaj web project.",repo:"sairaj",live:"",lang:"HTML"},
 {icon:"🚜",name:"Farm Equipment Rental Management System",desc:"Manage farm equipment rentals.",repo:"-Farm-Equipment-Rental-Management-System-",live:"",lang:"JavaScript"},
 {icon:"🎉",name:"College Academic Event Management System",desc:"Manage college academic events.",repo:"College-Academic-Event-Management-System",live:"",lang:"JavaScript"},
 {icon:"📋",name:"BOARD-MANAGE",desc:"Board management web app.",repo:"BOARD-MANAGE",live:"",lang:"HTML"},
 {icon:"💰",name:"Event-Payments-2.0",desc:"Event payments, version 2.0.",repo:"Event-Payments-2.0",live:"",lang:"JavaScript"},
 {icon:"📡",name:"Gate-Ece",desc:"GATE ECE preparation.",repo:"Gate-Ece",live:"",lang:""},
 {icon:"🎀",name:"Raksha-bhandan",desc:"Wish you happy Rakhi!",repo:"Raksha-bhandan-",live:"",lang:"CSS"},
 {icon:"🎂",name:"happy-birthday",desc:"Birthday wishes page.",repo:"happy-birthday",live:"",lang:"CSS"},
 {icon:"📄",name:"resume",desc:"My resume as a web page.",repo:"resume",live:"https://likhithlikki.github.io/resume/",lang:"HTML"},
 {icon:"🐍",name:"django",desc:"My PyAutoGUI work in web pages.",repo:"django",live:"https://likhithlikki.github.io/django/",lang:"Python"},
 {icon:"🗄️",name:"database",desc:"My database work in web pages.",repo:"database",live:"",lang:"HTML"}
];
