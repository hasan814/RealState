import { CgProfile } from "react-icons/cg";

import styles from "./SideBar.module.css";
import Link from "next/link";
import LogOut from "@/modules/LogOut/LogOut";

const SideBar = async ({ children, role, email }) => {
  // ========== Rendering ===========
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        <p>{role === "ADMIN" ? "ADMIN" : null}</p>
        <p>{email}</p>
        <span></span>
        <Link href={"/dashboard"}>حساب کاربری</Link>
        <Link href={"/dashboard/my-profiles"}>آگهی های من</Link>
        <Link href={"/dashboard/add"}>ثبت آگهی</Link>
        {role === "ADMIN" ? <Link href={"/admin"}>در انتظار تایید</Link> : null}
        <LogOut />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default SideBar;
