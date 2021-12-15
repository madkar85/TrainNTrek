import React from "react";
import { FaTrash } from "react-icons/fa";

// Function for the tables with added values meal and calorie.
export default function Table(props) {
  return (
    <>
      <tr>
        <td>{props.meal.text}</td>
        <td>{props.meal.calorie}</td>
        <td>
          <FaTrash onClick={props.onDelete} className="mr-4" />
        </td>
      </tr>
    </>
  );
}
