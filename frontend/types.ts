export interface Event {
  id: string
  name: string
  date: string
  capacity: number
  bookedSeats: number
}

export interface Booking {
  id: string
  eventId: string
  guestName: string
}