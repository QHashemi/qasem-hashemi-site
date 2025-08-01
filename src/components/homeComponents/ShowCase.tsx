'use client';
import React from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import Qasem from '@assets/images/carton-image-3.png';

export default function ShowCase() {
  return (
    <section className={styles.showCase}>
      <div className={styles.left}>
        <h1>Software Developer & IT Administrator</h1>
        <p>
          Bridging code and infrastructure — delivering robust software and managing efficient IT systems.
        </p>
        <div className={styles.actions}>
          <button className={styles.primary}>About Me</button>
          <button className={styles.outline}>Projects</button>
        </div>
      </div>
      <div className={styles.right}>
        <Image
          src={Qasem}
          alt="Qasem Hashemi"
          className={styles.image}
          priority
        />
      </div>
    </section>
  );
}
