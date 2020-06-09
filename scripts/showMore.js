function showMore1() {
    var dots = document.getElementById("plattsmap-dots");
    var moreText = document.getElementById("plattsmap-more");
    var btnText = document.getElementById("read-more-plattsmap");
    var container = document.getElementById("plattsmap-description")
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
      container.style.height = "400px";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
      container.style.height = "auto"
    }
  }

  function showMore2() {
    var dots = document.getElementById("club-hub-dots");
    var moreText = document.getElementById("club-hub-more");
    var btnText = document.getElementById("read-more-club-hub");
    var container = document.getElementById("club-hub-description")
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
      container.style.height = "400px";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
      container.style.height = "auto"
    }
  }