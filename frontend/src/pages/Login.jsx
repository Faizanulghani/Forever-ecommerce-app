import { useState } from "react";

const Login = () => {
  let [currentState, setCurrentState] = useState("sign up");
  let onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      class="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div class="inline-flex items-center gap-2 mb-2 mt-10">
        <p class="prata-regular text-3xl">{currentState}</p>
        <hr class="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "login" ? (
        ""
      ) : (
        <input
          type="text"
          class="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          required=""
          value=""
        />
      )}
      <input
        type="email"
        class="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required=""
        value=""
      />
      <input
        type="password"
        class="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required=""
        value=""
      />
      <div class="w-full flex justify-between text-sm mt-[-8px]">
        {currentState === "login" ? (
          <p class=" cursor-pointer">Forgot your password?</p>
        ) : (
          <p class=" cursor-pointer">Already have a Account?</p>
        )}
        {currentState === "login" ? (
          <p onClick={() => setCurrentState("sign up")} class=" cursor-pointer">
            Create account
          </p>
        ) : (
          <p class=" cursor-pointer" onClick={() => setCurrentState("login")}>
            Login Here
          </p>
        )}
      </div>
      <button class="bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer">
        {currentState === "login" ? "Sign in" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
