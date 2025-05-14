// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Arbin",
  middleName: "",
  lastName: "Zaman",
  message: " Focusing Something New Executing On Next Year. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/arbinzaman",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/arbin.zaman.90/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/zamanarbin/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/zamanarbin/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/ArbinZaman",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/ArbinZaman2.jpg"),
  imageSize: 400,
  message:
    "Hey There!! I'm a passionate JavaScript developer with a strong focus on React and Node.js. Over the past years, I've honed my skills in building dynamic, user-friendly web applications that provide seamless user experiences. My journey in web development has been fueled by a deep curiosity for technology and a drive to continually learn and improve.",
  resume:
    "https://drive.google.com/file/d/1nZckFr8A_unwuXD4w0hLQscE_TINsbI7/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "arbinzaman", //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: [
    
  ],
  // specificRepos: ["Coding-Hero", "repo-20" ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/ArbinZaman2.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/ArbinZaman2.jpg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "React", value: 90 },
    { name: "Typescript", value: 75 },
    { name: "MongoDB", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "TailWind", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "MySql", value: 80 },
  ],
  softSkills: [
    { name: "Photography", value: 90 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Videography", value: 80 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Part-time Web Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "arbinzmn@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: "Front-End Developer(Intern)", // Here Add Company Name
      companylogo: require("../editable-stuff/uniechLogo.jpg"),
      date: "March 2023 – June 2023",
    },
    {
      role: "Front-End Developer(Contract)",
      companylogo: require("../editable-stuff/Rahimafrooz Logo.png"),
      date: "May 2024- Present",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
