document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    var formData = new FormData(this); // Get form data
    console.log("Form data:", formData); // Log form data to the console
});