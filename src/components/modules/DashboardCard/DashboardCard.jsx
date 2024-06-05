"use client";

import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

import styles from "./DashboardCard.module.css";
import Card from "@/elements/Card/Card";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const DashboardCard = ({ data }) => {
  // =========== Router ==========
  const router = useRouter();

  // =========== Function ==========
  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
  };

  const deleteHandler = async () => {
    const response = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    });
    const deleteData = await response.json();
    if (deleteData.error) {
      toast.error(deleteData.error);
    } else {
      toast.success(deleteData.message);
      router.refresh();
    }
  };

  // =========== Rendering ==========
  return (
    <div className={styles.container}>
      <Toaster />
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
