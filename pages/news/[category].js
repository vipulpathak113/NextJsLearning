export default function NewsByCategory({ articles, category }) {
  return (
    <>
      <h1>List of articles in category {category}</h1>

      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h3>
              {article.id} | {article.title}
            </h3>
            <p>{article.description}</p>
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;

  if (!category) {
    return {
      notFound: true,
    };
  }

  const response = await fetch(
    `http://localhost:3000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
