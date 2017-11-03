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
Pizza.prototype.price = function() {
  var pizzaPrice = 0;

  if (this.pizzaSize === "medium"){
    pizzaPrice += 15;
  } else if (this.pizzaSize === "large") {
    pizzaPrice += 17;
  } else if (this.pizzaSize === "x-large") {
    pizzaPrice += 20;
  }
  for (var index = 3; index < this.toppings.length; index += 1) {
    pizzaPrice += 1.5;
  }
  return pizzaPrice;
}
Address.prototype.format = function() {
  return "Your pizza will be deliverd to:" + this.street + ", " + this.city + ", " + this.state;
}
function optionChosen() {
  $("#mainInfo").show();
  $("#addPizza").show();
  $("#options").hide();
  $("#userInput").show();
}
function validOrder() {
  $("#inputOutput").hide();
  $("#receipt").show();
  $("#pizzaNumber").text(pizzaNumber);
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
    $("form").submit(function(event){
      event.preventDefault();
      var userSize = $("input:radio[name=sizeSelection]:checked").val();
      var pizzaOrder = new Pizza(userSize);
      $("input:checkbox[name=toppings]:checked").each(function(){
        var newToppings = $(this).val();
        pizzaOrder.toppings.push(newToppings);
        });
      var pizzaOrderPrice = pizzaOrder.price();
      $("#pizzas ul").append("<li><span class='newPizza'>" + pizzaOrder.pizzaSize + " pizza with " + pizzaOrder.toppings.length + " topping('s): $" + pizzaOrderPrice + "</span></li>");
      $("#subtotal").show();
      finalOrderPrice += pizzaOrderPrice;
      pizzaNumber += 1;
      $(".total").text(finalOrderPrice);
      $("#orderSummary").show();
      $("#finalOrder").show();
      $(".newPizza").last().click(function(){
        $("#extraInfo").show();
        $(".topping").text(pizzaOrder.toppings);
      });
      $("input[type=checkbox]").prop("checked", false);
      $("input[type=checkbox]").prop("checked", function(){
        return this.getAttribute("checked") === "checked";
      });
    });
    $("#finalOrder").click(function(){
      var street = $("#street").val();
      var city = $("#city").val();
      var state = $("#state").val();
      var userAddress = new Address(street, city, state);
      var userName = $("#userName").val();
      console.log(userName);
      console.log(userAddress);

      if (userAddress.street !== "" && userAddress.city !== "" && userAddress.state !== "" && delivery === true && userName !== "") {
      $("#receiptCard").append(userAddress.format());
      validOrder();
      $("#userName").text(userName);
    } else if (delivery === false && userName !== "") {
      validOrder();
      $("#userName").text(userName);
    } else {
      alert("Please fill all fields");
    }
    });
    $("#finalPizza").click(function(){
      document.location.reload(true);
    });
});
