import { useRouter } from "next/router";

export default function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  return (
    <div>
      <h1>Catch all routes{params[0]}</h1>
    </div>
  );
}
