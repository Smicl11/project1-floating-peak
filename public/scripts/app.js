/* CLIENT-SIDE JS */

$(document).ready(function() {
  //grab data from the server to display on the page
  renderPhotos();

  //capture data from user submission and POST it to the site.
  $('#photo-share form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/photos/',
      data: $(this).serialize(),
      success: renderNewPhoto,
      error: handleError
    });
    $(this).trigger("reset");
  });

  $('#photos').on('click', '.delete-photo', handleDelete);

  $('#photos').on('click', '.edit-photo', handleEdit);

});




function renderPhotos() {
  $.ajax({
    method: 'GET',
    url: '/api/photos/',
    success: handleSuccess,
    error: handleError
  });
}

function renderHTML(pics) {
  var source = $('#pic-template').html();
  var template = Handlebars.compile(source);
  var newHTML = template(pics);
  $('#photos').append(newHTML);
}

function handleDelete(event) {
  var photoId = $(this).parents('.photo-post').data('photo-id');
  console.log('someone wants to delete photo id=' + photoId ); //remove this when issue resolved
  $.ajax({
    url: '/api/photos/' + photoId,
    method: 'DELETE',
    success: handleDeletePhotoSuccess,
    error: handleError
  });
}

function handleDeletePhotoSuccess(data) {
  console.log(data); //remove this
  var deletedPhotoId = data._id;
  $('div[data-photo-id=' + deletedPhotoId + ']').remove();
}

function renderNewPhoto(photo) {
  var source = $('#pic-template').html();
  var template = Handlebars.compile(source);
  var newHTML = template(photo);
  $('#photos').append(newHTML);
}

function handleSuccess(json) {
  json.forEach(renderHTML);
}

function handleError(error) {
  console.log("DAMMIT! ERROR!! ", error);
  alert("Sorry, something went wrong. Please try again later."); //change this to a modal in the future
}
