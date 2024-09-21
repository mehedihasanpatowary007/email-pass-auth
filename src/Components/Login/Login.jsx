import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import { toast } from "react-toastify";

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [showPassWord, setShowPassword] = useState(false);
   const [emailError, setEmailError] = useState("");
   const [passwordErr, setPasswordErr] = useState("");
   const[success, setSuccess] = useState('')
   const [user, setUser] = useState(null)
   console.log(user)
   const [userError, setUserError] = useState('')

    const handleLogin = (e)=> {
        e.preventDefault()

        if (email === "") {
          setPasswordErr("");
          setEmailError("Email field is empty");
          return;
        }
        //password validation
        else if (password === "") {
          setEmailError("");
          setPasswordErr("Password field id empty");
          return;
        } else if (password.length < 6) {
          setEmailError("");
          setPasswordErr("Password must be at least 6 character ");
          return;
        }
        setSuccess('')
        signInWithEmailAndPassword(auth, email, password).then((result) => {
            const loginUser = result.user
            setUser(loginUser)
            setUserError('')
            setSuccess('Login success')
            setEmailError('')
            setPasswordErr('')
            setEmail('')
            setPassword("")
        }).catch((err => setUserError(err.message)))
        
    }

    const handleForgetPassword = () => {
        sendPasswordResetEmail(auth, email).then(()=> {
             alert("Please check your email");
        }).then(err => console.log(err))
           
        
    }
    return (
      <>
        {/* https://play.tailwindcss.com/MIwj5Sp9pw */}
        <div className="page_animation flex-grow flex justify-center items-center md:w-[80%] w-[90%] mx-auto">
          <div className="flex flex-col gap-4 md:flex-row bg-white rounded-lg w-full md:shadow-lg md:p-5">
            <img
              className="md:w-1/2"
              src="https://th.bing.com/th/id/OIP.cn-oPOC6O-FsEMvLRj5KbwHaGi?rs=1&pid=ImgDetMain"
              alt=""
            />
            <form onSubmit={handleLogin} className="p-8 w-full md:w-1/2">
              <h2 className="text-2xl font-semibold text-center">Sign in</h2>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                />
                {emailError && (
                  <p className="text-base italic text-red-500">{emailError}</p>
                )}
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <span onClick={handleForgetPassword} className="text-xs text-gray-500 cursor-pointer">
                    Forget Password?
                  </span>
                </div>
                <div className="relative flex items-center">
                  <input
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type={`${showPassWord ? "text" : "password"}`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    className="text-2xl absolute right-3 cursor-pointer"
                    onClick={() => setShowPassword(!showPassWord)}
                  >
                    {showPassWord ? <FiEye /> : <FiEyeOff />}
                  </span>
                </div>
                {passwordErr && (
                  <p className="text-base text-red-500 italic">{passwordErr}</p>
                )}
              </div>
              <div className="mt-8">
                <button className="bg-[#0ab8b2] text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600 duration-200">
                  Sign in
                </button>
              </div>
              <div className="flex gap-1">
                <h3>Don't have account</h3>
                <Link
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  to={"/register"}
                >
                  Register
                </Link>
              </div>
              {success && (
                <p className="text-green-500 italic text-base">{success}</p>
              )}
              {userError && (
                <p className="text-red-500 text-base italic">{userError}</p>
              )}
            </form>
          </div>
        </div>
      </>
    );
};

export default Login;