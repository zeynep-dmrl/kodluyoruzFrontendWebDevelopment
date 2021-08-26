const searchEl = document.querySelector("#search");

document.getElementById("searchbtn")
    .onclick = function () {
        searchquery = searchEl.value;
        if (searchquery.length == 0) {
            return false;
        } else {
            window.location = `https://www.google.com/search?q=${searchquery}`;
        }
    };
