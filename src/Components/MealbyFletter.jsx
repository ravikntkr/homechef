import React from "react";

const RecpiePage = ({ alphaIndex }) => {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var num = 0;
  return (
    <>
      {alphabet.map((item) => {
        return (
          <div
            className="numberBox"
            key={num++}
            onClick={() => alphaIndex(item)}
          >
            <h3 className="pageNumber">{item}</h3>
          </div>
        );
      })}
    </>
  );
};

export default RecpiePage;
