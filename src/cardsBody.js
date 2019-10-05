import React from "react";
import CardsInfo from "./cardsInfo";

function CardsBody(props) {
  return (
    <div key="h2o" className="cardContainer">
      {props.books.map((book, index) => (
        <div key={index}>
          <CardsInfo
            book={book}
            index={index}
            toggleReadStatus={props.toggleReadStatus}
            deleteCard={props.deleteCard}
          />
        </div>
      ))}
    </div>
  );
}

export default CardsBody;
