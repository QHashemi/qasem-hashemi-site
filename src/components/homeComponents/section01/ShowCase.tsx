"use client";
import React from "react";
import styles from "../style.module.scss";
import Image from "next/image";
import { programmingSkills } from "../data";

export default function ShowCase() {
  return (
    <section className={styles.showCase}>
      <div className={styles.showCaseContent}>
        <div className={styles.left}>
          <h1>Software Developer & IT Administrator</h1>
          <p>Bridging code and infrastructure — delivering robust software and managing efficient IT systems.</p>
          <div className={styles.actions}>
            <button className={styles.primary}>About Me</button>
            <button className={styles.outline}>My resume</button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.container}></div>
        </div>
      </div>

      <div className={styles.skills} style={{gridTemplateColumns:`repeat(${programmingSkills.length}, 1fr)`}}>
        {programmingSkills.map(({ id, name, icon: Icon }) => (
          <div key={id} className="skillItem" title={name}>
            <Icon size={30} />
          </div>
        ))}
      </div>
    </section>
  );
}
