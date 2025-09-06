"use client";

import React from "react";
import styles from "./MarqueeBar.module.css";

export default function MarqueeBar() {
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marquee}>
        <span>
          *Get freebies worth upto ₹500 & upto ₹200 off on all prepaid orders
        </span>
       </div>
    </div>
  );
}