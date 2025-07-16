const TItle = ({ text1, text2 }) => {
  return (
    <>
      <div class="inline-flex gap-2 items-center mb-3">
        <p class="text-gray-500">
          {text1} <span class="text-gray-700 font-medium">{text2}</span>
        </p>
        <p class="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
      </div>
      <p class="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the.
      </p>
    </>
  );
};

export default TItle;
