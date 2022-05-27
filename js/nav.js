const toggleButton = document.querySelector(".toggle-button")
console.log(toggleButton)

const navbarLinks = document.querySelector(".navbar-links")
console.log(navbarLinks)

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})