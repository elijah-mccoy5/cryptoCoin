import { useEffect, useState } from "react";
import axios from "axios";
import Coin from "../../components/Coin";
import Activity from "../../components/Activity";
import { HomeProps } from "../../models/homeInterface";
import "./index.css";

const Home = () => {
  const [cryptos, setCryptos] = useState<HomeProps[] | null>(null);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then((res) => setCryptos(res.data));
  }, []);

  return (
    <div className="cardContainer">
      <div className="prices">
        {cryptos
          ? cryptos.map((crypto) => {
              return (
                <Coin
                  name={crypto.name}
                  image={crypto.image}
                  current_price={crypto.current_price}
                  id={crypto.id}
                />
              );
            })
          : null}
      </div>
      <div className="activity">
        <Activity />
      </div>
    </div>
  );
};

export default Home;
