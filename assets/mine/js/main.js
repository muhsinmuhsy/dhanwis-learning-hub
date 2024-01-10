


function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

  document.querySelectorAll('.fadeInUp').forEach(element => {
    observer.observe(element);
  });



    


  