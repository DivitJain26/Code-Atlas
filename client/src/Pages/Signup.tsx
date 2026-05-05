import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { authAPI } from "../utils/axios";
import { useNavigate } from "react-router-dom";


interface SignupForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupForm>();

  const onSubmit = async(data: SignupForm) => {
      try {
    await authAPI.register(data);

    console.log("Signup success:");
    alert("Signup successful! Please login.");
    navigate("/experiments");

  } catch (err: any) {
    console.error("Signup failed:", err.response?.data?.error || err.message);
  }
  };

  const password = watch("password");

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md border border-gray-200 rounded-2xl shadow-md p-8">
        
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Join us and get started
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-700"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-700"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Create password"
              {...register("password", { required: "Password is required" })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-700"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              {...register("confirmPassword", {
                required: "Confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-700"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-700 text-white py-3 rounded-xl font-semibold hover:bg-indigo-800 transition duration-200"
          >
            Signup
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-700 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}