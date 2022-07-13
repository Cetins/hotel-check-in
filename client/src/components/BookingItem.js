import React from "react";
import { deleteBooking } from "./BookingsService";

const BookingItem = ({booking, removeBooking, toggleBooking}) => {

  const handleDelete = () => {
      deleteBooking(booking._id).then(() => {
        removeBooking(booking._id)
      })
  }

  const handleToggle = () => {
    updateBooking(booking._id).then(() => {
      toggleBooking(booking._id)
    })
  }

  return (
    <div>
        <h1>{booking.name}</h1>
        <p>{booking.email}</p>
        {booking.isChecked ? <p>Checked in</p> : <p>Not Checked</p>}
        <button onClick={handleDelete}> 🗑 </button>
        <button onClick={handleToggle}>Toggle</button>
    </div>
  )
}

export default BookingItem;