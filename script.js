
document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.getElementById('language-toggle');
  toggle.addEventListener("click", function() {
    window.location.href = window.location.href.includes("en.html") ? "index.html" : "en.html";
  });

  const trainingBtn = document.getElementById("training-toggle");
  if (trainingBtn) {
    trainingBtn.addEventListener("click", () => {
      document.getElementById("training-plan").classList.toggle("active");
    });
  }
});
