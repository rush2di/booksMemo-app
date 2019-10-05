import React from "react";
import CardsBody from "./cardsBody";

function Cards(props) {
  return (
    <div>
      <CardsBody
        toggleReadStatus={props.toggleReadStatus}
        books={props.books}
        deleteCard={props.deleteCard}
      />
    </div>
  );
}
export default Cards;
