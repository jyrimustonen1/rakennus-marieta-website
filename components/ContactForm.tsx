"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const faqs = [
  {
    question: "Mitä ongelmia rakennuksessa voi esiintyä?",
    answer: "Rakennuksissa voi esiintyä erilaisia ongelmia kuten kosteusongelmat, home, rakenteiden vauriot, sähkö- ja putkitusongelmat sekä eristysongelmat. Ammattitaitoinen saneeraus ja korjaus varmistaa rakennuksen kunnon ja turvallisuuden.",
    isOpen: true,
  },
  {
    question: "Mikä on paras käytäntö rakennuksessa?",
    answer: "Paras käytäntö rakennuksessa sisältää laadukkaat materiaalit, ammattitaitoisen työnjohdon, oikeat rakennusluvat, turvallisuusstandardien noudattamisen ja säännöllisen ylläpidon. Autamme sinua jokaisessa vaiheessa.",
    isOpen: false,
  },
  {
    question: "Kuinka kauan remontti kestää?",
    answer: "Remontin kesto riippuu projektin koosta ja monimutkaisuudesta. Pienet remontit voivat kestää muutaman viikon, kun taas suuremmat projektit voivat viedä useita kuukausia. Tarjoamme aina realistisen aikataulun projektin alussa.",
    isOpen: false,
  },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [openFaq, setOpenFaq] = useState(0);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form data:", data);
      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="yhteystiedot" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary-500 text-sm uppercase font-semibold mb-2">Lähetä viesti</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pyydä tarjous
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 uppercase">
                  Koko nimesi *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Nimi on pakollinen" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="Koko nimesi"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 uppercase">
                  Sähköpostiosoite *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Sähköposti on pakollinen",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Virheellinen sähköpostiosoite",
                    },
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  placeholder="Sähköposti"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 uppercase">
                  Valitse aihe
                </label>
                <select
                  id="subject"
                  {...register("subject")}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                >
                  <option value="rakennuspalvelut">Rakennuspalvelut</option>
                  <option value="saneeraus">Saneeraus</option>
                  <option value="remontti">Remontti</option>
                  <option value="konsultointi">Konsultointi</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 uppercase">
                  Viesti *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register("message", { required: "Viesti on pakollinen" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Viesti"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded">
                  Kiitos viestistäsi! Olemme yhteydessä mahdollisimman pian.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded">
                  Viestin lähettäminen epäonnistui. Yritä uudelleen tai ota yhteyttä suoraan puhelimitse.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-500 text-white px-8 py-4 font-semibold text-lg hover:bg-primary-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Lähetetään..." : "LÄHETÄ VIESTI"}
              </button>
            </form>
          </motion.div>

          {/* Right column - FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary-500 text-sm uppercase font-semibold mb-2">Usein kysytyt kysymykset</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Haluatko kysyä jotain?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Pienellä joella nimeltä Duden virtaa heidän paikkansa ohi ja tarjoaa sen tarvittavilla säädöksillä. 
              Se on paradisemaattinen maa, jossa paistetut lauseiden osat lentävät suuhusi.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    className="w-full px-6 py-4 bg-white text-left flex justify-between items-center hover:bg-gray-50 transition"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <span className="text-primary-500 text-xl">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 bg-gray-50 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

