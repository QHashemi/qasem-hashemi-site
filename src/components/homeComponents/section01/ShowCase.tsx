"use client";
import React from "react";
import styles from "../style.module.scss";
import { programmingSkills } from "../data";

export default function ShowCase() {
  return (
    <section className={styles.showCase}>
      <div className={styles.showCaseContent}>
        <div className={styles.left}>
          <h1>Software Developer & IT Administrator</h1>
          <p>
            Bridging code and infrastructure — delivering robust software and
            managing efficient IT systems.
          </p>
          <div className={styles.actions}>
            <button className={styles.primary}>About Me</button>
            <button className={styles.outline}>My Resume</button>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.container}></div>
        </div>
      </div>

      {/* ✅ Responsive skills grid */}
      {/* <div className={styles.skills}>
        {programmingSkills.map(({ id, name, icon: Icon }) => (
          <div key={id} className={styles.skillItem} title={name}>
            <Icon size={30} />
          </div>
        ))}
      </div> */}
    </section>
  );
}
