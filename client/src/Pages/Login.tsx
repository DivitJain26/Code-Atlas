import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useAuth } from '../context/AuthContext.js';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

interface LoginForm {
  email: string;
  password: string;
}

interface locationState {
  from?: {
    pathname: string;
  }
}

export default function Login() {

  const { state, login } = useAuth();
  const { isLoading, isAuthenticated } = state;

  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as locationState)?.from?.pathname || '/dashboard';

  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm<LoginForm>();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const onSubmit = async (data: LoginForm) => {
    clearErrors();
    try {
      await login(data.email, data.password);

    } catch (error: unknown) {
      // Assuming `err.message` has the backend error message

      setError('root', {
        type: 'manual',
        message: error instanceof Error
          ? error.message || 'Login failed. Please try again.'
          : 'An unknown error occurred.',
      });
    };
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">

      {/* Card */}
      <div className="w-full max-w-md border border-gray-200 rounded-2xl shadow-md p-8">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Login to your account
        </p>

        {errors.root && (
          <p className="mt-0 text-sm text-red-600 text-center">{errors.root.message}</p>
        )}
        
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

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
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-700"
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end text-sm">
            <button
              type="button"
              className="text-indigo-700 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-700 text-white py-3 rounded-xl font-semibold hover:bg-indigo-800 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Signup link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-indigo-700 font-medium hover:underline"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}