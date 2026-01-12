import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../utilities/animation";
import { Button } from "@material-tailwind/react";
import AdSense from "../components/AdSense";

const AdData = [
  {
    id: 1,
    img: "https://www.bing.com/th?id=OADD2.7421765055757_1HFHO34A3B80PET4XM&pid=21.2",
    title: "Exodus: Journey Beyond Limits",
    desc: "Experience the thrill of adventure with our newest Exodus series!",
  },
  {
    id: 2,
    img: "https://www.bing.com/th?id=OADD2.7421765055757_1HFHO34A3B80PET4XM&pid=21.2",
    title: "X Makeup: Unleash Your Radiance",
    desc: "Transform your look with X Makeup’s latest collection.",
  },
];

const Adverts = () => {
  return (
    <div className="space-y-12">
      {AdData.map((item, index) => (
        <React.Fragment key={item.id}>
          {/* Advertisement Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 py-6 lg:w-[80%] items-center bg-[#fafafa] gap-8 container overflow-hidden">
            <div className="flex justify-center overflow-hidden">
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                src={item.img}
                alt={item.title}
                className="max-w-[320px] lg:max-w-[420px] rounded-lg"
              />
            </div>

            <div className="text-center">
              <motion.h1
                variants={SlideUp(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xl md:text-2xl font-bold mb-4"
              >
                {item.title}
              </motion.h1>

              <motion.p
                variants={SlideUp(0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-600 mb-6"
              >
                {item.desc}
              </motion.p>

              <Button color="black" className="px-6 py-3 rounded-md">
                See More
              </Button>
            </div>
          </div>

          {/* 🔥 Insert AdSense after first advert */}
          {index === 0 && (
            <div className="container my-8">
              <AdSense slot="1234567890" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Adverts;
