$(document).ready(function(){
    var animals = ["Lion", "Panther", "Bear", "Wolf", "Dragon"];
    $('#animal-button').append('<button>');
    $('button').on('click', function(){
        var x = $(this).data(animals);
        var queryURL = "http://api.giphy.com/v1/gifs/search?q="+x+"&api_key=MxnLV5kR63nHOzzmJChyjmne0HSEmZs2&limit=10";


        $.ajax({url:queryURL, method:"GET"})
            .done(function(response){
                for(var i=0;i<response.data.length;i++){
                    var animalDiv = $('<div>');
                    var p = $('<p>').text("Rating: "+response.data[i].rating);
                    var animalImage = $('<img>');
                    animalImage.attr('src', response.data[i].images.fixed_height.url);
                    animalDiv.append(p);
                    animalDiv.append(animalImage);
                    $('#gifs').prepend(animalDiv);
                }
            })
    })
    $(document).ready(function(){
        $("#gifs").on("click", function() {
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
              } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
              }
        });
    })
});