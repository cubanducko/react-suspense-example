import React, { Suspense } from "react";
import { useSuspenseAsyncData } from "./async-fn";

export function SuspenseExample() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <SuspenseContent />
    </Suspense>
  );
}

function SuspenseContent() {
  const data = useSuspenseAsyncData("Primer dato");
  const moreData = useSuspenseAsyncData("Segundo dato");
  return (
    <div>
      <div>{data}</div>
      <div>{moreData}</div>
    </div>
  );
}
