import { useAsyncData } from "./async-fn";

export function NoSuspenseExample() {
  const data = useAsyncData("Primer dato");
  const moreData = useAsyncData("Segundo dato");

  if (data.loading || moreData.loading) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <div>{data.value}</div>
      <div>{moreData.value}</div>
    </div>
  );
}
