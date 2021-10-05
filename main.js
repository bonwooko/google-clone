// ***** Search function *****
const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
  if (event.code === "Enter") {
    search();
  }
});

function search() {
  const input = searchInput.value;

  window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C5CHFA_enNZ948NZ948&oq=" + input + "&aqs=chrome.0.69i59l2j46i175i199i433j46i199i291i433j46j0i433j0j69i60.875j0j9&sourceid=chrome&ie=UTF-8"
}


// ***** Dark Mode function *****
const darkMode = document.querySelector('.toggle')

darkMode.addEventListener('click', () => {
  // header
  const body = document.body
  const navs = document.querySelectorAll('.nav-link')
  const cShadows = document.querySelectorAll('.circle-shadow')

  body.classList.toggle('dark-bg')
  navs.forEach((nav) => {
    nav.classList.toggle('dark-mode')
  })
  cShadows.forEach((cShadow) => {
    cShadow.classList.toggle('dark-sd')
  })

  // content
  const input = document.querySelector('.search-input')
  const bar = document.querySelector('.search-bar')
  const icons = document.querySelectorAll('.fas')
  const searchBtns = document.querySelectorAll('.btn')
  const language = document.querySelector('.language')
  
  input.classList.toggle('dark-input')
  bar.classList.toggle('dark-bar')
  icons.forEach((icon) => {
    icon.classList.toggle('dark-icon')
  })
  searchBtns.forEach((btn) => {
    btn.classList.toggle('dark-btn')
  })
  language.classList.toggle('dark-lang')

  // footer
  const footer = document.querySelector('.footer')
  const upperFooter = document.querySelector('.upper-footer')

  footer.classList.toggle('dark-footer')
  upperFooter.classList.toggle('dark-upper')
})