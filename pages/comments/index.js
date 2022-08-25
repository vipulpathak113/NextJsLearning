import { useState } from "react";
import Header from "../../components/header";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState([]);

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const addComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setComments([...comments, data]);
  };

  const deleteComment = async (id) => {
    const response = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    fetchComments();
  };

  return (
    <>
      <input
        type="input"
        onChange={(e) => {
          setComment(e.target.value);
        }}
        value={comment}
      />
      <button onClick={addComment}>Add comment</button>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((item) => {
        return (
          <div key={item.id}>
            <h2>
              {item.id} | {item.text}
            </h2>
            <button
              onClick={() => {
                deleteComment(item.id);
              }}
            >
              Delete
            </button>
            <hr />
          </div>
        );
      })}
    </>
  );
}

Comments.getLayout = function pageLayout(page) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};
