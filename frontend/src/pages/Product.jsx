import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Product = () => {
  let { productId } = useParams();
  let { products, currency } = useContext(ShopContext);
  let [productData, setProductData] = useState(false);
  let [image, setImage] = useState("");
  let [size, setSize] = useState("");

  const fetchProductData = () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productData, productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => {
              return (
                <img
                  src={item}
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  alt=""
                />
              );
            })}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className=" flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 cursor-pointer bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      <div className="my-24">
        <div className=" text-center text-3xl py-2">
          <div className="inline-flex gap-2 items-center mb-3">
            <p className="text-gray-500">
              RELATED{" "}
              <span className="text-gray-700 font-medium">PRODUCTS</span>
            </p>
            <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          <a
            className="text-gray-700 cursor-pointer"
            href="/product/6683d8897f779795ecfa98df"
          >
            <div className=" overflow-hidden">
              <img
                className="hover:scale-110 transition ease-in-out"
                src=""
                alt=""
              />
            </div>
            <p className="pt-3 pb-1 text-sm">
              Men Round Neck Pure Cotton T-shirt
            </p>
            <p className=" text-sm font-medium">$64</p>
          </a>
          <a
            className="text-gray-700 cursor-pointer"
            href="/product/6683d94e7f779795ecfa98ed"
          >
            <div className=" overflow-hidden">
              <img
                className="hover:scale-110 transition ease-in-out"
                src="g"
                alt=""
              />
            </div>
            <p className="pt-3 pb-1 text-sm">Men Printed Plain Cotton Shirt</p>
            <p className=" text-sm font-medium">$52</p>
          </a>
          <a
            className="text-gray-700 cursor-pointer"
            href="/product/6683d4587f779795ecfa98a7"
          >
            <div className=" overflow-hidden">
              <img
                className="hover:scale-110 transition ease-in-out"
                src=""
                alt=""
              />
            </div>
            <p className="pt-3 pb-1 text-sm">
              Men Round Neck Pure Cotton T-shirt
            </p>
            <p className=" text-sm font-medium">$26</p>
          </a>
          <a
            className="text-gray-700 cursor-pointer"
            href="/product/6683d57d7f779795ecfa98b7"
          >
            <div className=" overflow-hidden">
              <img
                className="hover:scale-110 transition ease-in-out"
                src=""
                alt=""
              />
            </div>
            <p className="pt-3 pb-1 text-sm">
              Men Round Neck Pure Cotton T-shirt
            </p>
            <p className=" text-sm font-medium">$26</p>
          </a>
          <a
            className="text-gray-700 cursor-pointer"
            href="/product/6683d4f47f779795ecfa98af"
          >
            <div className=" overflow-hidden">
              <img
                className="hover:scale-110 transition ease-in-out"
                src=""
                alt=""
              />
            </div>
            <p className="pt-3 pb-1 text-sm">
              Men Round Neck Pure Cotton T-shirt
            </p>
            <p className=" text-sm font-medium">$68</p>
          </a>
        </div>
      </div>
    </div>
  ) : (
    <div classNameName="opacity-0"></div>
  );
};

export default Product;
