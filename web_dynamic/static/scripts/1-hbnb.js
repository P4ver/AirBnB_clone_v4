$(document).ready(function() {
    // Dictionary to store checked amenity IDs
    var checkedAmenities = {};

    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function() {
        var amenityId = $(this).data('id'); // Get the Amenity ID from data-id attribute
        var amenityName = $(this).data('name'); // Get the Amenity name from data-name attribute

        // Check if the checkbox is checked
        if ($(this).is(':checked')) {
            // Store the Amenity ID in the dictionary
            checkedAmenities[amenityId] = amenityName;
        } else {
            // Remove the Amenity ID from the dictionary
            delete checkedAmenities[amenityId];
        }

        // Update the h4 tag inside the div Amenities with the list of Amenities checked
        var amenitiesList = Object.values(checkedAmenities).join(', '); // Join the amenity names with a comma
        $('.amenities h4').text(amenitiesList); // Update the h4 tag text
    });
});
