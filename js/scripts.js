// business logic
function optionChosen() {
  $("#mainInfo").show();
  $("#addPizza").show();
  $("#options").hide();
  $("#userInput").show();
}

// user interface logic
$(document).ready(function(){
  var delivery = false;
    $("#delivery").click(function(){
      optionChosen();
      $("#addressInfo").show();
      delivery = true;
    });
    $("#pickUp").click(function() {
      optionChosen();
    });
});
