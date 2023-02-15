import axios from "axios";
import Link from "next/link";
import Head from "next/head";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Liste des regions</title>
      </Head>
      <img src="/image/epilation.jpg" />
      <h1>Cette page utilise getServerSideProps</h1>
      <h1 className="text-red-400">Hello</h1>
      {data.map((region) => (
        <div key={region.id} className="mb-10">
          <Link href="/region/[code]" as={`/region/${region.code}`}>
            <h1 className="font-semibold text-3xl">{region.nom}</h1>
          </Link>

          <p>{region.code}</p>
          <hr className="border-solid border-gray-800" />
        </div>
      ))}
    </>
  );
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(`${process.env.API_GEO}/regions`);
  return {
    props: {
      data,
    },
  };
};
