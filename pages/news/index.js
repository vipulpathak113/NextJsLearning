export default function NewsList({news}) {
  return (
    <>
    <h1>List of news</h1>
    {news.map(item=>{
      return(
        <h2 key={item.id}>{item.id} {item.title} | {item.category} </h2>
      )
    })}
    </>
  )
}

export async function getServerSideProps(){
  const response = await fetch("http://localhost:3000/news");
  const data = await response.json();

  return {
    props: {
      news: data
    },
  };

}
