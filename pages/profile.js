import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";

function Profile() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data);

  return (
    <>
      <Head>
        <title>Liste des utilisateurs </title>
      </Head>
      {data &&
        data.map((user) => (
          <div key={data.id} className="m-5 p-5 border-black border-solid ">
            <h1> Nom : {user.name}</h1>
            <p>Email :{user.email}</p>
            <p>Teléphone : {user.phone}</p>
          </div>
        ))}
    </>
  );
}

export default Profile;
