$(document).ready(function(event) {
  var flavors = ["Cookie dough", "Green tea", "Jasmine", "Mint chocolate chip"]
  flavors.forEach(function(flavors) {
    $("#iceCream").append("<li>" + flavors + "</li>");

  });
});
