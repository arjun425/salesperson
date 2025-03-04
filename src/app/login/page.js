"use client";
import Link from "next/link";
import { Arvo } from "next/font/google";
import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { AuthContext } from "@/context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const arvo = Arvo({ subsets: ["latin"], weight: ["400"] });

export default function LoginPage() {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    if (user) {
      router.replace("/dashboard");
    }
  }, [user, router]);

  const handleEmailAuth = async () => {
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Registered successfully!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Logged in successfully!");
      }
      router.replace("/dashboard");
    } catch (error) {
      toast.error(
        `${isRegistering ? "Registration" : "Login"} failed: ${error.message}`
      );
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Signed in with Google successfully!");
      router.replace("/dashboard");
    } catch (error) {
      toast.error("Google sign-in failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative p-4 h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center blur-md"
        style={{ backgroundImage: "url('/home.jpg')" }}
      ></div>
      <div className="max-w-md w-full relative z-10">
        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-4 justify-center">
          <img 
            src="logo.ico" 
            alt="Shopkeeper Logo" 
            className="w-12 h-12"
          />
          <span className={`text-4xl ${arvo.className} text-gray-600`}>SHOPKEEPER</span>
        </div>

        <h1 className={`text-2xl ${arvo.className} italic mb-6 text-center text-blue-600`}>
          Welcome to Shopkeeper
        </h1>

        <div className="w-full bg-white p-6 rounded shadow-md mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <button
            onClick={handleEmailAuth}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-gray-600 transition"
          >
            {isRegistering ? "Register" : "Login"}
          </button>
          <div className="text-center mt-4">
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-sm text-blue-500 hover:underline"
            >
              {isRegistering
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </button>
          </div>
        </div>

        <div className="w-full flex items-center justify-center mb-4">
          <span className="mx-2 text-gray-500">or</span>
        </div>

        <div className="w-full">
          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-blue-500 text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-600 transition"
          >
            <img src="/google.png" alt="Google Logo" className="w-8 h-8" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}