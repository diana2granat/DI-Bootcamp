document.getElementById("Form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission where the browser sending a request to the server
    
    const formData = {
        firstName: document.querySelector('input[name="firstName"]').value,
        lastName: document.querySelector('input[name="lastName"]').value
    };
    
    document.getElementById("output").innerText = JSON.stringify(formData);
});
