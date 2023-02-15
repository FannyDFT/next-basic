import React from "react";
import Link from "next/link";
import Head from "next/head";

const PostLink = ({ title }) => {
  return (
    <li>
      <Link href="/blog/[title]" as={`/blog/${title}`}>
        {title}
      </Link>
    </li>
  );
};

function Blog() {
  return (
    <>
      <Head>
        <title>Liste des blogs</title>
      </Head>
      blog
      <ul>
        <PostLink title="react" />
        <PostLink title="angular" />
        <PostLink title="vue" />
        <PostLink title="svelte" />
      </ul>
    </>
  );
}

export default Blog;
