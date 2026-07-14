import axios from 'axios';

// Creating a baseline instance for future backend linkage
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json' }
});

// Seed data storage representing localized application state
const MOCK_CABS = [
  { id: 1, model: 'Maruti Swift', type: 'Hatchback', carNo: 'MH 12 XY 5678', driver: 'Pooja Singh', fare: 10, image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400', rating: 4.8, seats: 4, fuel: 'Petrol', ac: true },
  { id: 2, model: 'Honda City', type: 'Sedan', carNo: 'KA 05 CD 9012', driver: 'Rahul Mehta', fare: 15, image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400', rating: 4.9, seats: 4, fuel: 'Diesel', ac: true },
  { id: 3, model: 'Toyota Etios', type: 'Sedan', carNo: 'RJ 14 QW 3456', driver: 'Sneha Kapoor', fare: 12, image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400', rating: 4.7, seats: 4, fuel: 'CNG', ac: true }
];

let MOCK_BOOKINGS = [
  { id: 'BK-9921', date: '2026-07-17', pickup: 'Noida', drop: 'Pune', time: '00:43', driver: 'Sneha Kapoor', car: 'Toyota Etios', carNo: 'RJ 14 QW 3456', amount: 2000, status: 'On the Way' }
];

let MOCK_USERS = [
  { id: '6877e2c2c50f3d667784cd910f4', name: 'pravanshu', email: 'pravanshu@gmail.com', role: 'User' }
];

export const mockApi = {
  getCabs: async () => ({ data: MOCK_CABS }),
  addCab: async (cab) => {
    const newCab = { id: Date.now(), ...cab, fare: parseFloat(cab.price || 10), rating: 5.0, seats: 4, fuel: 'Petrol', ac: true };
    MOCK_CABS.push(newCab);
    return { data: newCab };
  },
  updateCab: async (id, updatedCab) => {
    const index = MOCK_CABS.findIndex(c => c.id === parseInt(id));
    if (index !== -1) MOCK_CABS[index] = { ...MOCK_CABS[index], ...updatedCab };
    return { data: MOCK_CABS[index] };
  },
  deleteCab: async (id) => {
    const index = MOCK_CABS.findIndex(c => c.id === parseInt(id));
    if (index !== -1) MOCK_CABS.splice(index, 1);
    return { data: true };
  },
  getBookings: async () => ({ data: MOCK_BOOKINGS }),
  createBooking: async (booking) => {
    const newBooking = {
      id: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
      date: booking.pickupDate,
      pickup: booking.pickupState + ', ' + booking.pickupCity,
      drop: booking.dropState + ', ' + booking.dropCity,
      time: booking.pickupTime,
      driver: 'Assigned Driver',
      car: 'Standard Sedan',
      carNo: 'XX 00 XX 0000',
      amount: 1250,
      status: 'Confirmed'
    };
    MOCK_BOOKINGS.unshift(newBooking);
    return { data: newBooking };
  },
  getUsers: async () => ({ data: MOCK_USERS })
};

export default api;