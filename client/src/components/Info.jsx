import React from "react";
import { HiLocationMarker, HiPhone, HiClock } from "react-icons/hi";

const infoCards = [
  {
    icon: HiLocationMarker,
    title: "Wedding Location",
    content: "Aandarkuppam Murugan Temple",
    className: "translate-y-20  hover:translate-y-18",
  },
  {
    icon: HiPhone,
    title: "Contact Number",
    content: "+91 987654321",
    className: " hover:-translate-y-2",
  },
  {
    icon: HiClock,
    title: "Marriage",
    content: "7.30 am - 9.00 am",
    className: " hover:-translate-y-2",
  },
  {
    icon: HiClock,
    title: "Reception",
    content: "DSK Thirumana Mandapam",
    className: "translate-y-20  hover:translate-y-18",
  },
];

const InfoSection = () => {
  return (
    <section className="py-14 mb-10">
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4">
        {infoCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className={`
                rounded-2xl
                p-6
                text-center
                bg-white/5
                backdrop-blur-xs
                border border-white/25
                shadow-lg
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                ${card.className ?? ""}
              `}
            >
              {/* Icon */}
              <div
                className="
                  inline-flex
                  items-center
                  justify-center
                  w-16 h-16
                  mx-auto mb-4
                  rounded-full
                  bg-white/20
                  backdrop-blur-md
                  border border-white/30
                  text-3xl
                "
              >
                <Icon className="text-primary" />
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
