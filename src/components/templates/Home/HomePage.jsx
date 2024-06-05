import { v4 as uuidv4 } from "uuid";
import { categories, services } from "@/utils/helper";
import { FiCircle } from "react-icons/fi";

import styles from "./HomePage.module.css";
import CategoryCard from "@/modules/CategoryCard/CategoryCard";

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
      <div className={styles.categories}>
        {categories.map((category) => (
          <CategoryCard
            title={category.title}
            name={category.name}
            key={uuidv4()}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
