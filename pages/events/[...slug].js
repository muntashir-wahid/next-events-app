import { useRouter } from "next/router";

const FilteredEvents = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>Filtered Events!</h1>
    </div>
  );
};

export default FilteredEvents;
