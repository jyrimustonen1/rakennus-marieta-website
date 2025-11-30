"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Rakennuspalvelut",
    description: "Kattavat rakennusprojektit pienistä lisärakennuksista kokonaisiin taloihin. Suunnittelusta valmiiseen toimitukseen.",
    icon: "🏗️",
    bgColor: "bg-secondary-800",
    textColor: "text-white",
    buttonColor: "bg-primary-500 text-white",
  },
  {
    title: "Infrastruktuuripalvelut",
    description: "Ammattitaitoinen infrastruktuurin suunnittelu ja toteutus. Kestäviä ratkaisuja kestävään tulevaisuuteen.",
    icon: "🏢",
    bgColor: "bg-primary-500",
    textColor: "text-white",
    buttonColor: "bg-white text-primary-500",
  },
  {
    title: "Arkkitehtipalvelut",
    description: "Kokonaisvaltainen suunnittelu ja arkkitehtipalvelut. Yhdistämme funktionaalisuuden ja esteettisyyden.",
    icon: "📐",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    buttonColor: "bg-primary-500 text-white",
  },
];

export default function Services() {
  return (
    <section id="palvelut" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-500 text-sm uppercase font-semibold mb-2">Mitä teemme</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Palvelut
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-lg flex items-center justify-center"
          >
            <div className="text-8xl">👷</div>
          </motion.div>

          {/* Right side - Service cards */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${service.bgColor} ${service.textColor} p-8 rounded-lg shadow-lg`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl flex-shrink-0">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">
                      {service.title}
                    </h3>
                    <p className="mb-4 opacity-90 leading-relaxed">
                      {service.description}
                    </p>
                    <a
                      href="#yhteystiedot"
                      className={`${service.buttonColor} px-6 py-2 inline-block font-semibold hover:opacity-90 transition-opacity`}
                    >
                      LUE LISÄÄ
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

