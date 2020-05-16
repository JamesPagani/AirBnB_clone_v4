document.addEventListener('DOMContentLoaded', function () {
  const amenitiesDict = {};
  $("input[type='checkbox']").change(function () {
    if (amenitiesDict[($(this).data('id'))] === undefined) {
      amenitiesDict[($(this).data('id'))] = ($(this).data('name'));
    } else {
      delete amenitiesDict[($(this).data('id'))];
    }
    if (Object.keys(amenitiesDict).length > 0) {
      $('div.amenities > h4').text(Object.values(amenitiesDict).join(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
  });
});
