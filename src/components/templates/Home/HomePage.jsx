import { v4 as uuidv4 } from "uuid";
import { services } from "@/utils/helper";
import { FiCircle } from "react-icons/fi";

import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و اجاره ملک</h1>
          <ul>
            {services.map((service) => (
              <li key={uuidv4()}>
                <FiCircle />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePage;
