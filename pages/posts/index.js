import Link from "next/link";

export default function PostList({ posts }) {
  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>
                <h1>{post.title}</h1>
              </a>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.splice(0, 3),
    },
  };
}
