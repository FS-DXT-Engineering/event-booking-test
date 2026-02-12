import Bookings from "@/components/Bookings";
import EventList from "@/components/EventList";

export default function Home() {
  return (
    <div>
      <div className="p-4">
        <h1 className="text-xl mb-4">Events</h1>
        <EventList />
      </div>
      <hr />
      <div className="p-4">
        <h1 className="text-xl mb-4">My Bookings</h1>
        <Bookings />
      </div>
    </div>
  );
}
