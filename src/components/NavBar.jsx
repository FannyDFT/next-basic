import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import styleHeader from "../../styles/header.module.css";

function NavBar() {
  const router = useRouter();
  return (
    <div className={styleHeader.header}>
      <Link
        className={router.pathname === "/" ? "text-blue-500" : "text-gray-500"}
        href="/"
      >
        Home
      </Link>
      <Link
        className={
          router.pathname === "/blog" ? "text-blue-500" : "text-gray-500"
        }
        href="/blog"
      >
        Blog
      </Link>
      <Link
        className={
          router.pathname === "/profile" ? "text-blue-500" : "text-gray-500"
        }
        href="/profile"
      >
        Profile
      </Link>
      <Link
        className={
          router.pathname === "/blog/items" ? "text-blue-500" : "text-gray-500"
        }
        href="/blog/items"
      >
        Items
      </Link>
      <Link
        className={
          router.pathname === "/blog/categories"
            ? "text-blue-500"
            : "text-gray-500"
        }
        href="/blog/categories"
      >
        Categories
      </Link>
    </div>
  );
}

export default NavBar;
