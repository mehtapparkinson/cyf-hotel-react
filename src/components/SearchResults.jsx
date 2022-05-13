import React from "react";
import moment from "moment";
import RowInfo from "./RowInfo";

const SearchResults = props => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.bookings.map(booking => {
          const checkIn = moment(booking.checkInDate);
          const checkOut = moment(booking.checkOutDate);
          const nightsCalculation = checkOut.diff(checkIn, "days");

          return (
            <RowInfo nightsCalculation={nightsCalculation} booking={booking} />
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
