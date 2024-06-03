"use client";

import { useState } from "react";
import styles from "./SignUpPage.module.css";
import Link from "next/link";

const SignUpPage = () => {
  // ============= State ============
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  // ============= Rendering ============
  return (
    <div className={styles.form}>
      <h4>فرم ثبت نام</h4>
      <form>
        <label htmlFor="email">ایمیل :</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">رمز عبور :</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <label htmlFor="rePassword"> تکرار رمز عبور</label>
        <input
          id="rePassword"
          type="rePassword"
          value={rePassword}
          onChange={(event) => setRePassword(event.target.value)}
        />
        <button type="submit">ثبت نام</button>
      </form>
      <p>
        حساب کاربری دارید ؟<Link href={"/signin"}>ورود</Link>
      </p>
    </div>
  );
};

export default SignUpPage;
