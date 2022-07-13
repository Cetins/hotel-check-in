import React from "react";
import BookingItem from "./BookingItem";

const BookingList = ({bookings, removeBooking}) => {
    const bookingNodes = bookings.map((booking) => {
      return <BookingItem booking={booking} key={booking._id} removeBooking={removeBooking}/>
    })
      
      return (
        <div>
        {bookingNodes}
        </div>
      )
    }
    
    

export default BookingList;