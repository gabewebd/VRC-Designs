document.addEventListener("DOMContentLoaded", function () {
  
  const hamburgerIcon = document.getElementById('hamburgerIcon');
  const mobileMenu = document.getElementById('mobileMenu');

  // Function to toggle mobile menu and hamburger icon
  hamburgerIcon.addEventListener('click', function () {
    mobileMenu.classList.toggle('active'); // Toggle mobile menu
    hamburgerIcon.classList.toggle('active'); // Toggle hamburger to X icon
  });

  // Function to close the mobile menu when clicking outside of it
  document.addEventListener('click', function (event) {
    const isClickInside = mobileMenu.contains(event.target) || hamburgerIcon.contains(event.target);

    // If the click is outside the mobile menu and hamburger icon, close the menu
    if (!isClickInside && mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      hamburgerIcon.classList.remove('active'); // Ensure hamburger returns to normal
    }
  });


  var vrcLogoContainer = document.getElementById("vrcLogoContainer");
  if (vrcLogoContainer) {
    vrcLogoContainer.addEventListener("click", function () {
      var anchor = document.querySelector(
        "[data-scroll-to='homeSectionContainer']"
      );
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  }

  var homeContainer = document.getElementById("homeContainer");
  if (homeContainer) {
    homeContainer.addEventListener("click", function () {
      var anchor = document.querySelector(
        "[data-scroll-to='homeSectionContainer']"
      );
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  }

  var aboutContainer = document.getElementById("aboutContainer");
  if (aboutContainer) {
    aboutContainer.addEventListener("click", function () {
      var anchor = document.querySelector(
        "[data-scroll-to='aboutSectionContainer']"
      );
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  }

  var servicesContainer = document.getElementById("servicesContainer");
  if (servicesContainer) {
    servicesContainer.addEventListener("click", function () {
      var anchor = document.querySelector(
        "[data-scroll-to='servicesSectionContainer']"
      );
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  }

  var projectsContainer = document.getElementById("projectsContainer");
  if (projectsContainer) {
    projectsContainer.addEventListener("click", function () {
      var anchor = document.querySelector(
        "[data-scroll-to='projectsSectionContainer']"
      );
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  }


  var contactContainer = document.getElementById("contactContainer");
  if (contactContainer) {
    contactContainer.addEventListener("click", function () {
      var anchor = document.querySelector(
        "[data-scroll-to='contactSectionContainer']"
      );
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  }

  var homeContainer = document.getElementById("hamHomeContainer");
  if (homeContainer) {
    homeContainer.addEventListener("click", function () {
      var anchor = document.querySelector(
        "[data-scroll-to='homeSectionContainer']"
      );
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  }

  var aboutContainer = document.getElementById("hamAboutContainer");
  if (aboutContainer) {
    aboutContainer.addEventListener("click", function () {
      var anchor = document.querySelector(
        "[data-scroll-to='aboutSectionContainer']"
      );
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  }

  var servicesContainer = document.getElementById("hamServicesContainer");
  if (servicesContainer) {
    servicesContainer.addEventListener("click", function () {
      var anchor = document.querySelector(
        "[data-scroll-to='servicesSectionContainer']"
      );
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  }

  var projectsContainer = document.getElementById("hamProjectsContainer");
  if (projectsContainer) {
    projectsContainer.addEventListener("click", function () {
      var anchor = document.querySelector(
        "[data-scroll-to='projectsSectionContainer']"
      );
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  }


  var contactContainer = document.getElementById("hamContactContainer");
  if (contactContainer) {
    contactContainer.addEventListener("click", function () {
      var anchor = document.querySelector(
        "[data-scroll-to='contactSectionContainer']"
      );
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  }

  var buttonsBrownContainer = document.getElementById("buttonsBrownContainer");
  if (buttonsBrownContainer) {
    buttonsBrownContainer.addEventListener("click", function () {
      window.open(
        "https://drive.google.com/drive/folders/1aUU4z3rIu7fPvRggRIKemJL1j9aJZ_A7?usp=sharing"
      );
    });
  }

  var buttonsRedContainer = document.getElementById("buttonsRedContainer");
  if (buttonsRedContainer) {
    buttonsRedContainer.addEventListener("click", function () {
      window.open(
        "https://www.facebook.com/profile.php?id=100011104877211&mibextid=ZbWKwL"
      );
    });
  }

  var buttonOpenTabRedContainer1 = document.getElementById("buttonOpenTabRedContainer1");
  if (buttonOpenTabRedContainer1) {
      buttonOpenTabRedContainer1.addEventListener("click", function () {
          window.open("https://drive.google.com/drive/folders/1aUU4z3rIu7fPvRggRIKemJL1j9aJZ_A7?usp=drive_link");
      });
  }

  var buttonOpenTabBrownContainer = document.getElementById("buttonOpenTabBrownContainer");
  if (buttonOpenTabBrownContainer) {
      buttonOpenTabBrownContainer.addEventListener("click", function () {
          window.open("https://drive.google.com/drive/folders/1aUU4z3rIu7fPvRggRIKemJL1j9aJZ_A7?usp=drive_link");
      });
  }

  var buttonOpenTabRedContainer2 = document.getElementById("buttonOpenTabRedContainer2");
  if (buttonOpenTabRedContainer2) {
      buttonOpenTabRedContainer2.addEventListener("click", function () {
          window.open(" https://drive.google.com/drive/folders/1aUU4z3rIu7fPvRggRIKemJL1j9aJZ_A7?usp=drive_link");
      });
  }

  var symbolsvgIcon = document.getElementById("symbolsvgIcon");
  if (symbolsvgIcon) {
    symbolsvgIcon.addEventListener("click", function () {
      window.open(
        "https://www.facebook.com/profile.php?id=100011104877211&mibextid=ZbWKwL"
      );
    });
  }

  var gmailSymbolsvgIcon = document.getElementById("gmailSymbolsvgIcon");
  if (gmailSymbolsvgIcon) {
    gmailSymbolsvgIcon.addEventListener("click", function () {
      window.open(
        "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzBWSZfxDzLFsjxMvTnWZggPzKqPqXqvmCZHQXCTTghkDxKgsLZjQsRvVnXFVtHwNTKXkdG"
      );
    });
  }

  var contactContainer = document.getElementById("contactContainer");
  if (contactContainer) {
    contactContainer.addEventListener("click", function () {
      var anchor = document.querySelector(
        "[data-scroll-to='envisionCardsContainer']"
      );
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  }

  var buttonsBrownContainer = document.getElementById("buttonsBrownContainer");
  if (buttonsBrownContainer) {
    buttonsBrownContainer.addEventListener("click", function () {
      window.open(
        "https://drive.google.com/drive/folders/1aUU4z3rIu7fPvRggRIKemJL1j9aJZ_A7?usp=sharing "
      );
    });
  }

  var footerHomeContainer = document.getElementById("footerHomeContainer");
  if (footerHomeContainer) {
    footerHomeContainer.addEventListener("click", function () {
      var anchor = document.querySelector(
        "[data-scroll-to='homeSectionContainer']"
      );
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  }

  var footerAboutContainer = document.getElementById("footerAboutContainer");
  if (footerAboutContainer) {
    footerAboutContainer.addEventListener("click", function () {
      var anchor = document.querySelector(
        "[data-scroll-to='aboutSectionContainer']"
      );
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  }

  var footerServicesContainer = document.getElementById(
    "footerServicesContainer"
  );
  if (footerServicesContainer) {
    footerServicesContainer.addEventListener("click", function () {
      var anchor = document.querySelector(
        "[data-scroll-to='servicesSectionContainer']"
      );
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  }

  var footerProjectsContainer = document.getElementById(
    "footerProjectsContainer"
  );
  if (footerProjectsContainer) {
    footerProjectsContainer.addEventListener("click", function () {
      var anchor = document.querySelector(
        "[data-scroll-to='projectsSectionContainer']"
      );
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  }

  var footerContactContainer = document.getElementById("footerContactContainer");
  if (footerContactContainer) {
    footerContactContainer.addEventListener("click", function () {
      var anchor = document.querySelector(
        "[data-scroll-to='envisionCardsContainer']"
      );
      if (anchor) {
        anchor.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  }

  window.onload = setForm;


  function submitform(){
    var msg = "The following data would be sent to the server from the form:\n";
    total = document.survey.elements.length;

    for (i=0;i<total;i++) {
      box = document.survey.elements[i];
      if (box.value && box.value != "Send Information" && box.value != "Cancel") {
        msg = msg + box.name + " = " + box.value + "\n";
      }
    }

    alert(msg);
  }

  function setForm() {
     document.forms[0].onsubmit = function() {
        if (this.checkValidity()) alert("No invalid data detected. Will retain data for further testing.");
        return false;
     }
  }

});
