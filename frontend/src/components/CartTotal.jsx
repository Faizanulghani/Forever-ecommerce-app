import Title from "./Title";

const CartTotal = () => {
  return (
    <div class="flex justify-end my-20">
      <div class="w-full sm:w-[450px]">
        <div class="w-full">
         <Title text1="CART" text2="TOTAL" />
          <div class="flex flex-col gap-2 mt-2 text-sm">
            <div class="flex justify-between">
              <p>Subtotal</p>
              <p>$ 80.00</p>
            </div>
            <hr />
            <div class="flex justify-between">
              <p>Shipping Fee</p>
              <p>$ 10.00</p>
            </div>
            <hr />
            <div class="flex justify-between">
              <b>Total</b>
              <b>$ 90.00</b>
            </div>
          </div>
        </div>
        <div class=" w-full text-end">
          <button class="bg-black text-white text-sm my-8 px-8 py-3">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
