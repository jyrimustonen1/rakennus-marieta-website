"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Matti Virtanen",
    role: "SENIOR ENGINEER",
    image: "👷",
  },
  {
    name: "Jukka Korhonen",
    role: "SENIOR ENGINEER",
    image: "👷‍♂️",
  },
  {
    name: "Liisa Mäkinen",
    role: "SENIOR ENGINEER",
    image: "👷‍♀️",
  },
  {
    name: "Pekka Nieminen",
    role: "SENIOR ENGINEER",
    image: "👷",
  },
];

export default function Team() {
  return (
    <section id="tiimi" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-500 text-sm uppercase font-semibold mb-2">Tiimi & Henkilöstö</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pätevät insinöörit
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-8xl">{member.image}</div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 uppercase tracking-wide">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

