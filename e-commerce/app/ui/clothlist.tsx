import { dummyClothes } from "../data/clothes";
import ClothingCard from "./clothingcard";

// eslint-disable-next-line react/display-name
export default function List() {
  const listClothes = dummyClothes.map((c) => (
    <ClothingCard key={c.id} cloth={c} />
  ));
  return <div>{listClothes}</div>;
}
