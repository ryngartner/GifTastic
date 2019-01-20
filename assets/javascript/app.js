
var seinfeld = [];
var button;
var seinfeldCharacter = "";

var buttonGenerator = function(){
	$("#buttonArea").empty();
	for(i = 0; i < seinfeld.length; i++) {
		button = $("<button type=" + "button" + ">" + seinfeld[i] + "</button>").addClass("btn btn-warning").attr("data",seinfeld[i]);
		$("#buttonArea").append(button);
	};
}

$("#add-seinfeld").on("click", function(event){
	event.preventDefault();
	// console.log("#add-seinfeld");s
	seinfeldCharacter = $("#seinfeld-input").val();
	seinfeld.push(seinfeldCharacter);
	// console.log(seinfeld);

	buttonGenerator();


})

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
			
// Click to animate - Click to pause
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
	
// buttonGenerator();



   