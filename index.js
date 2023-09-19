const lightMode = document.querySelector(".light-mode-btn");
const darkMode = document.querySelector(".dark-mode-btn");
const signupBtn = document.querySelector(".header-signup-btn");
const formOverlay = document.querySelector(".form-overlay");
const body = document.body;


darkMode.addEventListener("click", () => {
    lightMode.classList.remove("active")
    darkMode.classList.add("active");
    body.classList.add("dark-theme");
});
// Dark Mode Ends Here

// Light Mode Starts here
lightMode.addEventListener("click", () => {
    lightMode.classList.add("active")
    darkMode.classList.remove("active");
    body.classList.remove("dark-theme");
});

signupBtn.addEventListener("click", ()=>{
    formOverlay.classList.add("active");
})
formOverlay.addEventListener("click", ()=>{
    formOverlay.classList.remove("active");
})

