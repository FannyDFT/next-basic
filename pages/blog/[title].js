import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { data } from "autoprefixer";

function Title() {
  const router = useRouter();
  return (
    <>
      {data && (
        <>
          <Head>
            <title>{data.title}</title>
          </Head>
          <h1>{router.query.title}</h1>;
        </>
      )}
    </>
  );
}

export default Title;
