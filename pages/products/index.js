import Link from "next/link";

export default function ProductList({ products }) {
  return (
    <>
    <h1>List of products</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link href={`/products/${product.id}`}>
              <a>
                <h2>{product.id} {product.title} {product.price}</h2>
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
  const response = await fetch("http://localhost:3000/products");
  const data = await response.json();

  return {
    props: {
      products: data
    },
    revalidate: 60
  };
}
