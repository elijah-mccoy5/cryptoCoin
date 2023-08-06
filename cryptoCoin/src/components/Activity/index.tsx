import { useEffect } from "react";
import { ActivityProps } from "../../models/activityInterface";
import "./index.css";

const Activity = (props: ActivityProps) => {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div className="activityContainer">
      {/* <h1>{props.name}</h1>
      <h1>{props.current_price}</h1>
      <h1>{props.high_24h}</h1>
      <h1>{props.id}</h1>
      <img src={props.image} />
      <h1>{props.low_24h}</h1>
      <h1>{props.price_change_24h}</h1>
      <h1>{props.price_change_percentage_24h}</h1> */}
    </div>
  );
};

export default Activity;
