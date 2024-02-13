document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navbar a, .navbar-2 .social .return a");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); 
            const targetId = this.getAttribute("href"); 
            const targetElement = document.querySelector(targetId); 

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sidebarLinks = document.querySelectorAll(".sidebar a");
    const sidebar = document.getElementById("sidebar");

    sidebarLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); 
            const targetId = this.getAttribute("href"); 
            const targetElement = document.querySelector(targetId); 

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
                sidebar.classList.remove("active");
            }
        });
    });

    document.getElementById("sidebarToggle").addEventListener("click", function() {
        sidebar.classList.toggle("active");
    });

    document.getElementById("sidebarToggleClose").addEventListener("click", function() {
        sidebar.classList.remove("active");
    });

    document.addEventListener("click", function(event) {
        if (!sidebar.contains(event.target) && !document.getElementById("sidebarToggle").contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });
});
