$(document).ready(function() {
  $("form#input").submit(function(event) {
    const gender = $("select#gender").val();

    if (gender === "male"){
      $("#character").text("Kim Possible");
      $("#output").show();
    } else {
      $("#character").text("Harry Potter");
      $("#output").show();
    }

    event.preventDefault();
  });
});