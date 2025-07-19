import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  let { navigate } = useContext(ShopContext);
  return (
    <form class="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      <div class="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div class="text-xl sm:text-2xl my-3">
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>
        <div class="flex gap-3">
          <input
            required=""
            name="firstName"
            class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First name"
            value=""
          />
          <input
            required=""
            name="lastName"
            class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last name"
            value=""
          />
        </div>
        <input
          required=""
          name="email"
          class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email address"
          value=""
        />
        <input
          required=""
          name="street"
          class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street"
          value=""
        />
        <div class="flex gap-3">
          <input
            required=""
            name="city"
            class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
            value=""
          />
          <input
            name="state"
            class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
            value=""
          />
        </div>
        <div class="flex gap-3">
          <input
            required=""
            name="zipcode"
            class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Zipcode"
            value=""
          />
          <input
            required=""
            name="country"
            class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
            value=""
          />
        </div>
        <input
          required=""
          name="phone"
          class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Phone"
          value=""
        />
      </div>
      <div class="mt-8">
        <div class="mt-8 min-w-80">
          <div class="w-full">
            <div class="text-2xl">
              <Title text1="CART" text2="TOTAL" />
            </div>
            <div class="flex flex-col gap-2 mt-2 text-sm">
              <div class="flex justify-between">
                <p>Subtotal</p>
                <p>$ 0.00</p>
              </div>
              <hr />
              <div class="flex justify-between">
                <p>Shipping Fee</p>
                <p>$ 10.00</p>
              </div>
              <hr />
              <div class="flex justify-between">
                <b>Total</b>
                <b>$ 0.00</b>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12">
          <Title text1="PAYMENT" text2="Method" />
          <div class="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              class="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                class={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img class="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              class="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                class={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img class="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              class="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                class={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p class="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div class="w-full text-end mt-8">
            <button
              onClick={() => navigate("/orders")}
              type="submit"
              class="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
