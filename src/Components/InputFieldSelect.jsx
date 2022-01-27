import React, { useEffect } from "react";
import $ from "jquery";
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.css";

// No. No approach is correct and there is no right way to use both jQuery and React/Angular/Vue together.

// jQuery manipulates the DOM by, for example, selecting elements and adding/deleting stuff into/from them. Typically, it selects an existing <div> and sets its text.

// The other frameworks don't manipulate the DOM; they generate it from data, and regenerate it whenever this data changes (for instance after an Ajax call).

// The problem is, jQuery has no clue about React's presence and actions, and React has no clue about jQuery's presence and actions.

// This will necessarily lead to a broken application, full of hacks and workarounds, unmaintainable, not to mention that you have to load two libraries instead of one.

function SelectInputField(props) {
  const elmt = React.useRef();

  /** After component has mounted, jQuery plugin generates table from employee data.
   * Data is passed as prop into module.
   */
  useEffect(() => {
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
