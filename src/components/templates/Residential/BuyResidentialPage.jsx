import { v4 as uuidv4 } from "uuid";

import Card from "@/elements/Card/Card";
import styles from "./BuResidentialPage.module.css";
import Sidebar from "@/modules/Sidebar/Sidebar";

const BuyResidentialPage = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        {data.length ? null : (
          <p className={styles.text}>هیچ آگهی ثبت نشده است .</p>
        )}
        {data.map((profile) => (
          <Card key={uuidv4()} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default BuyResidentialPage;
