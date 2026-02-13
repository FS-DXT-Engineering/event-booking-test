//TODO: Display a specific event and create a booking on form submission

export default function BookingForm () {
    return (
        <form>
            <h1 className="mb-4">Event Name</h1>
            <input type="text" placeholder="Your Name" name="name" className="border p-1" />
            <button type="submit" className="ml-4 bg-black text-white cursor-pointer p-2 rounded-md disabled:cursor-not-allowed disabled:bg-gray-500">Book Event</button>
        </form>
    )
}