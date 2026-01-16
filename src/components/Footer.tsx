import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#020617] border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">
                            ZP BATTLE ZONE
                        </h3>
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} ZP Battle Zone. All rights reserved.
                        </p>
                    </div>

                    <div className="flex gap-8 text-gray-400 text-sm">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Contact Support</a>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-600 text-xs">
                    Powered by Next.js & ZP Tech
                </div>
            </div>
        </footer>
    );
};

export default Footer;
