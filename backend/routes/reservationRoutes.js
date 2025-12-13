// backend/routes/reservationRoutes.js

const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');
const User = require('../models/User');

// Create a reservation
router.post('/', async (req, res) => {
    const { arrivalDate, departureDate, phone, userEmail, userName, room } = req.body;

    // Input validation regex for alphanumeric characters and +/-
    const validInputRegex = /^[a-zA-Z0-9\s@+\-.]*$/;

    try {
        // Validate input
        if (!arrivalDate || !departureDate || !phone || !userEmail || !userName || !room) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        if (!validInputRegex.test(phone)) {
            return res.status(400).json({ message: 'Phone number can only contain alphanumeric characters and +/-. ' });
        }

        const newReservation = new Reservation({
            arrivalDate,
            departureDate,
            phone,
            userEmail,
            userName,
            room
        });

        await newReservation.save();
        return res.status(201).json({ message: 'Reservation created successfully', reservation: newReservation });
    } catch (error) {
        console.error('Error creating reservation:', error);
        return res.status(500).json({ message: 'Failed to create reservation', error: error.message });
    }
});

module.exports = router;
