import React from "react";
import { useRouter } from "next/router";

function Name() {
  const router = useRouter();
  return <h1>{router.query.name}</h1>;
}

export default Name;
