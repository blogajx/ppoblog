// Function to load navbar, sidebar, footer, etc.
document.addEventListener("DOMContentLoaded", function () {
    const basePath = window.location.origin; // e.g. https://pixelradar.online

    // fetch(basePath + "/navbar.html")
    //     .then(response => response.text())
    //     .then(data => {
    //         document.getElementById("navbar-container").innerHTML = data;
    //     })
    //     .catch(error => console.error("Error loading the Header:", error));
    
    fetch(basePath + "/share-button.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sharebutton-container-page").innerHTML = data;
        })
        .catch(error => console.error("Error loading the share button:", error));
    
    // fetch(basePath + "/related-post.html")
    //     .then(response => response.text())
    //     .then(data => {
    //         document.getElementById("relatedpost-container-page").innerHTML = data;
    //     })
    //     .catch(error => console.error("Error loading related post:", error));

    // fetch(basePath + "/sponsored.html")
    //     .then(response => response.text())
    //     .then(data => {
    //         document.getElementById("sponsored-container").innerHTML = data;
    //     })
    //     .catch(error => console.error("Error loading sponsored:", error));
    
    fetch(basePath + "/sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar-container-page").innerHTML = data;
        })
        .catch(error => console.error("Error loading sidebar:", error));

    // fetch(basePath + "/sidebar-top.html")
    //     .then(response => response.text())
    //     .then(data => {
    //         document.getElementById("sidebar-container-page-head").innerHTML = data;
    //     })
    //     .catch(error => console.error("Error loading the Sidebar Top:", error));
    
    fetch(basePath + "/author.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("author-information").innerHTML = data;
        })
        .catch(error => console.error("Error loading the author information:", error));

    fetch(basePath + "/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading the footer:", error));
});