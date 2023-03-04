import React from "react";

//Styles
import styles from "./Titles.module.css";

const Titles = () => {
  return (
    <div>
      <div className={styles.container}>
        <span className={styles.name}>Coin</span>
        <span className={styles.symbol}>Symbol</span>
        <span className={styles.currentPrice}>Price</span>
        <span className={styles.priceChange}>Price Change</span>
        <span className={styles.marketCap}>Market Cap </span>
      </div>
    </div>
  );
};

export default Titles;
