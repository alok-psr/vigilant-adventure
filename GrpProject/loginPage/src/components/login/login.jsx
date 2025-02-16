import { useState } from "react";
import { signup, login } from "../../services/authService";
import { auth, app } from "../../services/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitFn = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        await login(email, password);
        alert("Login successful!");
        navigate("../../Dashboard/ScrapBookDashboard.jsx"); // Redirect to ScrapBookDashboard
      } else {
        await signup(email, password);
        alert("Signup successful! You can now log in.");
      }
      setEmail("");
      setPassword("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-[rgb(26,43,62)] text-gray-700"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="bg-[rgb(255,251,232)] px-20 flex-col py-10 justify-center rounded-2xl ring-inset ring-2 ring-green-400">
        <div>
          <h1 className="text-4xl text-center pb-4">Grp Project Name/Title</h1>
        </div>
        <div className=" p-12 rounded-lg shadow-2xl w-[400px] bg-sky-50 border-[rgb(26,43,62)] border-dashed border-[5px] ">
          <h2 className="text-3xl font-bold text-center mb-6">
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          <form onSubmit={submitFn}>
            {!isLogin && (
              <div className="mb-4">
                {/* input username (for signin only) because when loging in we use email and pswd  */}
                <label className="block text-sm mb-1">Username</label>
                <input
                  type="text"
                  className="w-full p-3 rounded bg-sky-100 ring-1  inset-0"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            )}

            {/* input email here */}
            <div className="mb-4">
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded bg-sky-100 ring-1  inset-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* input pswd here */}
            <div className="mb-4">
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                className="w-full p-3 rounded bg-sky-100 ring-1  inset-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[rgb(26,43,62)] hover:bg-blue-950 p-3 rounded text-white text-lg"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <p className="text-sm text-center mt-6">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <a
              href="#"
              className="text-blue-400 hover:underline"
              onClick={(e) => {
                e.preventDefault();
                setIsLogin(!isLogin);
              }}
            >
              {isLogin ? "Sign Up" : "Login"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
