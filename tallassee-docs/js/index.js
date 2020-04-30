let tabsWithContent = (function () {
  let tabs = document.querySelectorAll('.tabs li');
  let tabsContent = document.querySelectorAll('.tab-content');

  let deactvateAllTabs = function () {
    tabs.forEach(function (tab) {
      tab.classList.remove('is-active');
    });
  };

  let hideTabsContent = function () {
    tabsContent.forEach(function (tabContent) {
      tabContent.classList.remove('is-active');
    });
  };

  let activateTabsContent = function (tab) {
    tabsContent[getIndex(tab)].classList.add('is-active');
  };

  let getIndex = function (el) {
    return [...el.parentElement.children].indexOf(el);
  };

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      deactvateAllTabs();
      hideTabsContent();
      tab.classList.add('is-active');
      activateTabsContent(tab);
    });
  })

  tabs[0].click();
})();


// ----- BURGER MENU -----
document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});

// ----- SMOOTH SCROLLING -----
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
      console.log(hash);
      /*
      if(hash == "#mission") {
        $("#nav-arrow-text").text("Team");
        $("#nav-arrow-link").attr("href","#team");
      }
      else if(hash == "#team") {
        $("#nav-arrow-text").text("Features");
        $("#nav-arrow-link").attr("href","#features");
      }
      else if(hash == "#features") {
        $("#nav-arrow-text").text("Branding");
        $("#nav-arrow-link").attr("href","#branding");
      }
      else if(hash == "#branding") {
        $("#nav-arrow-text").text("Launch");
        $("#nav-arrow-link").attr("href","#launch");
      }
      else if(hash == "#launch") {
        $("#nav-arrow-text").text("Back to Top");
        $("#nav-arrow-link").attr("href","#top");
        $("#nav-arrow-arrow").css("transform","rotate(180deg)");
      }
      else if(hash == "#top") {
        $("#nav-arrow-text").text("Our Mission");
        $("#nav-arrow-link").attr("href","#mission");
        $("#nav-arrow-arrow").css("transform","rotate(0deg)");
      }
      */
    } /*else {
      $("#nav-arrow-text").text("Our Mission");
      $("#nav-arrow-link").attr("href","#mission");
      $("#nav-arrow-arrow").css("transform","rotate(0deg)");
    }*/
  });
});

// ? SCROLL REVEAL

// ----- HOME ------
ScrollReveal().reveal('.image-1', {
  duration: 1000,
  origin: 'left',
  distance: '50px',
  delay: 200
});
ScrollReveal().reveal('.brand-container', {
  duration: 1000,
  origin: 'right',
  distance: '50px',
  delay: 300
});
ScrollReveal().reveal('#orlt-square', {
  duration: 1000,
  origin: 'top',
  distance: '30px',
  delay: 500
});
ScrollReveal().reveal('#orlt-text-1', {
  duration: 1000,
  origin: 'left',
  distance: '30px',
  delay: 600
});
ScrollReveal().reveal('#download-1', {
  duration: 500,
  origin: 'top',
  distance: '80px',
  delay: 1600
});
ScrollReveal().reveal('#download-2', {
  duration: 500,
  origin: 'top',
  distance: '80px',
  delay: 1700
});
ScrollReveal().reveal('#nav-arrow-1', {
  delay: 2200
});

ScrollReveal().reveal('.mobile-header-col-img', {
  duration: 1000,
  origin: 'left',
  distance: '50px',
  delay: 200
});
ScrollReveal().reveal('.brand-container-mobile', {
  duration: 1000,
  origin: 'right',
  distance: '50px',
  delay: 300
});


ScrollReveal().reveal('.mission-animation', {
  duration: 500,
  origin: 'top',
  distance: '30px',
  interval: 300
});

ScrollReveal().reveal('#team-subtitle', {
  duration: 400,
  origin: 'top',
  distance: '18px',
  delay: 200
});
ScrollReveal().reveal('.team-col', {
  duration: 300,
  origin: 'bottom',
  distance: '30px',
  delay: 500,
  interval: 100
});
ScrollReveal().reveal('.team-goal-text', {
  duration: 300,
  origin: 'left',
  distance: '30px',
  delay: 500,
  interval: 300
});

ScrollReveal().reveal('.feature-li', {
  duration: 300,
  origin: 'left',
  distance: '30px',
  delay: 500,
  interval: 300
});


/*
ScrollReveal().reveal('#mission-title', {
  duration: 500,
  origin: 'top',
  distance: '50px',
  delay: 300
});
ScrollReveal().reveal('#mission-desc', {
  duration: 400,
  origin: 'top',
  distance: '20px',
  delay: 800
})
ScrollReveal().reveal('.mission-col', {
  delay: 1300,
  interval: 500
});
ScrollReveal().reveal('#mission-desc2', {
  duration: 400,
  origin: 'left',
  distance: '20px',
  delay: 3500
});
ScrollReveal().reveal('#orlt-logo-1', {
  duration: 400,
  origin: 'right',
  distance: '20px',
  delay: 3800
});
ScrollReveal().reveal('#nav-arrow-2', {
  duration: 400,
  origin: 'top',
  distance: '20px',
  delay: 4100
});
*/


// ----- MISSION ------

/*
ScrollReveal().reveal('', {

});
*/