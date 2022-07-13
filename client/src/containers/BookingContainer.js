import react, { useEffect, useState } from "react";
import { getBookings } from "../components/BookingsService";
import BookingList from "../components/BookingList";
import BookingForm from "../components/BookingForm";

const BookingContainer = () => {

    const [bookings, setBookings] = useState([])

    useEffect( () => {
        getBookings()
        .then((data)=> {
            console.log(data);
            setBookings(data)
        })
    }, []);

    const addBooking = (newBooking) => {
        const updatedBookings = [...bookings, newBooking];
        setBookings(updatedBookings);
    }

    const removeBooking = (id) => {
        const temp = bookings.map(booking => booking);
        const indexToDel = temp.map(booking => booking._id).indexOf(id);
        console.log(indexToDel);
        
        temp.splice(indexToDel, 1);
        setBookings(temp);
    }

    return (
        <div>
            <h1>Bookings</h1>
            <BookingForm addBooking={addBooking}/>
            <BookingList removeBooking={removeBooking} bookings={bookings}/>
        </div>
    )
}

export default BookingContainer;