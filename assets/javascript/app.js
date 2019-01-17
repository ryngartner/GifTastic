$("button").on("click", function() {
  var person = $(this).attr("data-seinfeld");

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=dc6zaTOxFJmzC&limit=10";

  $.ajax({
      url:queryURL,
      method: "GET"
  })
      .then(function(response) {
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            if (results[i].rating !== )
          }

      }









// // Function for displaying movie data
// function renderButtons() {

//     // Delete the content inside the movies-view div prior to adding new movies
//     // (this is necessary otherwise you will have repeat buttons)
//     $("#movies-view").html("");
//     // Loop through the array of movies, then generate buttons for each movie in the array
//     for(i = 0; i < movies.length; i++){
//       var buttons = $('<button>'+ movies[i] + '</button>') 
//       buttons.appendTo('#movies-view'); 
//     }

//   }

//     // This function handles events where the add movie button is clicked
//     $("#add-movie").on("click", function(event) {
//         // event.preventDefault() prevents submit button from trying to send a form.
//         // Using a submit button instead of a regular button allows the user to hit
//         // "Enter" instead of clicking the button if desired
//         event.preventDefault();

//         // Write code to grab the text the user types into the input field
//         // Write code to add the new movie into the movies array
//       var movie = $("#movie-input").val();
//       movies.push(movie);
//         // The renderButtons function is called, rendering the list of movie buttons
//         renderButtons();
//         console.log(movies);
//       });

//       // Calling the renderButtons function to display the initial list of movies
//       renderButtons();

//    // Generic function for capturing the movie name from the data-attribute
//    function alertMovieName() {
//     var movieName = $(this).attr("data-name");

//     alert(movieName);
//   }
//    // Creates AJAX call for the specific movie button being clicked
//    $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//     // Creates a div to hold the movie
//     var movieHold = $("<div>");
//     // Retrieves the Rating Data
//     console.log(response.Rated);         
//     // Creates an element to have the rating displayed
//     var ratingData = $("<p>" + response.Rated + "</p>");
//     // Displays the rating
//     movieHold.append(ratingData);
//     // Retrieves the release year
//     console.log(response.Year);
//     // Creates an element to hold the release year
//     var yearData = $("<p>" + response.Year + "</p>");
//     // Displays the release year
//     movieHold.append(yearData);
//     // Retrieves the plot
//     console.log(response.Plot);
//     // Creates an element to hold the plot
//     var plotData = $("<p>" + response.Plot + "</p>");
//     // Appends the plot
//     movieHold.append(plotData);
//     // Creates an element to hold the image
//     var imageData = $("<img src=" + response.Poster + ">");
//     // Appends the image
//     movieHold.append(imageData);
//     // Puts the entire Movie above the previous movies.
//     $("#movies-view").prepend(movieHold);
//     console.log(movieHold);
//   });
