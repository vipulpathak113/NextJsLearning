import { useRouter } from "next/router";
import { useState } from "react";

export default function EventList({ eventList }) {
  const router = useRouter();
  const [events, setEvents] = useState(eventList);

  const filterSportsEvents = async () => {
    const response = await fetch(
      "http://localhost:3000/events?category=sports"
    );
    const data = await response.json();
    setEvents(data);
    router.push('/events?category=sports',undefined,{shallow:true})
  };

  return (
    <>
      <h1>Event list</h1>
      <button onClick={filterSportsEvents}>Filter Sports events</button>
      {events.map((item) => {
        return (
          <div key={item.id}>
            <h2>
              {item.id} {item.title} {item.description} | {item.category}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;

  let urlString = category ? "?category=sports" : "";

  const response = await fetch(`http://localhost:3000/events/${urlString}`);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}
