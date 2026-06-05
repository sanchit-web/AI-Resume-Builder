import React from "react";

function Login() {

  const query=new URLSearchParams(window.location.search);
  const urlState=query.get('state');

  
  const [state, setState] = React.useState(urlState || "login");

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
   <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="sm:w-[380px] w-full bg-white border border-green-200 rounded-2xl px-8 py-6 shadow-xl"
      >
        <h1 className="text-green-600 text-3xl font-semibold text-center">
          {state === "login" ? "Login" : "Sign Up"}
        </h1>

        <p className="text-gray-600 text-sm text-center mt-2">
          Please {state} to continue
        </p>

        {state !== "login" && (
          <div className="flex items-center mt-6 w-full bg-green-50 border border-green-200 h-12 rounded-full overflow-hidden pl-4 gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-green-600"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent text-gray-800 placeholder-gray-500 outline-none"
            />
          </div>
        )}

        <div className="flex items-center mt-4 w-full bg-green-50 border border-green-200 h-12 rounded-full overflow-hidden pl-4 gap-3 focus-within:ring-2 focus-within:ring-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="text-green-600"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent text-gray-800 placeholder-gray-500 outline-none"
          />
        </div>

        <div className="flex items-center mt-4 w-full bg-green-50 border border-green-200 h-12 rounded-full overflow-hidden pl-4 gap-3 focus-within:ring-2 focus-within:ring-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="text-green-600"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full bg-transparent text-gray-800 placeholder-gray-500 outline-none"
          />
        </div>

        <div className="mt-4 text-right">
          <button
            type="button"
            className="text-sm text-green-600 hover:text-green-700 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          className="mt-5 w-full h-12 rounded-full text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-medium shadow-md"
        >
          {state === "login" ? "Login" : "Create Account"}
        </button>

        <p
          onClick={() =>
            setState((prev) => (prev === "login" ? "register" : "login"))
          }
          className="text-gray-600 text-sm text-center mt-5 cursor-pointer"
        >
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}

          <span className="text-green-600 hover:text-green-700 hover:underline ml-1 font-medium">
            Click here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;