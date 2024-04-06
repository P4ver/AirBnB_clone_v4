$(document).ready(function() {
    // Make an AJAX request to get the API status
    $.ajax({
        type: 'GET',
        url: 'http://0.0.0.0:5001/api/v1/status/',
        success: function(response) {
            // Check if the status is "OK"
            if (response.status === "OK") {
                // Add the class "available" to the div#api_status
                $('#api_status').addClass('available');
            } else {
                // Remove the class "available" from the div#api_status
                $('#api_status').removeClass('available');
            }
        },
        error: function(error) {
            // If there's an error, remove the class "available"
            $('#api_status').removeClass('available');
        }
    });
});
