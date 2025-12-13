const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema(
    {
        arrivalDate: { type: Date, required: true },
        departureDate: { type: Date, required: true },
        phone: { type: String, required: true },
        userName: { type: String, required: true }, 
        room: { type: String, required: true }, 
        userEmail: { type: String, required: true } 
    },
    { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
