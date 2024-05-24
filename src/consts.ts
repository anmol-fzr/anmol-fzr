import sviq from "./assets/sviq.webp";
import vimaanvihar from "./assets/vimanvihaar.webp";
import sviqAdmin from "./assets/sviq-admin.webp";

const BUC = "Buildup Communication"
const NAME = "Anmol";
const SITE_TITLE = NAME + " | Expert Web Developer: Empowering Online Success";
const SITE_DESCRIPTION =
  "Transforming Ideas into Digital Realities: Experience personalized web development solutions tailored to your unique vision. Our professional web developer crafts captivating websites with a focus on user experience, responsiveness, and flawless functionality. Discover how we can bring your online presence to life. Contact us for a consultation today.";
const SITE_KEYWORD =
  "javascript developer,web developer india, web developer means,google web developer,web developer gurgaon,web developer delhi,web developer punjab,web developer india,web developer banglore,web developer google, react developer, nextjs developer, tailwind css developer, web developer, frontend developer, software developer, UI/UX developer, responsive web design, web development services,web engineer,full stack javascript developer,mern stack developer,certified javscript developer";
const EMAIL = "anmoljan2005@gmail.com";

const skills = [
  { name: "HTML 5", icon: "html" },
  { name: "CSS 3", icon: "css" },
  { name: "Javascript", icon: "js" },
  { name: "Typescript", icon: "ts" },
  { name: "React JS", icon: "reactjs" },
  { name: "Next JS", icon: "nextjs" },
  { name: "Node JS", icon: "nodejs" },
  { name: "Mongo DB", icon: "mongodb" },
  { name: "Git", icon: "git" },
];
const projects = [
  {
    src: vimaanvihar,
    alt: "vimaanvihar",
  },
  {
    src: sviq,
    alt: "supervisainsurancequote",
  },
  {
    src: sviqAdmin,
    alt: "supervisainsurancequoteadmin",
  },
] as const;
const footLinks = [
  {
    href: "https://github.com/anmol-fzr/anmol-fzr",
    text: "github",
    icon: "github",
  },
  {
    href: "https://linkedin.com/in/anmol-fzr",
    text: "linkedin",
    icon: "linkedin",
  },
  {
    href: "https://codepen.io/the-anmol",
    text: "codepen",
    icon: "codepen",
  },
  {
    href: "mailto:anmoljan2005@gmail.com",
    text: "email",
    icon: "email",
  },
] as const;

const osc = [
  {
    title: "chaynHQ/bloom-frontend",
    href: "https://github.com/chaynhq/bloom-frontend",
    from: "",
    at: "",
    to: "",
  },
  {
    title: "Farzin-Firoozi/react-modern-drawer",
    href: "https://github.com/Farzin-Firoozi/react-modern-drawer#:~:text=anmol%2Dfzr",
    from: "",
    at: "",
    to: "",
  },
] as const;

const internships = [
  {
    title: "Full Stack Web Developer",
    from: "September 2023",
    at: BUC,
    to: "November 2023",
    href: "",
  },
  {
    title: "Full Stack Web Dev Intern",
    from: "June 2023",
    at: BUC,
    to: "August 2023",
    href: ""
  },
] as const;
const hackathons = [
  {
    title: `UDYAM: Soar to Shine`,
    at: "",
    from: "May 2023",
    desc: "",
    to: "",
    href: "",
  },
  {
    title: "Codevista 2.0",
    at: "",
    from: "March 2023",
    desc: "",
    to: "",
    href: "",
  },
  {
    title: "SBSSU Samrt Hackathon",
    at: "",
    from: "Feb 2023",
    desc: "",
    to: "",
    href: "",
  },
] as const;
const community = [
  {
    title: "Web Development Lead",
    from: "August 2023",
    at: "GDSC SBSSU",
    desc: "",
    to: "present",
    href: "",
  },
] as const;

const experiences = [
  {
    name: "Community",
    data: community,
  },
  {
    name: "Open Source Contribution",
    data: osc,
  },
  {
    name: "Internship",
    data: internships,
  },
  {
    name: "Hackathon",
    data: hackathons,
  },
] as const;
const contactFields = [
  {
    name: "name",
    placeholder: "John Doe",
    type: "text",
    pattern: "^[a-zA-Z]+(?:[s'-][a-zA-Z]+)*$",
    error: "Enter a valid Name",
  },
  {
    name: "email",
    placeholder: "johndoe@example.com",
    type: "email",
    pattern: "/^[w-.]+@([w-]+.)+[w-]{2,4}$/g",
    error: "Enter a valid Email",
  },
  {
    name: "phone",
    placeholder: "XXXX-XXX-XXX",
    type: "number",
    pattern: "[3-9]{10}",
    error: "Enter a valid Phone Number",
  },
] as const;

const linksArray = [
  {
    to: "/blog",
    text: "Blogs",
    mobile: true,
  },
  {
    to: "/#services",
    text: "What I Do ?",
    mobile: false,
  },
  {
    to: "/#skills",
    text: "Skills",
    mobile: false,
  },
  {
    to: "/#experience",
    text: "Experience",
    mobile: false,
  },
  {
    to: "/#projects",
    text: "Projects",
    mobile: false,
  },
  {
    to: "/#contact",
    text: "Contact",
    mobile: false,
  },
  {
    target: "_blank",
    to: "https://drive.google.com/file/d/1va3LtmOXzEbGeko_BAcrtc4LGdp-s8Jh/view?usp=sharing",
    text: "Resume",
    mobile: true,
  },
] as const;

export {
  NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_KEYWORD,
  footLinks,
  experiences,
  contactFields,
  EMAIL,
  linksArray,
  projects,
  skills,
};
