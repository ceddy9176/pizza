// business logic
var finalOrderPrice = 0;
var pizzaNumber = 0;

function Pizza(pizzaSize) {
  this.pizzaSize = pizzaSize;
  this.toppings = [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

function optionChosen() {
  $("#mainInfo").show();
  $("#addPizza").show();
  $("#options").hide();
  $("#userInput").show();
}

Pizza.prototype.price = function () {
  var pizzaPrice = 0;

  if (this.pizzaSize === "medium"){
    pizzaPrice += 15;
  } else if (this.pizzaSize === "large") {
    pizzaPrice += 17;
  } else if (this.pizzaSize === "x-large") {
    pizzaPrice += 20;
  }
  for (var index = 2; index < this.toppings.length; index += 1) {
    pizzaPrice += 1;
  }
  return pizzaPrice;
}

Address.prototype.format = function () {
  return "Your pizza will be deliverd to:" + this.street + ", " + this.city + ", " + this.state;
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
