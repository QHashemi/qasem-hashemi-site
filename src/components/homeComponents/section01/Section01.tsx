import React from "react";
import Header from "./Header";
import ShowCase from "./ShowCase";
import styles from "../style.module.scss";
import background from "@assets/images/showcase-bg.jpg";

export default function Section01() {
  return (
    <section className={styles.section01} style={{ backgroundImage: `url(${background.src})`, position: "relative" }}>
      <div className={styles.overlay1}></div>
      <div className={styles.overlay2}></div>

      <div className={styles.sectionContent}>
        <div className={styles.shape}></div>

        <Header />
        <ShowCase />
      </div>
    </section>
  );
}
