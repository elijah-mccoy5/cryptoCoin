import { useEffect, useState } from "react";
import axios from "axios";
import Coin from "../../components/Coin";
// import Activity from "../../components/Activity";
import { HomeProps } from "../../models/homeInterface";
// import { ActivityProps } from "../../models/activityInterface";
import "./index.css";
// import { ActivityProps } from "../../models/activityInterface";

const Home = () => {
  const [cryptos, setCryptos] = useState<HomeProps[] | null>(null);
  // const [activity, setActivity] = useState<ActivityProps[] | null>(null)
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
    <div className="cardContainer">
      <div className="prices">
        {cryptos
          ? cryptos.map((crypto) => {
              return (
                <Coin
                  key={crypto.id}
                  name={crypto.name}
                  image={crypto.image}
                  current_price={crypto.current_price}
                  id={crypto.id}
                  onSelectItem={() => console.log(crypto)}
                />
              );
            })
          : null}
      </div>
      <div className="activity">
        {}
        {/* <Activity  
        current_price={activity.current_price};
    high_24h={activity.high_24h} 
    low_24h={activity.low_24h}
  id={activity.id}
  image={activity.image}
  name={activity.name};
  price_change_24h={activity.price_change_24h}
  price_change_percentage_24h={activity.price_change_percentage_24h} /> */}
      </div>
    </div>
  );
};

export default Home;
