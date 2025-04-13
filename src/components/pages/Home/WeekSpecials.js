import { Link } from "react-router-dom";
import bruschettaImage from "./assets/bruschetta.jpg";
import greekSaladImage from "./assets/greek-salad.jpg";
import lemonDessertImage from "./assets/lemon-dessert.jpg";
import "./WeekSpecials.css";
import pages from "../../../utils/pages";
import MealCard from "./MealCard";

const meals = [
  {
    name: "Tuscan Tomato Toast",
    image: bruschettaImage,
    price: "$12.48",
    description: `Our Tuscan Tomato Toast starts with grilled bread, rubbed with garlic and lightly seasoned with salt and olive oil for a simple, classic flavor.`,
  },
  {
    name: "Russian Salad",
    image: greekSaladImage,
    price: "$5.82",
    description: `Enjoy our signature Russian salad featuring crisp lettuce, fresh peppers, olives, and our unique Chicago-style feta cheese, topped with crunchy garlic and rosemary croutons.`,
  },
  {
    name: "Zesty Lemon Sweet",
    image: lemonDessertImage,
    price: "$15.00",
    description: `This dish is a cherished family recipe passed down from grandma, with each ingredient carefully selected to ensure true authenticity.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className='container grid week-specials'>
      <div className='week-specials-header'>
        <h2>This week specials!</h2>
        <Link className='button-primary' to={pages.get("orderOnline").path}>
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) => (
        <MealCard key={index} meal={meal} />
      ))}
    </section>
  );
};

export default WeekSpecials;
