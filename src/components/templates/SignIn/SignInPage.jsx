"use client";

import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";

import styles from "./SignInPage.module.css";
import Link from "next/link";
import Loader from "@/modules/Loader";

const SignInPage = () => {
  // ============= Router ============
  const router = useRouter();

  // ============= State ============
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // ============= Function ============
  const signUpHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (response.error) toast.error(response.error);
    else router.push("/");
  };

  // ============= Rendering ============
  return (
    <div className={styles.form}>
      <Toaster />
      <h4>فرم ورود</h4>
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
        {loading ? (
          <Loader />
        ) : (
          <button type="submit" onClick={signUpHandler}>
            ثبت نام
          </button>
        )}
      </form>
      <p>
        حساب کاربری ندارید ؟<Link href={"/signup"}>ثبت نام</Link>
      </p>
    </div>
  );
};

export default SignInPage;
