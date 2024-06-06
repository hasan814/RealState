import { v4 as uuidv4 } from "uuid";

import styles from "./AdminPage.module.css";
import AdminCard from "@/modules/AdminCard/AdminCard";

const AdminPage = ({ profiles }) => {
  return (
    <div>
      {profiles.length ? null : (
        <p className={styles.text}>هیچ آگهی در انتظار تاییدی وجود ندارد .</p>
      )}
      {profiles.map((item) => (
        <AdminCard key={uuidv4()} data={item} />
      ))}
    </div>
  );
};

export default AdminPage;
