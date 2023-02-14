import Link from "next/link";

const HomePage = () => {
  const featuredEvents = [
    { id: "1", name: "JavaScript Bootcamp" },
    { id: "2", name: "React Bootcamp" },
    { id: "3", name: "Node.js Bootcamp" },
  ];

  return (
    <div>
      <h1>Welcome to the Homepage!</h1>
      <p>Here you can find all the featured projects!</p>
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

export default HomePage;
