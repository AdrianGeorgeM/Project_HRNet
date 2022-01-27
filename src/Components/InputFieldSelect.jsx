import React, { useEffect } from "react";
import { Input } from "../Styles/home";
import $ from "jquery";
import "jquery-datetimepicker";
import "jquery-datetimepicker/build/jquery.datetimepicker.min.css";

function DatePickerInput(props) {
  const elmt = React.useRef();

  useEffect(() => {
    const $elmt = $(elmt.current);
    $elmt.datetimepicker({ timepicker: false, format: "m/d/Y" });
  });

  return <Input id={props.id} type='text' ref={elmt} />;
}

export default DatePickerInput;
