  // JavaScript to change navbar color on scroll
  window.addEventListener('scroll', function() {
      var navbar = document.querySelector('.navbar');
      if(window.scrollY > 50) {
          navbar.classList.add('navbar-scrolled');
      } else {
          navbar.classList.remove('navbar-scrolled');
      }
  })


// navbar content scroll
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
      link.addEventListener("click", function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          const yOffset = -120; // Adjust this value according to your layout
          
          if (targetElement) {
              const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({top: y, behavior: 'smooth'});
          }
      });
  });
});



//JS Tabs
function showContent(contentId, accordionId) {
    const accordion = document.getElementById(accordionId);

    // Hide all sub-contents in the accordion
    accordion.querySelectorAll('.sub-content').forEach(content => {
        content.classList.remove('active');
    });

    // Display the clicked sub-content
    const activeContent = accordion.querySelector(`#${contentId}-${accordionId}`);
    if (activeContent) {
        activeContent.classList.add('active');
    }

    // Toggle 'active' class for sub-tabs
    accordion.querySelectorAll('.sub-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('onclick').includes(`${contentId}`, `${accordionId}`)) {
            tab.classList.add('active');
        }
    });
}

function toggleAccordion(accordionId) {
    const accordion = document.getElementById(accordionId);
    const arrow = accordion.querySelector('.accordion-arrow');
    const anyActive = accordion.querySelector('.sub-content.active');

    if (anyActive) {
        // Hide all sub-contents
        accordion.querySelectorAll('.sub-content').forEach(content => {
            content.classList.remove('active');
        });
        // Reset sub-tabs
        accordion.querySelectorAll('.sub-tab').forEach(tab => tab.classList.remove('active'));
        arrow.textContent = 'Λ'; // Up arrow
    } else {
        // Show default content
        const firstSubContent = accordion.querySelector('.sub-content');
        if (firstSubContent) {
            firstSubContent.classList.add('active');
        }
        const firstSubTab = accordion.querySelector('.sub-tab');
        if (firstSubTab) {
            firstSubTab.classList.add('active');
        }
        arrow.textContent = 'V'; // Down arrow
    }
}



// JS counters
$(document).ready(function () {
  // Function to animate count
  function animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          obj.innerHTML = Math.floor(progress * (end - start) + start) + "+";
          if (progress < 1) {
              window.requestAnimationFrame(step);
          }
      };
      window.requestAnimationFrame(step);
  }

  // Call animateValue function for each counter
  $('.count-numbers').each(function () {
      let valueTo = parseInt($(this).attr('data-to'));
      let speed = parseInt($(this).attr('data-speed'));
      animateValue(this, 0, valueTo, speed);
  });
});


// JS Testmonials Section
document.addEventListener('DOMContentLoaded', function() {
  const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  const intervalTime = 3000;

  function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
          testimonial.classList.toggle('active', i === index);
          dots[i].classList.toggle('active', i === index);
      });
  }

  function nextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
  }

  let interval = setInterval(nextTestimonial, intervalTime);

  // Optional: add click event to dots for manual control
  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          clearInterval(interval); // Stop the automatic sliding when a dot is clicked
          currentIndex = index;
          showTestimonial(currentIndex);
          interval = setInterval(nextTestimonial, intervalTime); // Restart the automatic sliding
      });
  });
});
