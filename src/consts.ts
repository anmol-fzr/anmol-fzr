const NAME = "Anmol"
const SITE_TITLE = NAME + ' | Expert Web Developer: Empowering Online Success';
const SITE_DESCRIPTION = 'Transforming Ideas into Digital Realities: Experience personalized web development solutions tailored to your unique vision. Our professional web developer crafts captivating websites with a focus on user experience, responsiveness, and flawless functionality. Discover how we can bring your online presence to life. Contact us for a consultation today.';
const SITE_KEYWORD = "javascript developer,web developer india, web developer means,google web developer,web developer gurgaon,web developer delhi,web developer punjab,web developer india,web developer banglore,web developer google, react developer, nextjs developer, tailwind css developer, web developer, frontend developer, software developer, UI/UX developer, responsive web design, web development services,web engineer,full stack javascript developer,mern stack developer,certified javscript developer"
const EMAIL = "anmoljan2005@gmail.com"


const skills = [
  "HTML 5",
  "CSS 3",
  "Javascript",
  "React JS",
  "Next JS",
  "Node JS",
  "Firebase",
  "PostgreSQL",
  "Mongo DB",
  "Typescript",
  "Git",
];
const projects = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/anmol-fzr.appspot.com/o/img.webp?alt=media&token=fb26093b-a998-44fb-b46d-56c682ceb14f",
    // tech: [icons.react, icons.tailwind],
    alt: "vimaanvihar"
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/anmol-fzr.appspot.com/o/vimanvihaar.webp?alt=media&token=11bc27bd-9adb-4b63-928b-b2c4ea118d7a",
    // tech: [icons.react, icons.tailwind],
    alt: "supervisainsurancequote"
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/anmol-fzr.appspot.com/o/sviq-admin.webp?alt=media&token=8e7a4634-6f40-4d79-b00a-3b95339f1493",
    // tech: [icons.react, icons.tailwind],
    alt: "supervisainsurancequoteadmin"
  },

] as const;
const footLinks = [
  {
    href: "https://github.com/anmol-fzr/anmol-fzr",
    text: "github",
    icon: "/icons/github.svg",
  },
  {
    href: "https://linkedin.com/in/anmol-fzr",
    text: "linkedin",
    icon: "/icons/linkedin.svg",
  },
  {
    href: "https://codepen.io/the-anmol",
    text: "codepen",
    icon: "/icons/codepen.svg",
  },
  {
    href: "mailto:anmoljan2005@gmail.com",
    text: "email",
    icon: "/icons/email.svg",
  },
] as const;
const internships = [
  {
    title: "Full Stack Web Developer",
    from: "June 2023",
    at: "",
    to: "August 2023",
  },
  {
    title: "Full Stack Web Dev Intern",
    from: "June 2023",
    at: "",
    to: "November 2023",
  },

] as const;
const hackathons = [
  {
    title: "SBSSU Samrt Hackathon",
    at: "Feb 2023",
    from: "",
    desc: "",
    to: "",
  },
  {
    title: "Codevista 2.0",
    at: "March 2023",
    from: "",
    desc: "",
    to: "",
  },
  {
    title: `UDYAM: Soar to Shine`,
    at: "May 2023",
    from: "",
    desc: "",
    to: "",
  },
] as const;
const community = [
  {
    title: "Web Development Lead @ GDSC SBSSU",
    from: "August 2023",
    at: "",
    desc: "",
    to: "present",
  }
] as const;
const experiences = [
  {
    name: "Community",
    data: community,
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
    pattern: "^[a-zA-Z]+(?:[\s'-][a-zA-Z]+)*$",
    error: "Enter a valid Name"
  },
  {
    name: "email",
    placeholder: "johndoe@example.com",
    type: "email",
    pattern: "/^[w-.]+@([w-]+.)+[w-]{2,4}$/g",
    error: "Enter a valid Email"
  },
  {
    name: "phone",
    placeholder: "XXXX-XXX-XXX",
    type: "number",
    pattern: "[3-9]{10}",
    error: "Enter a valid Phone Number"
  }
] as const;
const linksArray = [
  {
    to: "/blog",
    text: "Blogs"
  },
  {
    to: "/#services",
    text: "What I Do ?"
  },
  {
    to: "/#skills",
    text: "Skills"
  },
  {
    to: "/#experience",
    text: "Experience"
  },
  {
    to: "/#projects",
    text: "Projects"
  },
  {
    to: "/#contact",
    text: "Contact"
  },
  {
    target: "_blank",
    to: "https://drive.google.com/file/d/1xHq4o-C2UvxL3iyqAII2C6ohBWjQVwTG/view?usp=sharing",
    text: "Resume"
  }
] as const;

export { NAME, SITE_TITLE, SITE_DESCRIPTION, SITE_KEYWORD, footLinks, experiences, contactFields, EMAIL, linksArray, projects,skills }
