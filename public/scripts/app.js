/* CLIENT-SIDE JS */

$(document).ready(function() {
  $('#photo-share form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/photos/',
      data: $(this).serialize(),
      success: handleSuccess,
      error: handleError
    });
    $(this).trigger("reset");
  });

});



function handleSuccess(json) {
  json.forEach(renderHTML);
}

function handleError(error) {
  console.log("DAMMIT! ERROR!!");
  console.log(error);
}

function renderHTML(pics) {
  var source = $('#pic-template').html();
  var template = Handlebars.compile(source);
  var newHTML = template(pics);
  $('#feed').prepend(newHTML);
}
