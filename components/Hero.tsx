"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="etusivu" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/slider-1.jpg"
          alt="Rakennustyömaa"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 via-secondary-800/80 to-secondary-900/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <p className="text-primary-500 text-sm uppercase mb-2 font-semibold">Tervetuloa Rakennus Marietaan</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Laadukas ja edullinen <span className="text-primary-500">rakennusliike</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed">
              Tarjoamme ammattitaitoista rakennus- ja saneeraustyötä Espoossa ja pääkaupunkiseudulla. 
              Yli 30 vuoden kokemuksella varmistamme laadukkaan lopputuloksen jokaiselle projektille.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#yhteystiedot"
                className="bg-primary-500 text-white px-8 py-4 font-semibold text-lg hover:bg-primary-600 transition-colors duration-300 inline-block text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                OTA YHTEYTTÄ
              </motion.a>
              <motion.a
                href="#yhteystiedot"
                className="bg-secondary-700 text-white px-8 py-4 font-semibold text-lg hover:bg-secondary-600 transition-colors duration-300 inline-block text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                PYYDÄ TARJOUS
              </motion.a>
            </div>
          </motion.div>

          {/* Right side - Service boxes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: "🏗️", title: "Rakennus", desc: "Kattavat rakennusprojektit" },
              { icon: "🔨", title: "Saneeraus", desc: "Ammattitaitoinen saneeraus" },
              { icon: "📐", title: "Suunnittelu", desc: "Kokonaisvaltainen suunnittelu" },
              { icon: "⚙️", title: "Konsultointi", desc: "Asiantunteva neuvonta" },
            ].map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

