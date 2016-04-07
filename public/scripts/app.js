/* CLIENT-SIDE JS */

$(document).ready(function() {
  $.ajax({
    method: "GET",
    url: "api/sanity",
    success: sanitySuccess,
    error: sanityError
  });

});

function sanitySuccess(json) {
  console.log("you did it!");
  console.log(json);
}

function sanityError(error) {
  console.log("DAMMIT! ERROR!!");
  console.log(error);
}
