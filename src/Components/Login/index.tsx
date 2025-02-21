import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setErrors] = useState({ name: "", pwd: "" });
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // eslint-disable-next-line prefer-const
    let newError = { name: "", pwd: "" };

    if (userName?.length <= 2) {
      newError.name = "Ambiguous name";
    }
    if (pwd.length <= 2) {
      newError.pwd = "Ambiguous Password";
    }

    setErrors(newError);

    if (!newError.name && !newError.pwd) {
      navigate("/planet");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 px-4 h-150 mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-[400px] space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Login
        </h2>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium text-left">Name</label>
          <input
            className="border p-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Enter your name"
            required
          />
          <p className="text-red-500 text-sm">{error?.name}</p>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-medium text-left">
            Password
          </label>
          <input
            className="border p-3 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            value={pwd}
            type="password"
            onChange={(e) => setPwd(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <p className="text-red-500 text-sm">{error?.pwd}</p>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-3 rounded-lg w-full font-medium hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
