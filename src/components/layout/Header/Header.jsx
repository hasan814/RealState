import { FiLogIn } from "react-icons/fi";

import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href={"/"}>صفحه اصلی</Link>{" "}
          </li>
          <li>
            <Link href={"/buy-residential"}>صفحه آگهی ها</Link>{" "}
          </li>
        </ul>
      </div>
      <div className={styles.login}>
        <Link href="/signin">
          <FiLogIn />
          <span>صفحه ورود</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
