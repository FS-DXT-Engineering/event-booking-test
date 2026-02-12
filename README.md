# Simple Event Booking — Next.js + Node.js (TypeScript)

## 📋 Objective

Build a simple event booking app to test **frontend-backend integration**, **state management**, and **REST API** concepts using **Next.js** and **Node.js**.

## Requirements

- Fetch the events from the backend and display them on the frontend
- Render each event as a link to its corresponding booking form (/events/:id)
- Allow the user to submit the booking form and create a booking for an event
- Display the user's booked event on the frontend
- Allow the user to remove their bookings

## Tips

- Ensure the user is unable to book an event that is at maximum capacity
- Try to display all details for an event (name, date, available seats remaining)

## 🛠️ Technologies

- **Frontend**: Next.js + React (TypeScript)
- **Backend**: Node.js + Express (TypeScript)
- **HTTP Client**: Axios
- **State Management**: React Context API

## 🚀 How to Run Locally

### 1. Clone the repo

https://github.com/FS-DXT-Engineering/event-booking-test

### 2. Checkout a feature branch

feature/{your_name}

### 3. Start the Backend API

```bash
cd backend
npm install
npm run dev
```

Backend will run at http://localhost:3001

You can verify the backend is running by visiting:  
`http://localhost:3001/health`  
(You should see: `{ "message": "Server is running!" }`)

### 4. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at http://localhost:3000

## 📦 Project Structure

```
event-booking-test/
├── backend/
│   ├── index.ts
│   ├── types.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── app/
│   │   └── page.tsx
│   ├── components/
│   │   ├── EventList.tsx
│   │   └── Bookings.tsx
│   ├── context/
│   │   └── BookingContext.tsx
│   ├── types.ts
│   ├── package.json
│   └── tsconfig.json
├── README.md
└── .gitignore
```

## 🧹 Bonus Ideas (Optional)

- Seat quantity adjustment
- Add loading spinners and error handling

## 📝 Notes

- No database needed (use in-memory arrays).
- Node.js version recommended: v16.x or higher.
- Ensure ports 3000 and 3001 are available.

Good luck! 🚀
