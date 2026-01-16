import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/90 to-[#020617] z-10"></div>
                {/* Placeholder for Game Background Image */}
                <div
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop')] 
          bg-cover bg-center opacity-30"
                ></div>
                {/* Glow Effects */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-8 animate-fade-in-up">
                    <h2 className="text-blue-500 font-bold tracking-wider text-sm uppercase mb-4">
                        Welcome to ZP Battle Zone
                    </h2>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
                        COMPETE. <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">WIN.</span> <br />
                        DOMINATE.
                    </h1>

                    <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl">
                        The ultimate esports platform for Free Fire in Pakistan. Join daily tournaments, show your skills, and win real cash prizes instantly.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                        <Link
                            href="/auth/signup"
                            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transform hover:-translate-y-1"
                        >
                            Start Competing
                        </Link>
                        <Link
                            href="/tournaments"
                            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-700 hover:border-yellow-500 text-gray-300 hover:text-yellow-400 font-bold rounded-lg transition-all"
                        >
                            View Tournaments
                        </Link>
                    </div>

                    <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-white/5 mt-12">
                        <div>
                            <p className="text-3xl font-bold text-white">10k+</p>
                            <p className="text-gray-500 text-sm">Active Players</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white">500+</p>
                            <p className="text-gray-500 text-sm">Tournaments</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white">PKR 1M+</p>
                            <p className="text-gray-500 text-sm">Prize Pool</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white">24/7</p>
                            <p className="text-gray-500 text-sm">Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
