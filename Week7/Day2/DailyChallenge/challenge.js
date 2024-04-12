// Instructions

//     Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
//     In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
//     In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
//     The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
//     Allow the user to delete a specific gif by clicking the DELETE button.
//     Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    let inputValue = document.getElementById('inputField').value;
    let params = {
        q: inputValue,
        limit: 1,
    };
    let apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
    let url = `https://api.giphy.com/v1/gifs/random?tag=${params.q}&api_key=${apiKey}`;
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayGif(data); // Displaying the GIF
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));

    function displayGif(data) {
        const gifContainer = document.getElementById('gifContainer');
        const imageSize = '200px'; 
        
        // Create the GIF element
        const gifElement = document.createElement('div');
        gifElement.classList.add('gif-item');

        // Create the image element
        const img = document.createElement('img');
        img.src = data.data.images.original.url;
        img.alt = data.data.title;
        img.style.width = imageSize;
        img.style.height = imageSize;
        gifElement.appendChild(img);

        // Create the category element
        const category = document.createElement('p');
        category.textContent = `Category: ${inputValue}`;
        gifElement.appendChild(category);

        // Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            gifContainer.removeChild(gifElement);
        });
        gifElement.appendChild(deleteButton);

        gifContainer.appendChild(gifElement);
    }
});

        
