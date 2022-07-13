import React from "react";

const BookingItem = ({booking}) => {

  return (
    <div>
        <h1>{booking.name}</h1>
        <p>{booking.email}</p>
        {booking.isChecked ? <p>Checked in</p> : <p>Not Checked</p>}
    </div>
  )
}

export default BookingItem;