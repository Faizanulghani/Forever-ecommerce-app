import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount, navigate } =
    useContext(ShopContext);
  return (
    <div class="flex justify-end my-20">
      <div class="w-full sm:w-[450px]">
        <div class="w-full">
          <Title text1="CART" text2="TOTAL" />
          <div class="flex flex-col gap-2 mt-2 text-sm">
            <div class="flex justify-between">
              <p>Subtotal</p>
              <p>
                {currency} {getCartAmount()}.00
              </p>
            </div>
            <hr />
            <div class="flex justify-between">
              <p>Shipping Fee</p>
              <p>
                {currency} {delivery_fee}.00{" "}
              </p>
            </div>
            <hr />
            <div class="flex justify-between">
              <b>Total</b>
              <b>
                {currency} {getCartAmount() + delivery_fee}.00{" "}
              </b>
            </div>
          </div>
        </div>
        <div class=" w-full text-end">
          <button
            onClick={() => navigate("/place-order")}
            class="bg-black text-white text-sm my-8 px-8 py-3"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
