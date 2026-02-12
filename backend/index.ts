import express, { Request, Response } from 'express';
import cors from 'cors';

import { Event, Booking } from './types';

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const events: Event[] = [
  { id: '1', name: 'Conference', date: "01-05-2026", capacity: 20, bookedSeats: 0},
  { id: '2', name: 'Movie', date: "02-05-2026", capacity: 10, bookedSeats: 8},
  { id: '3', name: 'Game', date: "03-05-2026", capacity: 5, bookedSeats: 5}
];

// Health check endpoint (to verify the server is running)
app.get('/health', (req, res) => {
  res.status(200).json({ message: "Server is running!" });
});

// TODO: GET /events - return all events

// TODO: GET /bookings - return all bookings

// TODO: POST /bookings - book an event

// TODO: DELETE /bookings/:id - cancel a booking

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});