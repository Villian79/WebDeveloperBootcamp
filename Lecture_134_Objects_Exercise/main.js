var movies = [
    {
        title: "Motherland",
        rating: 5,
        hasWatched: true
    },
    {
        title: "House of Cards",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Watch the Wolves",
        rating: 4.5,
        hasWatched: true
    },
    {
        title: "Les Miserables",
        rating: 3.5,
        hasWatched: false
    }
];
for(var i = 0; i < movies.length; i++){
    if(movies[i].hasWatched){
        console.log("I have watched " + "\"" + movies[i].title + "\"" + " - " + movies[i].rating + " stars");
    }
    else {
        console.log("I have not seen " + "\"" + movies[i].title + "\"" + " - " + movies[i].rating + " stars");
    }
}
