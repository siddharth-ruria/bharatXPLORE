// ""
<<<<<<< Updated upstream
// hg""
=======
//  
>>>>>>> Stashed changes
// ''

document.addEventListener("DOMContentLoaded", function () {
  var mapObject = document.getElementById("india-map");
  mapObject.addEventListener("load", function () {
    var svgDoc = mapObject.contentDocument;

    var all = svgDoc.querySelectorAll(".states path");

    all.forEach(function (state) {
      state.addEventListener("click", function () {
        var pathName = state.getAttribute("name");
        alert("you clicked on " + pathName);
      });

      const originalColor = state.getAttribute("fill");

      state.addEventListener("mouseenter", function () {
        state.setAttribute("fill", "white");
      });

      state.addEventListener("mouseleave", function () {
        this.setAttribute("fill", originalColor);
      });
    });
  });
});
