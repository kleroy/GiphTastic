$("document").ready(function(){

    // Initial array of movies
    var flix = ["Scarface", "Casino", "Carlito's Way", "Mobsters", "Sugarhill", "Goodfellas", "A Bronx Tale", "The Untochables", "The Godfather"];
    function displayMovieInfo() {
        
                        var movie = $(this).attr("data-name");
                        var queryURL = "https://api.giphy.com/v1/gifs/search?q=mafia+movies&limit=6&api_key=rcrROVJt1Sx7Bnj0m4toq4fwemJoJwrd";
        
                        // Creating an AJAX call for the specific movie button being clicked
                        $.ajax({
                            url: queryURL,
                            method: "GET"
                        }).done(function (response) {
                                console.log(response)})
                        };
                        
