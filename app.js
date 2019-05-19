$(document).ready(function () {
    var animalList = ['Lion', 'Panther', 'Bear', 'Wolf', 'Dragon'];

    function createButtons() {
        $("#butto").empty();
        for (var i = 0; i < animalList.length; i++) {
            var z = $("<button class='btn btn-danger'>");
            z.addClass('buttonz');
            z.attr("animal-datas", animalList[i]);
            z.text(animalList[i]);
            $('#butto').append(z);
        }
        var buttons = $('<button>');
        buttons.text(name);
        $('#gifs').append(buttons);
    }
    createButtons();




    $('#go').on('click', function (event) {
        var x = $("#searches").val().trim();
        animalList.push(x);
        createButtons();

    })
    //for (var i = 0; i < animalList.length; i++) {
    //   buttonArray.addClass('buttonz');
    //   createButton(animalList[i]);



    function animalGif() {
        var x = $(this).attr("animal-datas");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=MxnLV5kR63nHOzzmJChyjmne0HSEmZs2&limit=10";
        $.ajax({ url: queryURL, method: "GET" })
            .then(function (response) {
                for (var i = 0; i < response.data.length; i++) {
                    var animalDiv = $('<div>');
                    var p = $('<p>').text("Rating: " + response.data[i].rating);
                    var animalImage = $('<img>');
                    animalImage.attr('src', response.data[i].images.fixed_height.url);
                    animalDiv.append(p);
                    animalDiv.append(animalImage);
                    $('#gifs').prepend(animalDiv);
                    animalImage.attr("data-still", response.data[i].images.fixed_height_still.url);
                    animalImage.attr("data-animate", response.data[i].images.fixed_height.url);
                    animalImage.attr("data-state", "still");
                    animalImage.attr("class", "gif");
                    console.log(response);
                }
            })

    }
    $(document).on('click', ".buttonz", animalGif);

    $('#searches').on('click', function (event) {
        $('#gifs').empty();
        (event).preventDefault();
        var animalz = $('#searches').val().trim();
        animalList.push(animalz);
        //   buttonArray ();
        console.log(animalList);


    });



    // buttonArray(animalList);
});

