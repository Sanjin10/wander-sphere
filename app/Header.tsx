"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import cart from "../public/cart.png";
import user from "../public/user.png";

export default function Header() {
  const [search, setSearch] = useState(""); // Declare the 'search' variable here

  useEffect(() => {}, []);
  return (
    <header>
      <div className="w-full flex justify-between items-center px-8 py-5 bg-gradient-to-r from-sky-900 to-cyan-700 fixed">
        <Link href="/">
          <Image src={logo} alt="Logo" width={120} height={60} />
        </Link>
        <div className="justify-end items-center gap-8 w-2/4 md:flex hidden">
          <input
            className="input_field"
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search for products"
            value={search}
          ></input>
          <Link href="/cart" className="icon">
            <Image src={cart} alt="cart" width={24} height={24} />
          </Link>
          <Link href="/user" className="icon">
            <Image src={user} alt="profile" width={24} height={24} />
          </Link>
        </div>
      </div>
    </header>
  );
}
