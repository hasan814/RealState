"use client";

import { FiLogOut } from "react-icons/fi";
import { signOut } from "next-auth/react";

import styles from "./Logout.module.css";

const LogOut = () => {
  return (
    <button className={styles.button} onClick={signOut}>
      <FiLogOut />
      خروج
    </button>
  );
};

export default LogOut;
