import { useEffect, useState } from "react";
import axios from "axios";
import Coin from "../../components/Coin";
// import Activity from "../../components/Activity";
import { HomeProps } from "../../models/homeInterface";
// import { ActivityProps } from "../../models/activityInterface";
import "./index.css";
import Activity from "../../components/Activity";
// import { ActivityProps } from "../../models/activityInterface";

const Home = () => {
  const [cryptos, setCryptos] = useState<HomeProps[] | null>(null);
  const [currentCoin, setCurrentCoin] = useState({});
  //   const [isActive, setIsActive] = useState(0);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        setCryptos(res.data);
      });
  }, []);

  return (
    <div className="home">
      <div className="prices">
        {cryptos &&
          cryptos.map((crypto) => {
            return (
              <Coin
                key={crypto.id}
                name={crypto.name}
                image={crypto.image}
                current_price={crypto.current_price}
                id={crypto.id}
                onSelectItem={() => {
                  setCurrentCoin(crypto);
                  console.log(crypto);
                }}
              />
            );
          })}
      </div>
      <div className="activity">
        <Activity coin={currentCoin} />
      </div>
    </div>
  );
};

export default Home;
