import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/firebase.config";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassWord, setShowPassword] = useState(false);
  const [termsChecked, setTermsChecked]= useState(false)
  const [emailError, setEmailError] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [conditionError, setConditionError] = useState('')
  const [user, setUser] = useState(null);
  const [regSuccess, setRegSuccess] = useState("");
  console.log(user);

  const handleRegister = (e) => {
    e.preventDefault();

    //email validation
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
    } else if(!termsChecked){
        setEmailError('')
        setPasswordErr('')
        setConditionError('Please accept our terms & condition.')
        return
    }

    //clear error message

    setRegSuccess("");

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const loginUser = userCredential.user;
        setUser(loginUser);
        setRegSuccess("Registration successful");
        setEmail("");
        setPassword("");
        setTermsChecked(false)
        setEmailError("");
        setPasswordErr("");
        setConditionError('')
      })
      .catch((err) => setErrMessage(err.message));
  };

  return (
    <>
      <div className="page_animation flex-grow w-[95%] md:w-[90%] mx-auto flex justify-center items-center">
        <section className="flex flex-col md:flex-row-reverse  items-center gap-7">
          <div className="w-1/2">
            <img
              className=""
              src="https://anzmh.asn.au/hubfs/Untitled%20design%20(23)-4.png"
              alt=""
            />
          </div>
          <div className=" w-1/2 shadow-2xl  bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl capitalize font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Please sing up
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleRegister}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailError && (
                    <p className="text-base italic text-red-500">
                      {emailError}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="flex items-center relative">
                    <input
                      type={`${showPassWord ? "text" : "password"}`}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <span
                      className="text-2xl absolute right-3 cursor-pointer"
                      onClick={() => setShowPassword(!showPassWord)}
                    >
                      {showPassWord ? <FiEye /> : <FiEyeOff />}
                    </span>
                  </div>
                  {passwordErr && (
                    <p className="text-base text-red-500 italic">
                      {passwordErr}
                    </p>
                  )}
                </div>
                {/* <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div> */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      value={termsChecked}
                      onChange={(e) => setTermsChecked(e.target.checked)}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <Link
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </Link>
                    </label>
                    {conditionError && (
                      <p className="text-red-500 italic text-base">
                        {conditionError}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sing up
                </button>
                {/* {errMessage && (
                  <p className="text-red-500 text-base italic">{errMessage}</p>
                )} */}
                {regSuccess && (
                  <p className="text-green-500 text-base italic">
                    {regSuccess}...
                  </p>
                )}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sing in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
