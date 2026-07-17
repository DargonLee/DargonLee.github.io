(function () {
  // Mobile nav
  var nav = document.querySelector(".site-nav");
  var toggle = document.querySelector(".nav-toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll(".nav-links a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var aurora = document.getElementById("bg-aurora");
  if (!aurora || reduceMotion) return;

  // Cursor spotlight + parallax orbs
  var targetX = 0.5;
  var targetY = 0.3;
  var currX = 0.5;
  var currY = 0.3;
  var rafId = 0;

  function applyParallax() {
    currX += (targetX - currX) * 0.08;
    currY += (targetY - currY) * 0.08;

    var px = (currX - 0.5) * 40;
    var py = (currY - 0.5) * 28;

    aurora.style.setProperty("--mx", currX * 100 + "%");
    aurora.style.setProperty("--my", currY * 100 + "%");
    aurora.style.setProperty("--px", px.toFixed(2) + "px");
    aurora.style.setProperty("--py", py.toFixed(2) + "px");

    rafId = requestAnimationFrame(applyParallax);
  }

  window.addEventListener(
    "pointermove",
    function (e) {
      targetX = e.clientX / window.innerWidth;
      targetY = e.clientY / window.innerHeight;
    },
    { passive: true }
  );

  rafId = requestAnimationFrame(applyParallax);

  // Twinkling stars
  var stars = document.getElementById("bg-stars");
  if (stars) {
    var starCount = window.innerWidth < 700 ? 28 : 48;
    var frag = document.createDocumentFragment();
    for (var i = 0; i < starCount; i++) {
      var s = document.createElement("span");
      s.className = "bg-star" + (i % 7 === 0 ? " is-bright" : "");
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.setProperty("--dur", 2 + Math.random() * 4 + "s");
      s.style.setProperty("--delay", Math.random() * 5 + "s");
      frag.appendChild(s);
    }
    stars.appendChild(frag);
  }

  // Occasional meteors
  var meteors = document.getElementById("bg-meteors");
  if (meteors) {
    function spawnMeteor() {
      if (document.hidden) {
        scheduleMeteor();
        return;
      }
      var m = document.createElement("span");
      m.className = "bg-meteor";
      m.style.left = 20 + Math.random() * 75 + "%";
      m.style.top = Math.random() * 35 + "%";
      m.style.setProperty("--dur", 0.9 + Math.random() * 0.9 + "s");
      meteors.appendChild(m);
      window.setTimeout(function () {
        m.remove();
      }, 2200);
      scheduleMeteor();
    }

    function scheduleMeteor() {
      var wait = 1800 + Math.random() * 4200;
      window.setTimeout(spawnMeteor, wait);
    }

    scheduleMeteor();
  }

  // Pause heavy work when tab is hidden
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      cancelAnimationFrame(rafId);
    } else {
      rafId = requestAnimationFrame(applyParallax);
    }
  });
})();
