import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import TItle from "./TItle";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  let [bestSellers, setBestSellers] = useState([]);
  let { products } = useContext(ShopContext);

  useEffect(() => {
    let bestProducts = products.filter((item) => item.bestseller === true);
    setBestSellers(bestProducts.slice(0, 5));
  }, []);

  return (
    <div class="my-10">
      <div class="text-center text-3xl py-8">
        <TItle text1="BEST" text2="SELLER" />
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSellers.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};
export default BestSeller;
