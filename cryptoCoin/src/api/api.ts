import axios from 'axios';

const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
export const GetCoins = async () => await axios.get(url).then((response) => { console.log(response.data)})

