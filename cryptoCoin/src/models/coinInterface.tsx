export interface CoinProps {
  key: string;
  name: string;
  image: string;
  id: string;
  current_price: number;
  onSelectItem: () => void;
}
