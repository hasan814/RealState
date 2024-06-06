import { HiOutlineLocationMarker } from "react-icons/hi";
import { categories, icons } from "@/utils/helper";
import { BiCalendarCheck } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { SiHomebridge } from "react-icons/si";
import { e2p, sp } from "@/utils/replaceNumber";

import ItemList from "@/elements/List/ItemList";
import ShareBtn from "@/elements/Share/ShareBtn";
import styles from "./DetailsPage.module.css";
import Title from "@/elements/Title/Title";

const DetailsPage = ({ data }) => {
  const {
    price,
    title,
    location,
    phone,
    description,
    category,
    amenities,
    rules,
    realState,
    constructionDate,
  } = data;

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {location}
        </span>
        <Title>توضیحات</Title>
        <p>{description}</p>
        <Title>امکانات رفاهی</Title>
        <ItemList data={amenities} />
        <h3 className={styles.title}>قوانین</h3>
        <ItemList data={rules} />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.realState}>
          <SiHomebridge />
          <p>{realState} املاک</p>
          <span>
            <AiOutlinePhone />
            {e2p(phone)}
          </span>
        </div>
        <ShareBtn />
        <div className={styles.price}>
          <p>
            {icons[category]} {categories[category]}
          </p>
          <p>{sp(price)} تومان</p>
          <p>
            <BiCalendarCheck />
            {new Date(constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
