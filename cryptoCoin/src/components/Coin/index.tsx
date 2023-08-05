import { CoinProps } from "../../models/coinInterface";
import "./index.css";

const Coin = (props: CoinProps) => {
  return (
    <div className="coinContainer" key={props.id}>
      <div className="coinBrand">
        <img src={props.image} />
        <h1>{props.name}</h1>
      </div>
      <div className="coinPrice">
        <p>${props.current_price}</p>
      </div>
    </div>
  );
};

export default Coin;
