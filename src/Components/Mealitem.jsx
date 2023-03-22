import React from "react";
import { useNavigate } from "react-router-dom";

const MealItem = ({ data }) => {
  console.log(data);
  let navigate = useNavigate();
  return (
    <>
      {!data
        ? "Not Found"
        : data.map((item) => {
            return (
              <div
                className="mealCard"
                key={item.idMeal}
                onClick={() => navigate(`/${item.idMeal}`)}
              >
                <img src={item.strMealThumb} className="mealThumb" />
                <h1 className="mealName"> {item.strMeal} </h1>
                <p className="mealCategory">Category: {item.strCategory}</p>
              </div>
            );
          })}
    </>
  );
};

export default MealItem;
