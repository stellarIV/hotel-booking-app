import { useUser } from '@clerk/clerk-react';
import React, { useState } from 'react';
import { useEffect } from 'react';

const ReservationForm = ({ userEmail }) => {
    const [arrivalDate, setArrivalDate] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [room, setRoom] = useState('');
    const { isLoaded, isSignedIn, user } = useUser();

    const handleSubmit2 = async (e) => {
        e.preventDefault();
        try {
            const reservationData = {
                arrivalDate: new Date(arrivalDate).toISOString(),
                departureDate: new Date(departureDate).toISOString(),
                phone,
                userEmail: email,      // Make sure this is userEmail
                userName: name,
                room        // Make sure this is userName
            };
    
            console.log('Sending reservation data:', reservationData); // Log data before sending
    
            const response = await fetch('http://localhost:5000/api/reservations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reservationData),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error: ${response.status} ${response.statusText} - ${errorData.message || ''}`);
            }
    
            const data = await response.json();
            console.log('Reservation created:', data);
            alert('Reservation created successfully');
        } catch (error) {
            console.error('Failed to make reservation:', error);
            alert('Failed to create reservation: ' + error.message);
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Prepare data to send, converting dates to ISO format
            const reservationData = {
                arrivalDate: new Date(arrivalDate).toISOString().split('T')[0],
                departureDate: new Date(departureDate).toISOString().split('T')[0],
                phone,
                userEmail: user.emailAddresses[0].emailAddress,
                userName: user.fullName,
                room
            };

            console.log('Sending reservation data:', reservationData); // Log data before sending

            const response = await fetch('http://localhost:5000/api/reservations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reservationData),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            console.log('Reservation created:', data);
            alert('Reservation created successfully');
        } catch (error) {
            console.error('Failed to make reservation:', error);
        }
    };

    useEffect(() => {
        if (isLoaded && isSignedIn && user) {
          const userData = {
            clerkId: user.id,
            email: user.emailAddresses[0].emailAddress,
            name: user.fullName,
          };
          
        }
      }, [isLoaded, isSignedIn, user]);
    
      if (!isLoaded) {
        return (
            <div className="animate-pulse mx-auto p-6 shadow-md w-[95%] sm:w-[90%] md:w-[80%] bg-white rounded-3xl lg:-mt-24">
    <div className="block w-1/2 h-6 mb-6 bg-gray-300 rounded-full lg:hidden mx-auto"></div>

    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mb-4">
        
        <div>
            <div className="block w-24 h-4 mb-2 bg-gray-300 rounded-full"></div>
            <div className="w-full h-10 bg-gray-300 rounded-md"></div>
        </div>

        <div>
            <div className="block w-24 h-4 mb-2 bg-gray-300 rounded-full"></div>
            <div className="w-full h-10 bg-gray-300 rounded-md"></div>
        </div>

        <div>
            <div className="block w-24 h-4 mb-2 bg-gray-300 rounded-full"></div>
            <div className="w-full h-10 bg-gray-300 rounded-md"></div>
        </div>

        <div>
            <div className="block w-24 h-4 mb-2 bg-gray-300 rounded-full"></div>
            <div className="w-full h-10 bg-gray-300 rounded-md"></div>
        </div>
    </div>

    <div className="flex justify-center">
        <div className="w-full max-w-sm h-10 bg-gray-300 rounded-md"></div>
    </div>
</div>


        );
      }
    
      if (!isSignedIn) {
        return (
            <form onSubmit={handleSubmit2} className="mx-auto p-6 shadow-md w-[95%] sm:w-[90%] md:w-[80%] bg-white rounded-3xl lg:-mt-32 mt-2">
    <h2 className="text-2xl font-semibold mb-6 text-center lg:hidden">Make a Reservation</h2>
    
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
        
        <div>
            <label htmlFor="room" className="block text-gray-700 font-medium mb-2">Rooms</label>
            <div className="relative">
                <select
                    id="room"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                >
                    <option value="">Choose Room</option>
                    <option value="Single">Single</option>
                    <option value="Delux">Delux</option>
                    <option value="Queen">Queen</option>
                    <option value="Family">Family</option>
                </select>
               
            </div>
        </div>

        <div>
            <label htmlFor="arrivalDate" className="block text-gray-700 font-medium mb-2">Arrival Date</label>
            <input
                type="date"
                id="arrivalDate"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
        </div>

        <div>
            <label htmlFor="departureDate" className="block text-gray-700 font-medium mb-2">Departure Date</label>
            <input
                type="date"
                id="departureDate"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
        </div>

        <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                pattern="^[a-zA-Z\s\-]+$"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
        </div>

        <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                pattern="^[a-zA-Z0-9\s@+\-.]*$"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
        </div>

        <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                title="Please enter a valid email address (e.g., user@example.com)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
        </div>
    </div>

    <div className="flex justify-center">
        <button
            type="submit"
            className="w-full max-w-sm bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300 ease-in-out"
        >
            Book Now
        </button>
    </div>
</form>

        );
    }
    

    

    return (
        <form onSubmit={handleSubmit} className="mx-auto p-6 shadow-md w-[95%] sm:w-[90%] md:w-[80%] bg-white rounded-3xl relative lg:-mt-24 lg:absolute ">
    <h2 className="text-2xl font-semibold mb-6 text-center lg:hidden">Make a Reservation</h2>
    
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mb-4">
        
        <div>
            <label htmlFor="room" className="block text-gray-700 font-medium mb-2">Rooms</label>
            <select
                id="room"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            >
                <option value="">Choose Room</option>
                <option value="Single">Single</option>
                <option value="Delux">Delux</option>
                <option value="Queen">Queen</option>
                <option value="Family">Family</option>
            </select>
        </div>

        <div>
            <label htmlFor="arrivalDate" className="block text-gray-700 font-medium mb-2">Arrival Date</label>
            <input
                type="date"
                id="arrivalDate"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
        </div>

        <div>
            <label htmlFor="departureDate" className="block text-gray-700 font-medium mb-2">Departure Date</label>
            <input
                type="date"
                id="departureDate"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
        </div>

        <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                pattern="^[a-zA-Z0-9\s+\-]*$"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
        </div>
    </div>

    <div className="flex justify-center">
        <button
            type="submit"
            className="w-full max-w-sm bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300 ease-in-out"
        >
            Book Now
        </button>
    </div>
</form>

    );
};

export default ReservationForm;
