document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navbar a, .navbar-2 a");

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

                // Chiudi la sidebar dopo aver fatto clic su un link
                document.getElementById("sidebar").classList.remove("active");
            }
        });
    });

    document.getElementById("sidebarToggle").addEventListener("click", function() {
        document.getElementById("sidebar").classList.toggle("active");
    });

    document.getElementById("sidebarToggleClose").addEventListener("click", function() {
        document.getElementById("sidebar").classList.remove("active");
    });
});
