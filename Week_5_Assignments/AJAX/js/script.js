const API_KEY = "LIVDSRZULELA";
const LIMIT = 8;

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const gifContainer = document.getElementById("gifContainer");

searchBtn.addEventListener("click", fetchGifs);

// Optional: press Enter to search
searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        fetchGifs();
    }
});

function fetchGifs() {
    const query = searchInput.value.trim();

    if (query === "") {
        alert("Please enter a search term");
        return;
    }

    gifContainer.innerHTML = ""; // clear old gifs

    const url = `https://api.tenor.com/v1/search?q=${query}&key=${API_KEY}&limit=${LIMIT}`;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            displayGifs(data.results);
        } else {
            console.error("Error fetching gifs");
        }
    };

    xhr.send();
}

function displayGifs(gifs) {
    gifs.forEach(gif => {
        const gifUrl = gif.media[0].gif.url;

        const col = document.createElement("div");
        col.className = "col-md-3 col-sm-6";

        const img = document.createElement("img");
        img.src = gifUrl;
        img.className = "img-fluid rounded";
        img.alt = "gif";

        col.appendChild(img);
        gifContainer.appendChild(col);
    });
}