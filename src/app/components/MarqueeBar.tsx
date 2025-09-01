"use client";

import React from "react";
import styles from "./MarqueeBar.module.css";

export default function MarqueeBar() {
  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marquee}>
        <span>
          Join the Beyuvana Tribe — Get 20% Off Your First Order and Glow from
          Within. &nbsp; • &nbsp;
        </span>
       </div>
    </div>
  );
}