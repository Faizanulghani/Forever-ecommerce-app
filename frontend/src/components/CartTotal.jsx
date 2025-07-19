import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount, navigate } =
    useContext(ShopContext);
  return (
    <div className="flex justify-end my-20">
      <div className="w-full sm:w-[450px]">
        <div className="w-full">
          <Title text1="CART" text2="TOTAL" />
          <div className="flex flex-col gap-2 mt-2 text-sm">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>
                {currency} {getCartAmount()}.00
              </p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Shipping Fee</p>
              <p>
                {currency} {delivery_fee}.00{" "}
              </p>
            </div>
            <hr />
            <div className="flex justify-between">
              <b>Total</b>
              <b>
                {currency} {getCartAmount() + delivery_fee}.00{" "}
              </b>
            </div>
          </div>
        </div>
        <div className=" w-full text-end">
          <button
            onClick={() => navigate("/place-order")}
            className="bg-black text-white text-sm my-8 px-8 py-3"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
