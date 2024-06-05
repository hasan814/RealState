"use client";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { LuShare2 } from "react-icons/lu";

import styles from "./ShareBtn.module.css";
import { useEffect, useState } from "react";

const ShareBtn = () => {
  // ============= State =============
  const [url, setUrl] = useState("");

  // ============= Effect =============
  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  // ============= Rendering =============
  return (
    <CopyToClipboard text={url}>
      <div className={styles.container}>
        <LuShare2 />
        <button>اشتراک گذاری</button>
      </div>
    </CopyToClipboard>
  );
};

export default ShareBtn;
