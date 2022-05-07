import React from "react";
import fakeBookings from "../data/fakeBookings";
import moment from "moment";

const SearchResults = () => {
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
        {fakeBookings.map(booking => {
          const checkIn = moment(booking.checkInDate);
          const checkOut = moment(booking.checkOutDate);
          const nightsCalculation = checkOut.diff(checkIn, "days");

          return (
            <tr>
              <td>{booking.id}</td>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>{nightsCalculation}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
