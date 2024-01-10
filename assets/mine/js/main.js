// function fadeInUp() {
//     var fadeInUps = document.querySelectorAll(".fadeInUp",".backInLeft");
  
//     for (var i = 0; i < fadeInUps.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = fadeInUps[i].getBoundingClientRect().top;
//       var elementVisible = 150;
  
//       if (elementTop < windowHeight - elementVisible) {
//         fadeInUps[i].classList.add("active");
//       } else {
//         fadeInUps[i].classList.remove("active");
//       }
//     }
//   }
  
// window.addEventListener("scroll", fadeInUp);
function ScrollAnimation(event) {
    event.preventDefault(); // Prevent default scroll behavior
  
    var elements = document.querySelectorAll(".backInLeft, .backInRight, .fadeInUp, .flipInX, .shakeX, .zoomIn");
  
    for (var i = 0; i < elements.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = elements[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        elements[i].classList.add("active");
      } else {
        elements[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", ScrollAnimation);
  