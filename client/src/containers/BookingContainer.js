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

    const toggleBooking = (id) => {
        const temp = bookings.map(booking => booking);
        const indexToEdit = temp.map(booking => booking._id).indexOf(id);

        if (temp[indexToEdit].isChecked === true) {
            temp[indexToEdit].isChecked = false 
        } else {
            temp[indexToEdit].isChecked = true
        }
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