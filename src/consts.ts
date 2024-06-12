import data from "./config.json"

const skills = data.skills;
const footLinks = data.links;

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
    to: "/#projects",
    text: "Projects",
    mobile: false,
  },
  {
    to: "/#experience",
    text: "Experience",
    mobile: false,
  },
  {
    to: "/#contact",
    text: "Contact",
    mobile: false,
  },
  {
    target: "_blank",
    to: data.resume,
    text: "Resume",
    mobile: true,
  },
] as const;

export {
  footLinks,
  contactFields,
  linksArray,
  skills,
};
