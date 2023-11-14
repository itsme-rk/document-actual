function openFullScreenPhoto() {
    window.open(
      "https://actionnetwork.org/forms/for-all-animals-protection-pledge",
      "_blank",
      "fullscreen=yes"
    );
  }
  
  function toggleDropdown() {
    var dropdown = document.getElementById("dropdownContent");
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  }
  
  
  window.onclick = function (event) {
    if (!event.target.closest(".user-circle")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === "block") {
          openDropdown.style.display = "none";
        }
      }
    }
  };
  
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  window.onscroll = function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };
  