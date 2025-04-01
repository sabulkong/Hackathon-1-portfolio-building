// JavaScript for dynamic behavior

// Function to change navigation bar color on scroll
window.onscroll = function() {
    changeNavBarColor();
};

function changeNavBarColor() {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

// Function to handle contact form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    alert("Thank you for reaching out! I will get back to you shortly.");
    document.getElementById("contact-form").reset(); // Reset form after submission
});
