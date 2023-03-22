import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Nav2 from "./Nav2";
import { Footer } from "./Footer";
var itemId = "";
const RecpieDetails = () => {
  const [item, setItem] = useState();
  const { MealId } = useParams();
  if (MealId !== " ") {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals[0]);
      });
  }

  if (item) {
    const yturl = item.strYoutube;
    const url = yturl.split("=");
    itemId = url[url.length - 1];
  }

  return (
    <>
      <Nav2 />
      {!item ? (
        ""
      ) : (
        <>
          <div className="ingdMainContainer">
            <div className="ingdleft">
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="recpieImage"
              />
            </div>
            <div className="ingdRight">
              <p className="badgeTxt">
                <i className="fa-solid fa-arrow-trend-up listIcon badgeIcon"></i>{" "}
                85% would make this again
              </p>
              <h1 className="recpieNamebg">{item.strMeal}</h1>
              <p className="ingdCategory">
                <i className="fa-solid fa-square listIcon"></i> Category:{" "}
                {item.strCategory}
              </p>
              <p className="ingdOrigin">
                <i className="fa-solid fa-square listIcon"></i> Origin:{" "}
                {item.strArea}
              </p>
              <p className="ingdTags">
                <i className="fa-solid fa-square listIcon"></i> Tags:{" "}
                {item.strTags}
              </p>
            </div>
          </div>
          <div className="ingdItemsContainer">
            <h1 className="ingdHeading">Ingredient</h1>
            <ul className="ingdItem">
              <li className="ingdItems">
                {item.strMeasure1} {item.strIngredient1}
              </li>
              <li className="ingdItems">
                {item.strMeasure2} {item.strIngredient2}
              </li>
              <li className="ingdItems">
                {item.strMeasure3} {item.strIngredient3}
              </li>
              <li className="ingdItems">
                {item.strMeasure4} {item.strIngredient4}
              </li>
              <li className="ingdItems">
                {item.strMeasure5} {item.strIngredient5}
              </li>
              <li className="ingdItems">
                {item.strMeasure6} {item.strIngredient6}
              </li>
              <li className="ingdItems">
                {item.strMeasure7} {item.strIngredient7}
              </li>
              <li className="ingdItems">
                {item.strMeasure8} {item.strIngredient8}
              </li>
              <li className="ingdItems">
                {item.strMeasure9} {item.strIngredient9}
              </li>
              <li className="ingdItems">
                {item.strMeasure10} {item.strIngredient10}
              </li>
              <li className="ingdItems">
                {item.strMeasure11} {item.strIngredient11}
              </li>
              <li className="ingdItems">
                {item.strMeasure12} {item.strIngredient12}
              </li>
              <li className="ingdItems">
                {item.strMeasure13} {item.strIngredient13}
              </li>
              <li className="ingdItems">
                {item.strMeasure14} {item.strIngredient14}
              </li>
              <li className="ingdItems">
                {item.strMeasure15} {item.strIngredient15}
              </li>
              <li className="ingdItems">
                {item.strMeasure16} {item.strIngredient16}
              </li>
              <li className="ingdItems">
                {item.strMeasure17} {item.strIngredient17}
              </li>
              <li className="ingdItems">
                {item.strMeasure18} {item.strIngredient18}
              </li>
              <li className="ingdItems">
                {item.strMeasure19} {item.strIngredient19}
              </li>
              <li className="ingdItems">
                {item.strMeasure20} {item.strIngredient20}
              </li>
            </ul>
          </div>
          {/* instruction */}
          <div className="instructionContainer">
            <h1 className="ingdHeading">Instructions</h1>
            <div className="instarea">
              <p className="instruction">{item.strInstructions}</p>
            </div>
          </div>
          {/* Video */}
          <div className="VideoContainer">
            <iframe
              src={`https://www.youtube.com/embed/${itemId}`}
              frameborder="0"
            ></iframe>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default RecpieDetails;
