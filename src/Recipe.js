import React from "react";

function Recipe({ entry, deleteRecipe, styleClass }) {
    return (
          <tr className={`newRecipe ${styleClass}`}>
            <td>{entry.name}</td>
            <td>{entry.cuisine}</td>
            <td>
              <img src={entry.photo} alt="http://www.nopicavailable.com" className="scaleImage" />
            </td>
            <td className="content_td"><p>{entry.ingredients}</p></td>
            <td className="content_td"><p>{entry.preparation}</p></td>
            <td>
              <button name="delete" onClick={deleteRecipe}>
              Delete
              </button>
            </td>
          </tr>
    );
  }
  export default Recipe;