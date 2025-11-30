"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { number: "3,000", label: "VALMISTUNUTTA PROJEKTIA", icon: "/images/s-icon-hover-2.png.webp" },
  { number: "320", label: "TYYTYVÄISTÄ ASIAKASTA", icon: "/images/s-icon-hover-3.png.webp" },
  { number: "1,000", label: "KUPILLISTA KAHVIA", icon: "/images/s-icon-hover-4.png.webp" },
  { number: "587", label: "INSINÖÖRIÄ & HENKILÖSTÖÄ", icon: "/images/s-icon-hover-5.png.webp" },
];

export default function Statistics() {
  return (
    <section className="py-20 bg-secondary-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  width={50}
                  height={50}
                  className="object-contain"
                  quality={100}
                />
              </div>
              <div className="text-primary-500 text-5xl md:text-6xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-white text-sm md:text-base uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

