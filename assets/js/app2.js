$("document").ready(function(){

var flix = ["Scarface", "Casino", "Carlito's Way", "Mobsters", "Sugarhill", "Goodfellas", "A Bronx Tale", "The Untochables", "The Godfather"];
function renderButtons() {
    
            // Deleting the movie buttons prior to adding new movie buttons
            // (this is necessary otherwise we will have repeat buttons)
            $("#movies-view").empty();
    
            // Looping through the array offlix
            for (var i = 0; i <flix.length; i++) {
                console.log(this)
              // Then dynamicaly generating buttons for each movie in the array.
              // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
              var a = $("<button>");
              // Adding a class
              a.addClass("movie");
              // Adding a data-attribute with a value of the movie at index i
              a.attr("data-name",flix[i]);
              // Providing the button's text with a value of the movie at index i
              a.text(movies[i]);
              // Adding the button to the HTML
              $("#movies-view").append(a);
            }
          }
    $("button").on("click", function(){

        var checkFlix = $(this).attr("data-added");

    })
var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + checkFlix + "&limit=10&api_key=rcrROVJt1Sx7Bnj0m4toq4fwemJoJwrd";

$.ajax({
    url: queryUrl,
    method: "GET"
    
}).done(function (response){
    console.log(response);

    var dataResponse = response.data;
    dataResponse.forEach(function(item) {

        var imgURL = item.images.fixed_height_small.url;
        var myImg = $("<img>");
        myImg.attr("src", imgURL);
        $("#applause").append(myImg);
        
    });
});
})