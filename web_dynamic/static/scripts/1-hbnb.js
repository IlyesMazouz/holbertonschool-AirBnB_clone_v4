$(document).ready(function () {
	const selectedAmenities = {};

	$('.amenity-checkbox').change(function () {
		console.log("Checkbox changed");

		const amenityId = $(this).data('id');
		const amenityName = $(this).data('name');

		if ($(this).is(':checked')) {
			selectedAmenities[amenityId] = amenityName;
		} else {
			delete selectedAmenities[amenityId];
		}

		const selectedAmenitiesList = Object.values(selectedAmenities).join(', ');
		$('div.amenities > h4').text(selectedAmenitiesList);
	});
});
