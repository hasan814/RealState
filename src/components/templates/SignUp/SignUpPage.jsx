"use client";

import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

import styles from "./SignUpPage.module.css";
import Link from "next/link";
import Loader from "@/elements/Loader/Loader";

const SignUpPage = () => {
  // ============= Router ============
  const router = useRouter();

  // ============= State ============
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);

  // ============= Function ============
  const signUpHandler = async (event) => {
    event.preventDefault();
    if (password !== rePassword) {
      toast.error("رمز و تکرار آن برابر نیست");
      return;
    }
    setLoading(true);
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setLoading(false);
    if (response.status === 201) router.push("/signin");
    else toast.error(data.error);
  };

  // ============= Rendering ============
  return (
    <div className={styles.form}>
      <Toaster />
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
          type="password"
          value={rePassword}
          onChange={(event) => setRePassword(event.target.value)}
        />
        {loading ? (
          <Loader />
        ) : (
          <button type="submit" onClick={signUpHandler}>
            ثبت نام
          </button>
        )}
      </form>
      <p>
        حساب کاربری دارید ؟<Link href={"/signin"}>ورود</Link>
      </p>
    </div>
  );
};

export default SignUpPage;
