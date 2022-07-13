use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Anna Brown",
        email: "anna@brown.com",
        isChecked: false
    },
    {
        name: "John Smith",
        email: "john@brown.com",
        isChecked: true
    },
    {
        name: "Jarrod Jarrodson",
        email: "coder123@react.com",
        isChecked: false
    },
    {
        name: "Mandy Wagstaff",
        email: "ilovehats@gmail.com",
        isChecked: true
    },
    {
        name: "Sheldon Cooper",
        email: "sheldor@cooper.com",
        isChecked: false
    }
]);