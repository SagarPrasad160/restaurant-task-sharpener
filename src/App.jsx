import React from "react";

import Header from "./components/Header";
import Summary from "./components/Summary";
import MealsList from "./components/MealsList";
import Modal from "./components/Modal";

const meals = [
  {
    name: "Classic Burger",
    description: "Beef patty, lettuce, tomato",
    price: 8.99,
  },
  {
    name: "Grilled Chicken Salad",
    description: "Mixed greens, grilled chicken, cherry tomatoes",
    price: 10.99,
  },
  {
    name: "Margherita Pizza",
    description: "Mozzarella cheese, basil, tomato sauce",
    price: 12.99,
  },
  {
    name: "Beef Stir Fry",
    description: "Sliced beef, vegetables, soy sauce",
    price: 11.99,
  },
  {
    name: "Vegetarian Pasta",
    description: "Penne pasta, mixed vegetables, tomato sauce",
    price: 9.99,
  },
  {
    name: "Fish and Chips",
    description: "Beer-battered cod, fries",
    price: 13.99,
  },
];

function App() {
  return (
    <div>
      <Modal />
      <Header />
      <Summary />
      <MealsList meals={meals} />
    </div>
  );
}

export default App;
