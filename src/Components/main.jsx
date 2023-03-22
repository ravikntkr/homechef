import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MealItem from "./Mealitem";
import RecpiePage from "./MealbyFletter";
import Nav from "./Nav";
import Hero from "./Hero";
import { Footer } from "./Footer";

const Main = () => {
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=m"
  );
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);

  const setIndex = (alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };

  const searchRecpie = (evt) => {
    if (evt.key === "Enter") {
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  };

  return (
    <>
      <Nav />
      <Hero />
      {/* <Search /> */}
      <section className="searchField">
        <form className="searchData">
          <input
            type="search"
            className="inputSearch"
            placeholder="What do you have in fridge?"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchRecpie}
          />
          <input
            type="search"
            className="inputSearch2"
            placeholder="What do you have in fridge?"
            onChange={(element) => setSearch(element.target.value)}
            onKeyDown={searchRecpie}
          />
        </form>
        {/* Search box tag */}
        <div className="newBadge">
          <p className="newBadgetxt">
            Latest Meals{" "}
            <i className="fa-solid fa-circle-arrow-down arrowDown"></i>
          </p>
        </div>
      </section>
      <div className="mealItemContainer">
        {show ? <MealItem data={item} /> : "Not Found"}
      </div>
      {/* Pagination */}
      <h1 className="paginationTitle">Browse By Name</h1>
      <section className="paginationContainer">
        <RecpiePage alphaIndex={(alpha) => setIndex(alpha)} />
      </section>
      <Footer />
    </>
  );
};

export default Main;
