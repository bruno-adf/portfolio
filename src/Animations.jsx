window.addEventListener('scroll', reveal);

function reveal() {
  
  var animations = ['.fadeUp', '.fadeDown', '.fadeLeft', '.fadeRight']

  for(var i = 0; i < animations.length; i++){

    var reveals = document.querySelectorAll(animations[i])

    for (var y = 0; y < reveals.length; y++) {
      var windowHeight = window.innerHeight
      var revealTop = reveals[y].getBoundingClientRect().top;
      var revealPoint = 150

      if (revealTop < windowHeight - revealPoint) {
        reveals[y].classList.add('active')
      } else {
        reveals[y].classList.remove('active')
      }
    }
  }
}
var x = 0
const animateLandingIcons = () => {
  var icons = document.querySelectorAll('.landingIcon')
  if (x < icons.length){
    icons[x].classList.add('iconAnimate')
    console.log(icons[x].className)
    x++
  }
}
var renderAnimations = setInterval(animateLandingIcons, 200)