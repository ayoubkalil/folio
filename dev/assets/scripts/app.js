import MM from "./modules/GetInTouch";
import GIT from "./modules/Menu";
import ROS from "./modules/RevealOnScroll";
import FH from "./modules/FixedHeader";
import Typed from "typed.js";
import portfoliofilter from "./modules/PortfolioFilter";
import portfolioGallery from "./modules/PortfolioGallery";

//initializing typed title

var typed = new Typed('.hero__title strong', {
  strings: ["Ayoub","Full Stack Dev" , "Designer" , "Creative"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 750,
  showCursor:false,
  loop:true

});

//mobile menu script
let mm = new MM();

//get in touch 

let git = new GIT();

// reveal elemnts on scroll using waypoints

let skills = new ROS(".skills__inner","80%",true);
let services = new ROS(".service-item","80%");
let portfolio = new ROS(".browser","80%");
let testimonials = new ROS(".testimonial","80%");

// sticky header 

let fh = new FH();



// portfolio gallery
let folioGallery = new portfolioGallery(projects,'#portfolio .grid' , '.section__folioFillter');
// portfolio filter

let filter = new portfoliofilter();