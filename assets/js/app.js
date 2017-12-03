var queryUrl = "http://api.giphy.com/v1/gifs/search?q=scarface&limit=6&api_key=rcrROVJt1Sx7Bnj0m4toq4fwemJoJwrd";

$.ajax({
    url: queryUrl,
    method: "GET"
    
}).done(function (response){
    console.log(response);

    var dataResponse = response.data;
    dataResponse.forEach(function(item) {

        var imgURL = item.images.original.url;
        var myImg = $("<img>");
        myImg.attr("src", imgURL);
        $("#applause").append(myImg);
        
    });
})