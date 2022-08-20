export default function Post({ post }) {
  return (
    <>
      <div key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <hr />
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          postId: "1",
        },
      },
      {
        params: {
          postId: "2",
        },
      },
      {
        params: {
          postId: "3",
        },
      },
    ],
    fallback: false,
  };
}
