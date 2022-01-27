import React, { useEffect } from "react";
import $ from "jquery";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net";

function Table(props) {
  const elmt = React.useRef();

  /** After component has mounted, jQuery plugin generates table from employee data.
   * Data is passed as prop into module.
   */
  useEffect(() => {
    const $elmt = $(elmt.current);// $elmt is jQuery object of table element in DOM tree. It is used to manipulate table. It is not React component. 
    const data = props.employeeList;
    $elmt.DataTable({
      data: data,
      columns: [
        { title: "First Name" },
        { title: "Last Name" },
        { title: "Start Date" },
        { title: "Department" },
        { title: "Date of Birth" },
        { title: "Street" },
        { title: "City" },
        { title: "State" },
        { title: "Zip Code" },
      ],
    });
  });

  return <table id='employee-table' type='text' ref={elmt} />;
}

export default Table;
