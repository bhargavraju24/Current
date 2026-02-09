import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-cyan-50 via-white to-purple-50 px-6">
      
      <div className="max-w-xl text-center bg-white/70 backdrop-blur 
                      rounded-2xl shadow-xl p-10 border border-slate-200">
        
        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-6
                     bg-gradient-to-r from-cyan-500 to-purple-500
                     bg-clip-text text-transparent"
        >
          Welcome to Home Page
        </h1>

        {/* Paragraph */}
        <p className="text-slate-600 text-lg leading-relaxed">
          This is my React project built using
          <span className="text-cyan-600 font-semibold"> Tailwind CSS </span>
          and modern, reusable components.
        </p>

        {/* Button */}
        <button
          className="mt-8 px-8 py-3 rounded-full font-semibold
                     bg-gradient-to-r from-cyan-400 to-purple-400
                     text-white hover:from-cyan-500 hover:to-purple-500
                     hover:scale-105 transition-all duration-300 shadow-md"
        >
          Get Started
        </button>

      </div>
    </div>
  );
};

export default Home;
