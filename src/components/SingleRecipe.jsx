import React from "react";
import { GlobelDataContext } from "../context/AppProvider";

const SingleRecipe = () => {
  const { id } = GlobelDataContext();
  let name = "Name";

  return (
    <div className="SingleRecipe">
      <h3>{id.title}</h3>
      <span className="SingleRecipe-child">
        <p>Food Type: {id?.vegetarian ? "🥦" : "🍗"}</p>
        <p>Food Price: {id.pricePerServing} INR</p>
        <p>Cooking Duration: {id.cookingMinutes || "-"} Minutes</p>
      </span>
      <div className="SingleRecipe-child-1">
        {/* {id.analyzedInstructions?.[0]?.steps?.map((i, index) => (<li key={index}>{i.step}</li> )) || <li>No instructions available</li>} */}
        {id.analyzedInstructions?.[0]?.steps?.map((i,idx)=>(
         <ul>
            <li key={idx}>{i.step}</li>
         </ul> 
          )) ||<li>No instructions available yet!</li>}
      </div>
    </div>
  );
};

export default SingleRecipe;
