# _Cesare's Palace_

#### _Independent project Web app that takes orders for multiple pizzas and returns user a price. 11.1.17_

#### By _**Connor Miller**_

## Description

_User selects pizza size and toppings for as many pizzas they want. The price increases depending on the size of pizza and how many toppings they choose to have. If they choose to have the pizza delivered, it will also prompt them to enter their address information._

## Setup/Installation Requirements

 View here: ceddy9176.github.io/pizza

1. Clone this repo https://github.com/ceddy9176/pizza

2. Move into project folder

3. Open index.html in Chrome web browser

## Specifications

1. Takes user input for pizza size and computes base price.
  - <b>Example Input:</b> "medium"
  - <b>Example Output:</b> "$15"

2. Takes user input for toppings and computes price based on number of toppings.
  - <b>Example Input:</b> "medium" + "Olives, mushrooms, green peppers, chicken"
  - <b>Example Output:</b> "$16.50"

3. User can input multiple pizza's, all prices will total.
  - <b>Example Input:</b> "medium" + "Olives, mushrooms, green peppers"; "Medium" + "Olives"
  - <b>Example Output:</b> "$30"

4. If user chooses delivery option, they will be prompted for their address info.
  - <b>Example Input:</b> "Delivery"
  - <b>Example Output:</b> Empty form for: Street, City, State

5. Will not accept empty fields.
  - <b>Example Input:</b> Blank field
  - <b>Example Output:</b> "Please fill all fields"

6. Page will return receipt upon order submission.
  - <b>Example Input:</b> Submit Order
  - <b>Example Output:</b> "Thank you! Your order of [Pizzas Ordered] pizzas will be done shortly. It will be delivered [User Address]."

7. Will go back to start page.
  - <b>Example Input:</b> Click on pizza picture at end
  - <b>Example Output:</b> Returns to landing page


## Support and contact details

_Contact Me @: ceddy9176@gmail.com_

## Technologies Used

_Written with HTML, CSS, Bootstrap, and Javascript, jQuery._

### License

*MIT*

Copyright (c) 2016 **_Connor Miller_**
