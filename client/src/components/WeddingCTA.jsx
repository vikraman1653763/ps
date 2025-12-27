import React from "react";

const WeddingCTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-400 via-pink-400 to-red-400 py-16 px-6">
      {/* Soft decorative lights */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/25 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-white/25 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
          We Can’t Wait to Celebrate With You 💖
        </h2>

        <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10">
          Your presence means the world to us. Please don’t forget to join us
          and shower us with your blessings on our special day.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* Call CTA */}
          <a
            href="tel:+919876543210"
            className="inline-flex items-center justify-center rounded-full bg-white text-rose-600 font-semibold px-8 py-4 text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            📞 Call Us
          </a>

          {/* Secondary CTA */}
          <a
            href="#venue"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/80 text-white font-semibold px-8 py-4 text-lg hover:bg-white hover:text-rose-600 transition-all duration-300"
          >
            📍 View Venue
          </a>
        </div>

        <p className="mt-8 text-sm text-white/80 italic">
          With love, joy, and warm hearts — we look forward to seeing you.
        </p>
      </div>
    </section>
  );
};

export default WeddingCTA;
