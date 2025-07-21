import { assets } from "../assets/assets";

const Add = () => {
  return (
    <form class="flex flex-col w-full items-start gap-3">
      <div>
        <p class="mb-2">Upload Image</p>
        <div class="flex gap-2">
          <label for="image1">
            <img class="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image2" hidden />
          </label>
          <label for="image2">
            <img class="w-20" src={assets.upload_area} alt="" />{" "}
            <input type="file" id="image2" hidden />
          </label>
          <label for="image3">
            <img class="w-20" src={assets.upload_area} alt="" />{" "}
            <input type="file" id="image3" hidden />
          </label>
          <label for="image4">
            <img class="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image4" hidden />
          </label>
        </div>
      </div>
      <div class="w-full">
        <p class="mb-2">Product name</p>
        <input
          class="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required=""
          value=""
        />
      </div>
      <div class="w-full">
        <p class="mb-2">Product description</p>
        <textarea
          class="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Write content here"
          required=""
        ></textarea>
      </div>
      <div class="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p class="mb-2">Product category</p>
          <select class="w-full px-3 py-2">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p class="mb-2">Sub category</p>
          <select class="w-full px-3 py-2">
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p class="mb-2">Product Price</p>
          <input
            class="w-full px-3 py-2 sm:w-[120px]"
            type="Number"
            placeholder="25"
            value=""
          />
        </div>
      </div>
      <div>
        <p class="mb-2">Product Sizes</p>
        <div class="flex gap-3">
          <div>
            <p class="bg-slate-200 px-3 py-1 cursor-pointer">S</p>
          </div>
          <div>
            <p class="bg-slate-200 px-3 py-1 cursor-pointer">M</p>
          </div>
          <div>
            <p class="bg-slate-200 px-3 py-1 cursor-pointer">L</p>
          </div>
          <div>
            <p class="bg-slate-200 px-3 py-1 cursor-pointer">XL</p>
          </div>
          <div>
            <p class="bg-slate-200 px-3 py-1 cursor-pointer">XXL</p>
          </div>
        </div>
      </div>
      <div class="flex gap-2 mt-2">
        <input type="checkbox" id="bestseller" />
        <label class="cursor-pointer" for="bestseller">
          Add to bestseller
        </label>
      </div>
      <button type="submit" class="w-28 py-3 mt-4 bg-black text-white">
        ADD
      </button>
    </form>
  );
};

export default Add;
