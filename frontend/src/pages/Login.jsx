import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
const Login = () => {
  let [currentState, setCurrentState] = useState("login");
  let { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "sign up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.error);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}
      <input
        type="email"
        class="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required=""
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        class="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
