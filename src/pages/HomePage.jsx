import React from "react";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import WebImage from "@/components/shared/landing/WebImage";

const HomePage = () => {
    return (
        <main className="pt-24 bg-white min-h-screen">
            <div className="px-12 mx-auto max-w-7xl">
                <div className="w-full mx-auto md:w-11/12 xl:w-9/12 md:text-center text-left">
                    <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-slate-800 md:text-6xl md:tracking-tight">
                        <span>The smarter way to</span>{" "}
                        <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-900 to-green-500 lg:inline">
                              manage your clinic
                        </span>{" "}
                        <span>all in one place!</span>
                    </h1>
                    <p className="px-0 text-lg text-gray-600 md:text-xl lg:px-24">
                        Medoria helps you manage patients, appointments, and staff
                        with ease. Built for modern clinics that want to work smarter.
                    </p>
                    <div className="my-8 space-x-0 md:space-x-2">
                        <Link
                            to="/login"
                            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 mb-2 text-lg text-white bg-green-800 to bg-green-400 hover:bg-green-900 rounded-2xl sm:w-auto sm:mb-0 transition"
                        >
                            Get Started <MoveRight className="size-5" />
                        </Link>
                        <Link
                            to="/register"
                            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 mb-2 text-lg bg-gray-100 hover:bg-gray-200 rounded-2xl sm:w-auto sm:mb-0 transition"
                        >
                            Create Account
                        </Link>
                    </div>
                </div>
                <WebImage />
            </div>
        </main>
    );
};

export default HomePage;
