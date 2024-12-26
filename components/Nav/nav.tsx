"use client";

import styles from "@/components/Nav/nav.module.css";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    setNavIsOpen(false);
  };

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}

      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className="sr-only">MENU</span>
      </button>

      <ul className={styles.list}>
        <li>
          <Link href="#topmessage" onClick={closeNav}>
            Top
          </Link>
        </li>
        <li>
          <Link href="#activity" onClick={closeNav}>
            活動紹介
          </Link>
        </li>
        <li>
          <Link href="#member" onClick={closeNav}>
            構成人数
          </Link>
        </li>
        <li>
          <Link href="#enter" onClick={closeNav}>
            入会方法
          </Link>
        </li>
        <li>
          <Link href="#contact" onClick={closeNav}>
            お問い合わせ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
