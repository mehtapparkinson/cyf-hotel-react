import React, { useState } from "react";

const RowInfo = props => {
  const [checked, setChecked] = useState(false);
  function highlight() {
    setChecked(!checked);
  }
  return (
    <tr className={checked ? "highlighted" : ""} onClick={highlight}>
      <td>{props.booking.id}</td>
      <td>{props.booking.title}</td>
      <td>{props.booking.firstName}</td>
      <td>{props.booking.surname}</td>
      <td>{props.booking.email}</td>
      <td>{props.booking.roomId}</td>
      <td>{props.booking.checkInDate}</td>
      <td>{props.booking.checkOutDate}</td>
      <td>{props.booking.nightsCalculation}</td>
    </tr>
  );
};

export default RowInfo;
