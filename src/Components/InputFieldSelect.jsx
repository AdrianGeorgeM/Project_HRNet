import React, { useEffect } from "react";
import $ from "jquery";
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.css";

function SelectInputField(props) {
  // Input field with select functionality. (Home.jsx)
  const elmt = React.useRef(); // Creates a reference to the input field. (Home.jsx)

  /** After component has mounted, jQuery plugin generates table from employee data.
   * Data is passed as prop into module.
   */
  useEffect(() => {
    // After component has mounted, jQuery plugin generates table from employee data. (Home.jsx)  // Data is passed as prop into module.
    const $elmt = $(elmt.current);
    $elmt.selectmenu({
      change: function (event, ui) {
        console.log(ui.item.value);
        props.onChange({ target: { id: props.id, value: ui.item.value } });
      },
    });
  });

  return (
    <select
      name={props.id}
      id={props.id}
      value={props.value}
      ref={elmt}
      readOnly
    >
      {props.data.map((element, index) => {
        return (
          <option value={element.name} text={element.name} key={index}>
            {element.name}
          </option>
        );
      })}
    </select>
  );
}

export default SelectInputField;
