import Link from "next/link";

const AllEventsPage = () => {
  const featuredEvents = [
    { id: "1", name: "JavaScript Bootcamp" },
    { id: "2", name: "React Bootcamp" },
    { id: "3", name: "Node.js Bootcamp" },
    { id: "4", name: "Express.js Bootcamp" },
  ];

  return (
    <div>
      <h1>All the events</h1>
      <p>Here you can find all the events</p>
      <ul>
        {featuredEvents.map((event) => (
          <li key={event.id}>
            <Link href={`/events/${event.id}`}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllEventsPage;
