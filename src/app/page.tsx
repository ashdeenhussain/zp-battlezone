import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-yellow-500/30">
      <Navbar />
      <Hero />
      <Features />

      {/* Tournament Preview Section */}
      <div className="py-20 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Latest Tournaments</h2>
          <div className="p-8 border border-dashed border-gray-700 rounded-xl text-gray-500">
            <p>Tournament data loading from database...</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
