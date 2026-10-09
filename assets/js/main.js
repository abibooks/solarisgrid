
document.addEventListener("DOMContentLoaded", function(){
  const year = document.querySelectorAll("[data-year]");
  year.forEach(el => el.textContent = new Date().getFullYear());

  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if(href === path || (path === "" && href === "index.html")) link.classList.add("active");
  });

  const forms = document.querySelectorAll(".needs-validation");
  forms.forEach(form => {
    form.addEventListener("submit", function(e){
      if(!form.checkValidity()){
        e.preventDefault(); e.stopPropagation();
      }
      form.classList.add("was-validated");
    });
  });
});
