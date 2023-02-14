import Link from "next/link";
import EventList from "../../components/events/event-list";
import { getAllEvents } from "./../../dummy-data";

const AllEventsPage = () => {
  const allEvents = getAllEvents();
  console.log(allEvents);

  return (
    <div>
      <EventList items={allEvents} />
    </div>
  );
};

export default AllEventsPage;
