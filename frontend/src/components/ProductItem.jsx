import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";

const ProductItem = ({ id, image, name, price }) => {
  let { currency } = useContext(ShopContext);
  return (
    <Link class="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div class=" overflow-hidden">
        <img
          class="hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt=""
        />
      </div>
      <p class="pt-3 pb-1 text-sm">{name}</p>
      <p class="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
