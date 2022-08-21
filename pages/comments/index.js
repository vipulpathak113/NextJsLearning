import Link from "next/link";
import { useState } from "react";

export default function Comments() {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  return (
    <>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((item) => {
        return (
          <div key={item.id}>
            <h2>
              {item.id} | {item.text}
            </h2>
            <hr />
          </div>
        );
      })}
    </>
  );
}
