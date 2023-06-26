// Function to handle country change
function handleCountryChange() {
    var countrySelect = document.getElementById("country-select");
    var selectedCountry = countrySelect.value;
  
    if (selectedCountry === "UAE") {
      window.location.href = "../UAE.html";
    } else if (selectedCountry === "Canada") {
      window.location.href = "canada/index.html";
    } else if (selectedCountry === "Jordan") {
      window.location.href = "jordan/index.html";
    }
  }
  
  // Redirect to Medication Page
  function redirectToMedication(url) {
    window.location.href = url;
  }
  
  // Initialize AOS library
  AOS.init({
    duration: 1000,
    once: true
  });
  
  // Check if an element is in the viewport
  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
    return (
      rect.top <= windowHeight && rect.bottom >= 0
    );
  }
  
  // Add the fade-in class to elements as they enter or exit the viewport
  function handleScroll() {
    var elements = document.getElementsByClassName("fade-in");
  
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
  
      if (isElementInViewport(element)) {
        element.classList.add("fade-in-active");
      } else {
        element.classList.remove("fade-in-active");
      }
    }
  }
  
  // Detect scroll event
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
  
  // Call handleScroll initially to check for elements in view on page load
  handleScroll();
  
  // DOMContentLoaded event listener
  document.addEventListener('DOMContentLoaded', function () {
    // Get all medicine elements
    const medicines = document.querySelectorAll('.medicine');
  
    // Attach click event listener to each medicine element
    medicines.forEach(function (medicine) {
      medicine.addEventListener('click', function () {
        const url = medicine.dataset.url;
        redirectToMedication(url);
      });
    });
  });
  