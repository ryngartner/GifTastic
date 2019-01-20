// function renderButtons() {
   
// };


$("button").on("click", function() {
  var person = $(this).attr("data-seinfeld");
  
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=dc6zaTOxFJmzC&limit=10";

  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function(response) {
          var results = response.data;
          console.log(response);
          for (var i = 0; i < results.length; i++) {
			// var seinfeldDiv = $("<div>");
            // if (results[i].rating !== "r") {
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var personImage = $("<img>");

			//add data-still and data-animate 
				personImage.attr("src", results[i].images.fixed_height_still.url);
				personImage.attr("data-still", results[i].images.fixed_height_still.url);
				personImage.attr("data-animate", results[i].images.fixed_height.url);
				personImage.attr("data-state", "still");
				personImage.addClass("gif");

			// image is appended to the div           
				gifDiv.append(personImage);
			// rating is appended to the div below the gif
				gifDiv.append(p);
			// new images will be place at the top of the page
                $("#container").prepend(gifDiv);
			};
			
// Click to animate - click to pause
	$("#container").on("click", ".gif", function(event){
event.preventDefault();

		var state = $(this).attr("data-state");
// toggle between animate and pause
		if (state === "still") {
			$(this).attr("src", $(this).attr("data-animate"));
			$(this).attr("data-state", "animate");
		}	else {
			$(this).attr("src", $(this).attr("data-still"));
			$(this).attr("data-state", "still");
		}
	})
          
        });
    });



   