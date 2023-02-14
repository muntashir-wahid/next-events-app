import { useRouter } from "next/router";

const EventDetailsPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Here is the details of {router.query?.eventid}</h1>
    </div>
  );
};

export default EventDetailsPage;
