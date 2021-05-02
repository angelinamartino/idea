import React from "react";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div className="item">
      <div>
        <Link
          to={{ pathname: `/itemdetail/${props.id}`, state: { test: "test" } }}
        >
          <h5>{props.title}</h5>
        </Link>
        <li>Precio: {props.price}</li>
        <li>Condicion: {props.condition}</li>
        <img src={props.thumbnail}></img>
        <hr />
      </div>
    </div>
  );
}

export default Item;