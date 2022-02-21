const input = document.getElementById("input");
const button = document.getElementById("button");
const root = document.getElementById("root");

const getTVShows = async () => {
    try {
        const searchTerm = input.value
        const config = {params: {q: searchTerm}}
        const res = await axios.get("https://api.tvmaze.com/search/shows?q=", config)
        const TVShows = res.data;
        console.log(TVShows);
        TVShows.forEach(TVShow => {
            if (TVShow.show.image) {
                const newImg = document.createElement("img");
                const imgSrc = TVShow.show.image.medium;
                newImg.src = imgSrc;
                root.append(newImg);
            }
        });


    } catch (err) {
        console.log(err, "oops error");
    }
}

button.addEventListener("click", () => {
    root.innerHTML=""
    getTVShows();
})