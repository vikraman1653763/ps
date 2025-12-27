import React from "react";

const VenueSection = () => {
  return (
    <section className="py-16 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 font-dance">
          Wedding Venue
        </h2>

        <p className="text-gray-600 mb-8">
          We warmly invite you to join us at the venue and bless the couple
          on this special day.
        </p>

       

        {/* Google Map */}
        <div className="w-full h-75 sm:h-100 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Wedding Venue Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31102.833494895538!2d80.1647368150634!3d12.981176542887086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e1f5da86397%3A0x21092f216ee26e47!2sChennai%20International%20Airport!5e0!3m2!1sen!2sin!4v1766725845658!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Open in Google Maps */}
        <a
          href="https://maps.google.com/?q=Chennai+International+Airport"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
        >
          Open in Google Maps
        </a>
      </div>
    </section>
  );
};

export default VenueSection;
