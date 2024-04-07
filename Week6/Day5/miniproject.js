document.addEventListener('DOMContentLoaded', function() { //this event occurs when all the HTML structure is loaded, but before the external files are loaded
    const robots = [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          image: 'https://robohash.org/1?200x200'
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          image: 'https://robohash.org/2?200x200'
        },
        {
          id: 3,
          name: 'Clementine Bauch',
          username: 'Samantha',
          email: 'Nathan@yesenia.net',
          image: 'https://robohash.org/3?200x200'
        },
        {
          id: 4,
          name: 'Patricia Lebsack',
          username: 'Karianne',
          email: 'Julianne.OConner@kory.org',
          image: 'https://robohash.org/4?200x200'
        },
        {
          id: 5,
          name: 'Chelsey Dietrich',
          username: 'Kamren',
          email: 'Lucio_Hettinger@annie.ca',
          image: 'https://robohash.org/5?200x200'
        },
        {
          id: 6,
          name: 'Mrs. Dennis Schulist',
          username: 'Leopoldo_Corkery',
          email: 'Karley_Dach@jasper.info',
          image: 'https://robohash.org/6?200x200'
        },
        {
          id: 7,
          name: 'Kurtis Weissnat',
          username: 'Elwyn.Skiles',
          email: 'Telly.Hoeger@billy.biz',
          image: 'https://robohash.org/7?200x200'
        },
        {
          id: 8,
          name: 'Nicholas Runolfsdottir V',
          username: 'Maxime_Nienow',
          email: 'Sherwood@rosamond.me',
          image: 'https://robohash.org/8?200x200'
        },
        {
          id: 9,
          name: 'Glenna Reichert',
          username: 'Delphine',
          email: 'Chaim_McDermott@dana.io',
          image:'https://robohash.org/9?200x200'
        },
        {
          id: 10,
          name: 'Clementina DuBuque',
          username: 'Moriah.Stanton',
          email: 'Rey.Padberg@karina.biz',
          image:'https://robohash.org/10?200x200'
        }
        ];

    function displayAllItems() {  //this function displays all items from const robots
        displayItems(robots);
    }
    
    function displayItems(items) { //this function is working for the div with id="searchResults", is showing cards with data from const robots
        const searchResults = document.getElementById('searchResults');
        searchResults.innerHTML = '';

        items.forEach(item => {
            const card = `
                <div class="col-md-3">
                    <div class="card">
                        <img src="${item.image}" class="card-img-top" alt="${item.name}">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text">${item.username}</p>
                            <p class="card-text">${item.email}</p>
                        </div>
                    </div>
                </div>
            `;
            searchResults.innerHTML += card;
        });
    }

    const searchForm = document.getElementById('searchForm'); //this function is working for the form with id="searchForm", and it is filtering data from const robots by data from input
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form deafault submission

        const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
        const filteredItems = robots.filter(item => item.name.toLowerCase().includes(searchTerm));
        displayItems(filteredItems);
    });

    // Initial display of all items
    displayAllItems(); //this function displays all items after all actions above done
});