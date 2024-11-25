import React from "react";
import { GlobelDataContext } from "../context/AppProvider";
import SingleRecipe from "./SingleRecipe";


const Display = () => {
  const { pasta ,getIdof } = GlobelDataContext();
 

  return (
    <div className="Display">
      <form action="#" onChange={(e) => e.preventDefault()}>
        {pasta.map((e) => {
          const { id, image, title, imageType } = e;
          const Title = title.substring(0, 30);

          return (
            <div className="card" key={id}>
              <img src={image} alt={imageType} />
              <p>{Title.length >= 30 ? `${Title}...` : Title}</p>
              <button id={id} onClick={getIdof}>
                View Recipe 
              </button>
            </div>
          );
        })}
      </form>
    </div>
  );
};
export default Display;

// "id": 642583,
//"title": "Farfalle with Peas, Ham and Cream",
//"image": "https://img.spoonacular.com/recipes/642583-312x231.jpg",
//"imageType": "jpg"
