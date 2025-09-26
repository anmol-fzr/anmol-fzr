<div>
  <h1 align="center" >I`m Anmol</h1>
  <p align="center" >Full-stack web developer and student</p>
</div>
<div>
  <h2>What I Do?</h2>
  <p align="left" >Full Stack Web Developer</p>
  <p>I'm a Full-stack web developer who mainly focuses
    <br>on performance and resource optimisation.I work 
    <br>with modern technologies like NextJS, Tailwind CSS,
    <br>Tailwind CSS, and NodeJS.
  </p>
</div>
<div>
  <h2>Skills</h2>

  <table>
  <tr>
    <td> <img height="32" width="32" src="https://raw.githubusercontent.com/anmol-fzr/anmol-fzr/master/src/icons/html.svg" /> <p align="left" >HTML 5</p> </td>
    <td> <img height="32" width="32" src="https://raw.githubusercontent.com/anmol-fzr/anmol-fzr/master/src/icons/css.svg" /> <p align="left" >CSS 3</p> </td>
    <td> <img height="32" width="32" src="https://raw.githubusercontent.com/anmol-fzr/anmol-fzr/master/src/icons/js.svg" /> <p align="left" >Javascript</p> </td>
  </tr>
   <tr>
  <td> <img height="32" width="32" src="https://raw.githubusercontent.com/anmol-fzr/anmol-fzr/master/src/icons/ts.svg" /> <p align="left" >Typescript</p> </td>
  <td> <img height="32" width="32" src="https://raw.githubusercontent.com/anmol-fzr/anmol-fzr/master/src/icons/astro.svg" /> <p align="left" >Astro</p> </td>
  <td> <img height="32" width="32" src="https://raw.githubusercontent.com/anmol-fzr/anmol-fzr/master/src/icons/reactjs.svg" /> <p align="left" >React JS</p> </td>
     </tr>
   <tr>
  <td> <img height="32" width="32" src="https://raw.githubusercontent.com/anmol-fzr/anmol-fzr/master/src/icons/nextjs.svg" /> <p align="left" >Next JS</p> </td>
  <td> <img height="32" width="32" src="https://raw.githubusercontent.com/anmol-fzr/anmol-fzr/master/src/icons/nodejs.svg" /> <p align="left" >Node JS</p> </td>
  <td> <img height="32" width="32" src="https://raw.githubusercontent.com/anmol-fzr/anmol-fzr/master/src/icons/mongodb.svg" /> <p align="left" >Mongo DB</p> </td>
    </tr>
   <tr>
  <td> <img height="32" width="32" src="https://raw.githubusercontent.com/anmol-fzr/anmol-fzr/master/src/icons/git.svg" /> <p align="left" >Git</p> </td>
  </tr>
   <tr>
  </table>
</div>
<div>
  <h2>Projects</h2>
  <div>
    <table>
  <tr>
    <td>
      <a href="https://supervisainsurancequote.ca/" target="_blank" >
        <img src="https://raw.githubusercontent.com/anmol-fzr/anmol-fzr/master/public/projects/sviq.webp"  />
      </a>
    </td>
    <td> 
      <a href="https://supervisainsurancequote.ca/" target="_blank" >
        <img src="https://raw.githubusercontent.com/anmol-fzr/anmol-fzr/master/public/projects/sviq-admin.webp"  />
      </a>
    </td> 
  </tr>
      <tr >
    <td> 
      <a href="https://vimaanvihar.com/" target="_blank" >
        <img src="https://raw.githubusercontent.com/anmol-fzr/anmol-fzr/master/public/projects/vimanvihaar.webp"  />
      </a>
      </td>
  </tr>
</table>
</div>
</div>

<div>
    <h2>Experience</h2>
    <div>
      <h3>Community</h3>
      <p>Web Development Lead @ GDSC SBSSU ( August 2023 - present )</p>
    </div>
    <div>
      <h3>Open Source Contribution</h3>
      <a href="https://github.com/chaynhq/bloom-frontend" >chaynHQ/bloom-frontend</a>
      <br>
      <a href="https://github.com/Farzin-Firoozi/react-modern-drawer">Farzin-Firoozi/react-modern-drawer</a>
    </div>
     <div>
      <h3>Internship</h3>
       <p>Full Stack Web Developer @ Buildup Communication ( September 2023 - November 2023 )</p>
       <p>Full Stack Web Dev Intern @ Buildup Communication ( June 2023 - August 2023 )</p>
    </div>
   <div>
      <h3>Hackathon</h3>
       <p>UDYAM: Soar to Shine ( May 2023 - )</p>
       <p>Codevista 2.0 ( March 2023 - )</p>
       <p>SBSSU Samrt Hackathon ( Feb 2023 - )</p>
    </div>
</div>



<a href="https://withanmol.com/">Portfolio</a>
<a href="https://blog.withanmol.com/">Blog</a>
<a href="https://resume.withanmol.com/">Resume</a>
<a href="https://linkedin.withanmol.com/">Linked in</a>
<a href="https://github.withanmol.com/">Github</a>
<a href="https://codepen.withanmol.com/">Codepen</a>


/*@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,700;1,400&display=swap");*/

/*@config "../tailwind.config.mjs"*/

@import "tailwindcss"

/*@tailwind base;*/
/*@tailwind components;*/
/*@tailwind utilities;*/


@theme {
  --latte-primary: #e6e9ef;
  --mocha-primary: #181825;

  --clr-primary: var(--mocha-primary);
  --clr-secondary: #cba6f7;
  --clr-text: #cdd6f4;
  --clr-accent: #f5e0dc;


  /*Keyframes*/

  --animate-fade-out-down: fade-out-down linear forwards;

  @keyframes fade-out-down {
    0% {
      opacity: 1;
      transform: translateY(0);
    }

    100% {
      opacity: 0;
      transform: translateY(40%);
    }
  }

}

/*@layer base {*/
/**/
/*  input[type="number"]::-webkit-inner-spin-button,*/
/*  input[type="number"]::-webkit-outer-spin-button {*/
/*    -webkit-appearance: none;*/
/*    margin: 0;*/
/*  }*/
/*}*/

* {
  transition: all 0.15s ease-in-out;
}

/*:root {*/
/*  --latte-primary: #e6e9ef;*/
/*  --mocha-primary: #181825;*/
/**/
/*  --clr-primary: var(--mocha-primary);*/
/*  --clr-secondary: #cba6f7;*/
/*  --clr-text: #cdd6f4;*/
/*  --clr-accent: #f5e0dc;*/
/*}*/
/**/
/*:root:has(#latte:checked) {*/
/*  --clr-primary: var(--latte-primary);*/
/*  --clr-secondary: #8839ef;*/
/*  --clr-accent: #502cdd;*/
/*  --clr-text: #181825;*/
/*}*/
/**/
/*:root:has(#mocha:checked) {*/
/*  --clr-primary: var(--mocha-primary);*/
/*  --clr-secondary: #cba6f7;*/
/*  --clr-text: #cdd6f4;*/
/*  --clr-accent: #f5e0dc;*/
/*}*/

body {
  @apply bg-primary text-text;
  font-family: "Rubik", sans-serif;
}

::selection {
  @apply bg-white/5 text-secondary;
}

a {
  @apply hover:text-secondary;
}

html {
  scroll-behavior: smooth;
}

.input-styles {
  @apply w-full p-3 px-6 text-white border rounded-md outline-none placeholder:normal-case focus:outline-none border-white/25 focus:border-white/75 bg-primary/75;
}

::-webkit-scrollbar {
  height: 4px;
  width: 5px;
}

::-webkit-scrollbar-track {
  border-radius: 0px;
  background-color: #000;
}

::-webkit-scrollbar-track:hover {
  background-color: #000;
}

::-webkit-scrollbar-track:active {
  background-color: #000;
}

::-webkit-scrollbar-thumb {
  border-radius: 24px;
  background-color: #fff;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #fff;
}

::-webkit-scrollbar-thumb:active {
  background-color: #fff;
}

.color-picker>fieldset {
  border: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: fit-content;
  background: #b4befe;
  padding: 1rem;
  border-radius: 2rem;
}

.color-picker input[type="radio"] {
  appearance: none;
  width: 1rem;
  height: 1rem;
  outline: 2px solid var(--radio-color, currentColor);
  outline-offset: 2px;
  border-radius: 50%;
}

.color-picker input[type="radio"]:checked {
  background-color: var(--radio-color);
}

.color-picker input[type="radio"]#latte {
  --radio-color: var(--latte-primary);
}

.color-picker input[type="radio"]#mocha {
  --radio-color: var(--mocha-primary);
}

.nav-container {
  @apply w-full sticky backdrop-blur-sm z-10;
}

.theme-screen-w {
  @apply w-full max-w-screen-2xl mx-auto;
}
