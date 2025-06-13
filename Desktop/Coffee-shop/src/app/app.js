const themeToggle = document.querySelector("#toggle-theme");

themeToggle.addEventListener("click", () => {
  if (localStorage.theme == "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

const themeChange = () => {
  if (localStorage.theme == "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
