let menuVisible = false;
function showHideMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}
function select() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

function skillsEffect() {
  var skills = document.getElementById("skills");
  var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distance_skills >= 300) {
    let skls = document.getElementsByClassName("progress");
    skls[0].classList.add("javascript");
    skls[1].classList.add("htmlcss");
    skls[2].classList.add("react");
    skls[3].classList.add("cpp");
    skls[4].classList.add("communication");
    skls[5].classList.add("creativity");
    skls[6].classList.add("dedication");
    skls[7].classList.add("pm");
  }
}

window.onscroll = function () {
  skillsEffect();
};
