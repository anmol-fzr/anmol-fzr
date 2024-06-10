import data from "./config.json"

const NAME = "Anmol"
const JOB_TITLE = "Full-stack web developer and student"
const EMAIL = data.email;

const META = {
  TITLE: NAME + " | Expert Web Developer: Empowering Online Success",
  DESCRIPTION: `Transforming Ideas into Digital Realities: Experience personalized web development solutions tailored to your unique vision.
Our professional web developer crafts captivating websites with a focus on user experience, responsiveness, and flawless functionality.
Discover how we can bring your online presence to life. Contact us for a consultation today.`,
  KEYWORD: `javascript developer,web developer india, web developer means,google web developer,web developer gurgaon,web developer delhi,
  web developer punjab,web developer india,web developer banglore,web developer google, react developer, nextjs developer, tailwind css developer,
web developer, frontend developer, software developer, UI/UX developer, responsive web design, web development services,web engineer,full stack 
javascript developer,mern stack developer,certified javscript developer`,
  IMAGE: `/main.webp`,
  GOOGLE_SITE_VERIFICATION: "HziuWubW8xm3rCiQYFmw68QweNGkemSE69e3QOXJEco"
} as const

export { META, NAME, JOB_TITLE, EMAIL }
