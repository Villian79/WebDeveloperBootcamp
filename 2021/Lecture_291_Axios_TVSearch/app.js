const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const showList = document.getElementById('showList');
    showList.innerHTML = '';
    const searchTerm = this.elements.query.value;
    const config = { params: { q: searchTerm } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);

    console.log(res.data);
    addImages(res.data);
    form.elements.query.value = '';
});

const addImages = function (shows) {
    const showList = document.getElementById('showList');
    for (let result of shows) {
        if (result.show.image) {
            const imgURL = result.show.image.medium;
            const showURL = result.show.url;
            const newLink = document.createElement('a');
            const newIMG = document.createElement('img');
            newLink.href = showURL;
            newIMG.src = imgURL;
            newLink.appendChild(newIMG);
            showList.appendChild(newLink);
        }
    }
};
