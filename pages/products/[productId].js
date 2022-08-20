export default function Product({ product }) {
  return (
    <>
      <div key={product.id}>
        <h2>{product.id} {product.title} {product.price}</h2>
        <p>{product.description}</p>
        <hr />
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const response = await fetch(
    `http://localhost:3000/products/${params.productId}`
  );
  const data = await response.json();

  return {
    props: {
      product: data,
    },
    revalidate: 60
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          productId: "1",
        }
      }
    ],
    fallback: false,
  };
}
