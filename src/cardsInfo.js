import React from "react";

function CardsInfo(props) {
  return (
    <div className={props.book.readStatus} key={"pfe_" + props.index}>
      <div className="cardInfo">
        <div onClick={() => props.deleteCard(props.index)} className="deletex">
          x
        </div>
        <div className="tt-txt">{props.book.title}</div>
        <div className="sm-txt">{props.book.author}</div>
        <div className="sm-txt">{props.book.pages} pages</div>
        <div
          onClick={() => props.toggleReadStatus(props.index)}
          className="md-txt"
        >
          {props.book.readStatus}
        </div>
      </div>
    </div>
  );
}

export default CardsInfo;
