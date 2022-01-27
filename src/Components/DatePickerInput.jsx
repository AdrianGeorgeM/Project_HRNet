import React, { useEffect } from "react";
import { Input } from "../Styles/home";
import $ from "jquery";
import "jquery-datetimepicker";
import "jquery-datetimepicker/build/jquery.datetimepicker.min.css";

function DatePickerInput(props) {
  const elmt = React.useRef();
  const id = props.id;

  /** After component has mounted, jQuery plugin updates input field with datepicker functionality.
   * OnChange method is passed as prop into module.
   * Object with target.id and target.value values passed in as argument to replace missing event object.
   */
  useEffect(() => {
    const $elmt = $(elmt.current);
    $elmt.datetimepicker({
      timepicker: false,
      format: "m/d/Y",
      onChangeDateTime: function (datep, $input) {
        props.onChange({ target: { id: id, value: $input.val() } });
      },
    });
  });

  return (
    <Input id={props.id} type='text' ref={elmt} value={props.value} readOnly />
  );
}

export default DatePickerInput;
