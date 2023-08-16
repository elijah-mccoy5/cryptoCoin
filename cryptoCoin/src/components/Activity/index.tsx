import "./index.css";

const Activity = ({ coin }) => {
  if (Object.keys(coin).length === 0) {
    return null;
  }
  return (
    <div className="activityContainer">
      <h1>{coin.name}</h1>
      <img src={coin.image} style={{ height: "10vh" }} />
      <h2 className="currPrice">${coin.current_price}</h2>
      <div className="specs">
        <p>24 Hour High: ${coin.high_24h}</p>
        <p>24 Hour Low: ${coin.low_24h}</p>
        <p>Market Cap: {coin.market_cap}</p>
        <p>24 Hour Price Change: {coin.price_change_24h}</p>
        <p>
          24 Hour Price Change Percentage: {coin.price_change_percentage_24h}
        </p>
      </div>
    </div>
  );
};

export default Activity;
