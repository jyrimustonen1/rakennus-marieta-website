"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const references = [
  {
    title: "Kokonaisremontti Espoossa",
    description: "Kattava remontti 1980-luvun omakotitaloon. Sisältänyt kylpyhuoneen, keittiön ja olohuoneen uudistamisen.",
    image: "/images/projektit/54789730515_aff5333acb_o.webp",
    date: "16 TAM",
  },
  {
    title: "Saneerausprojekti",
    description: "Kosteusongelmien korjaus ja kattoremontti. Ammattitaitoinen toteutus ilman häiriöitä asumiseen.",
    image: "/images/projektit/AdobeStock_209466807_Bauueberwachung-scaled-1.webp",
    date: "14 HEL",
  },
  {
    title: "Uudisrakennus",
    description: "Pienkerrostalon rakennusprojekti. Suunnittelusta valmiiseen toimitukseen.",
    image: "/images/projektit/blog-construction.webp",
    date: "12 MAAL",
  },
  {
    title: "Kylpyhuoneremontti",
    description: "Moderni kylpyhuoneremontti premium-materiaaleilla. Täysin uusi ilme ja toimivuus.",
    image: "/images/projektit/construction-worker-wearing-yellow-hard-600w-2492762443.webp",
    date: "10 HUHT",
  },
  {
    title: "Keittiöremontti",
    description: "Kokonaan uusi keittiö suunnittelusta asennukseen. Laadukkaat materiaalit ja ammattitaitoinen toteutus.",
    image: "/images/projektit/iStock-1342202072-1.jpg",
    date: "8 TOU",
  },
  {
    title: "Ulkotyöt ja terassi",
    description: "Uusi terassi ja ulkoilma-alueen suunnittelu. Kestävä ja kaunis ratkaisu.",
    image: "/images/projektit/Rakennusala-kuvaaja-Anu-Pynnonen.jpg",
    date: "5 KES",
  },
];

export default function References() {
  return (
    <section id="referenssit" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-500 text-sm uppercase font-semibold mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projektit
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {references.map((reference, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={reference.image}
                  alt={reference.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-secondary-800 text-white px-3 py-1 text-sm font-semibold z-10">
                  {reference.date}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reference.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {reference.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

