import AddInBag from "./addInCart";
import React from "react";

const Post = ({id, img, name, price, option}) => (
    <div className="card">
        <h1>{name}</h1>
        <img src={img}/>
        <p>{price}</p>
        <AddInBag id={id}  option={option}/>
    </div>
);
export default Post;
