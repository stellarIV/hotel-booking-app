import React from "react";
import { MdEvent, MdFoodBank } from "react-icons/md";
import { BiBed } from "react-icons/bi";
import { motion } from "framer-motion";
import { SlideLeft } from "../utilities/animation";

const equipmentData = [
  {
    id: 1,
    title: "Accommodations",
    desc: "Discover a variety of room options, from luxury suites to comfortable family rooms, tailored to your needs.",
    icon: BiBed,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Dining & Entertainment",
    desc: "Enjoy a diverse selection of dining experiences and entertainment, including gourmet restaurants, casual lounges, and live events.",
    icon: MdFoodBank,
    delay: 0.4,
  },
  {
    id: 3,
    title: "Event Spaces & Meetings",
    desc: "Host unforgettable events and meetings in our state-of-the-art facilities, designed for gatherings of all sizes.",
    icon: MdEvent,
    delay: 0.6,
  },
];

const Equipments = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Intro Card */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              What We Offer for You
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Experience exceptional service and a range of amenities designed
              to enhance your stay.
            </p>
          </div>

          {/* Equipment Cards */}
          {equipmentData.map(({ id, title, desc, icon: Icon, delay }) => (
            <motion.article
              key={id}
              variants={SlideLeft(delay)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="p-6 rounded-xl bg-gray-50 hover:bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary text-3xl">
                <Icon />
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {title}
              </h3>

              <p className="text-gray-500 leading-relaxed">
                {desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipments;
