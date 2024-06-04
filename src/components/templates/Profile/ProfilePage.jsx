"use client";

import { useState } from "react";

import styles from "./ProfilePage.module.css";

const ProfilePage = () => {
  // ========== State =========
  const [profileDate, setProfileDate] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });

  // ========== Rendering =========
  return <div className={styles.container}>ProfilePage</div>;
};

export default ProfilePage;
