// ""hg
// hg

document.addEventListener("DOMContentLoaded", function () {
  var mapObject = document.getElementById("india-map");

  mapObject.addEventListener("load", function () {
    var svgDoc = mapObject.contentDocument;

    var all = svgDoc.querySelectorAll(".states path");

    const popup = document.getElementById("popup");

    all.forEach(function (state) {
      state.addEventListener("click", function () {
        var stateName = state.getAttribute("name");
        alert("you clicked on " + stateName);
      });

      const originalColor = state.getAttribute("fill");

      state.addEventListener("mouseover", function (event) {
        this.style.cursor = "pointer";
        state.setAttribute("fill", "white");

        ////////////////////////////////////// working on state-name-popup //////////////////////////////////////

        const state_name = state.getAttribute("name");
        popup.innerText = state_name;
        popup.style.display = "block";

        const mouseX = event.clientX;
        const mouseY = event.clientY;
        popup.style.left = mouseX + 350 + "px";
        popup.style.top = mouseY + 20 + "px";
      });

      state.addEventListener("mouseout", function () {
        this.style.cursor = "default";
        this.setAttribute("fill", originalColor);
        popup = document.getElementById("popup");
        popup.style.display = "none";
      });
    });
  });
});
