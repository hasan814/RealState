"use client";

import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

import styles from "./DashboardCard.module.css";
import Card from "@/elements/Card/Card";

const DashboardCard = ({ data }) => {
  // =========== Function ==========
  const editHandler = () => {};
  const deleteHandler = () => {};

  // =========== Rendering ==========
  return (
    <div className={styles.container}>
      <Card {...data} />
      <div className={styles.main}>
        <button onClick={editHandler}>
          ویرایش
          <FiEdit />
        </button>
        <button onClick={deleteHandler}>
          حذف آگهی
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
};

export default DashboardCard;
