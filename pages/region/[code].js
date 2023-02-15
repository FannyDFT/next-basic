import axios from "axios";
import Head from "next/head";

const CodeRegion = ({ data }) => {
  return (
    <>
      {data && (
        <>
          <Head>
            <title>{data.nom}</title>
          </Head>
          <h1>Région : {data.nom}</h1>
          <p>Code: {data.code}</p>
        </>
      )}
    </>
  );
};

export default CodeRegion;

export const getServerSideProps = async ({ params }) => {
  const code = params.code;
  const url = "http://geo.api.gouv.fr";
  const { data } = await axios.get(`${url}/regions/${code}`);

  return {
    props: {
      data,
    },
  };
};
