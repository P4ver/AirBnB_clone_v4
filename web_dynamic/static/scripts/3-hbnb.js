// Wait for the DOM to be fully loaded
$(document).ready(function() {
    // Send a POST request to places_search endpoint
    $.ajax({
        type: "POST",
        url: "http://0.0.0.0:5001/api/v1/places_search/",
        contentType: "application/json",
        data: JSON.stringify({}), // Send an empty dictionary
        success: function(response) {
            // Loop through the result
            response.forEach(function(place) {
                // Create an article tag for each place
                var article = $("<article>");

                // Append place details to the article tag
                article.html(
                    "<div class='title_box'>" +
                    "<h2>" + place.name + "</h2>" +
                    "<div class='price_by_night'>$" + place.price_by_night + "</div>" +
                    "</div>" +
                    "<div class='information'>" +
                    "<div class='max_guest'>" + place.max_guest + " Guest" + (place.max_guest !== 1 ? "s" : "") + "</div>" +
                    "<div class='number_rooms'>" + place.number_rooms + " Bedroom" + (place.number_rooms !== 1 ? "s" : "") + "</div>" +
                    "<div class='number_bathrooms'>" + place.number_bathrooms + " Bathroom" + (place.number_bathrooms !== 1 ? "s" : "") + "</div>" +
                    "</div>" +
                    "<div class='description'>" +
                    place.description +
                    "</div>"
                );

                // Append the article tag to the section with class 'places'
                $(".places").append(article);
            });
        },
        error: function(xhr, status, error) {
            console.error("Error:", error);
        }
    });
});
