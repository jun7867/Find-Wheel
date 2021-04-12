import React from 'react';
import styles from './navbar.module.css';
const Navbar = () => (
  <>
    <nav className={styles.nav}>
      <img className={styles.logo} src="/images/logo.png" alt="logo" />
      <span className={styles.home}>Home</span>
      <span className={styles.location}>장소 리스트</span>
      <input className={styles.input} type="search" placeholder="검색"></input>
      <button className={styles.searchBtn}>
        <img className={styles.searchImg} src="/images/search2.png" alt="search button" />
      </button>
      <span className={styles.login}>로그인</span>
      <span className={styles.logout}>로그아웃</span>
      <span className={styles.signup}>회원가입</span>
    </nav>
    <hr className={styles.hr}></hr>
  </>
);

export default Navbar;
