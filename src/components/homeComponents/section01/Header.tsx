'use client';
import React from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import logo from '@assets/images/logo.png';
import styles from '../style.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Image src={logo} alt="Logo" width={90} height={40} />
        <h3>Qasem Hashemi</h3>
      </div>
      <nav className={styles.right}>
        <div>Home</div>
        <div>Projects</div>
        <div>About</div>
        <div>Contact</div>
        <div><FaSearch size={16} /></div>
      </nav>
    </header>
  );
}
