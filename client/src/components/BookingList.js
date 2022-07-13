import React from "react";
import BookingItem from "./BookingItem";

const BookingList = ({bookings}) => {
    const bookingNodes = bookings.map((booking) => {
      return <BookingItem booking={booking} key={booking._id} />
    })
      
      return (
        <div>
        {bookingNodes}
        </div>
      )
    }
    
    

export default BookingList;