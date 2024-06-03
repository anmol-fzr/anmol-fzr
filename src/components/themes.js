console.log("Exece")



const themes = {
  light: {
    primary: "#fff",
    secondary: "#cba6f7",
    accent: "#502cdd",
    text: "#181825",
  },
  dark: {
    primary: "#181825",
    secondary: "#cba6f7",
    accent: "#502cdd",
    text: "#fff",
  }
}

const setTheme = (theme) => {
  const currTheme = themes[theme]
  Object.keys(currTheme).forEach(key => document.documentElement.style.setProperty(`--${key}-clr`, currTheme[key]))
}

const isSystemOnDark = () => window.matchMedia("(prefers-color-scheme: dark)").matches

if (!localStorage.getItem("theme")) {
  const newTheme = isSystemOnDark() ? "dark" : "light"
  localStorage.setItem("theme", "light")
  setTheme(newTheme)
}

const btn = document.getElementById("toggle-theme")

btn.onclick = () => {
  const theme = localStorage.getItem("theme")
  localStorage.setItem("theme", theme === "light" ? "dark" : "light")
  setTheme(theme)
}

const disTheme = localStorage.getItem("theme")
setTheme(disTheme)

