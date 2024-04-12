// 🌟 Exercise 1 : Giphy API
// Instructions

// With your knewly accumulated knowledge of the Fetch API lets write some cool code!

//     You will work with this part of the documention

//     You will use this Gif URL: 
// https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

// Explanation of the Gif URL and the queries

//     q Request Parameter: Search query term or phrase. Above, the URL is searching for “hilarious” gifs

//     rating Request Parameter: Filters results by specified rating. We are searching for Level 1 gifs. Check out the ratings documentation

//     api_key Request Paramater : GIPHY API Key. Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

//     Create a program to retrieve the data from the API URL provided above.
//     Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
//     Make sure to check the status of the Response and to catch any occuring errors.

let apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
let params = {
    q: 'sun',
    limit: 10,
    offset: '2',
    rating: 'g',
  };

  let url = 'https://api.giphy.com/v1/gifs/search?q=' + params.q + '&limit=' + params.limit + '&offset=' + params.offset + '&rating=' + params.rating + '&api_key=' + apiKey;
  let options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
}
fetch(url, options)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
    console.log(data); // Logging the data
    displayGifs(data); // Displaying the GIFs
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error));

    // 🌟 Exercise 2 : Giphy API
    // Instructions
    
    //     Read carefully the documention to understand all the possible queries that the URL accept.
    //     Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
    //     Make sure to check the status of the Response and to catch any occuring errors.
    //     Console.log the Javascript Object that you receive.
    

function displayGifs(data) {
    const gifContainer = document.getElementById('gifContainer');
    const imageSize = '200px'; // Adjust this value as needed
    
    data.data.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif.images.original.url;
        img.alt = gif.title;
        img.style.width = imageSize;
        img.style.height = imageSize;
        gifContainer.appendChild(img);
    });
}