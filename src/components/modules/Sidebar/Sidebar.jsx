import { HiFilter } from "react-icons/hi";
import { queries } from "@/utils/helper";
import { v4 as uuidv4 } from "uuid";
import styles from "./Sidebar.module.css";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link href={"/buy-residential"}>همه</Link>
      {queries.map((query) => (
        <Link
          href={{
            pathname: "/buy-residential",
            query: { category: Object.keys(query) },
          }}
          key={uuidv4()}
        >
          {Object.values(query)}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
