// Animated Text on Home

var textWrapper = document.querySelector('.header-text p');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.header-text p .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 5000,
    delay: (el, i) => 70*i
  })