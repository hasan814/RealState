"use client";

import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { sp } from "@/utils/replaceNumber";

import styles from "./AdminCard.module.css";

const AdminCard = ({ data }) => {
  const { _id, title, description, location, price } = data;

  // ============ Router ============
  const router = useRouter();

  // ============ Functions ============
  const publishedHandler = async () => {
    const response = await fetch(`/api/profile/published/${_id}`, {
      method: "PATCH",
    });
    const result = await response.json();
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    }
  };

  // ============ Rendering ============
  return (
    <div className={styles.container}>
      <Toaster />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.properties}>
        <span>{location}</span>
        <span>{sp(price)}</span>
      </div>
      <button onClick={publishedHandler}>انتشار</button>
    </div>
  );
};

export default AdminCard;
