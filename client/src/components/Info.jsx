import React from "react";
import { HiLocationMarker, HiPhone, HiClock } from "react-icons/hi";

const infoCards = [
  {
    icon: HiLocationMarker,
    title: "Wedding Location",
    content: "[Venue Name], [Area], [City]",
  },
  {
    icon: HiPhone,
    title: "Contact Number",
    content: "+91 XXXXX XXXXX",
  },
  {
    icon: HiClock,
    title: "Marriage",
    content: "[Date], [Time]",
  },
  {
    icon: HiClock,
    title: "Reception",
    content: "[Date], [Time]",
  },
];

const InfoSection = () => {
  return (
    <section className="bg-(--color-bg) py-12">
      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4">
        {infoCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="bg-(--color-accent2) rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-secondary text-(--color-bg) text-3xl">
                <Icon className="text-white" />
              </div>
              <h3 className="text-primary text-xl font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-secondary text-base">{card.content}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InfoSection;
