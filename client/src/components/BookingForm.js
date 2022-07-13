import React, {useState} from "react";
import { postBooking } from "./BookingsService";

const BookingForm = ({addBooking}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = evt => setName(evt.target.value);
    
    const handleEmailChange = evt => setEmail(evt.target.value);

    const handleBookingSubmit = (evt) => {
        evt.preventDefault();
        const nameToSubmit = name.trim();
        const emailToSubmit = email.trim();

        if (!nameToSubmit || !emailToSubmit){
            return
        }

        const bookingToSubmit = {
            name: nameToSubmit,
            email: emailToSubmit,
            isChecked: false
        }

        postBooking(bookingToSubmit)
        .then((data) => {
            addBooking(data)
        })

        addBooking(bookingToSubmit);

        setName("");
        setEmail("");
    }

    
    return (
        <form onSubmit={handleBookingSubmit}>
            <label>Customer Name: </label>
            <input
                type="text"
                value={name}
                onChange={handleNameChange}
                required
            />
            <label>email:</label>
            <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
            />
            <input type="submit" value="Book"/>
        </form>
    )
}

export default BookingForm;