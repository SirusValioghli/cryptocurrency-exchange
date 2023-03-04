import React, { useEffect, useState } from "react";

//Components
import Loader from "./Loader";
import Coin from "./Coin";
import Titles from "./Titles";

//API
import { getCoin } from "../services/api";

//Styles
import styles from "./Landing.module.css";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      setCoins(data);
    };

    fetchAPI();
  }, []);

  const searchHandler = (event) => {
    setsearch(event.target.value);
  };

  const searchedCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <>
      <input
        className={styles.input}
        type="text"
        placeholder="Search..."
        value={search}
        onChange={searchHandler}
      />
      {
        <div>
          {coins.length ? (
            <div className={styles.coinContainer}>
              <Titles />
              {searchedCoins.map((coin) => (
                <Coin
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  price={coin.current_price}
                  priceChange={coin.price_change_percentage_24h}
                  marketCap={coin.market_cap}
                />
              ))}
            </div>
          ) : (
            <Loader />
          )}
        </div>
      }
    </>
  );
};

export default Landing;
