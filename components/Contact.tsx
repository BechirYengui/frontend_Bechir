'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Background shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Contactez-moi
          </h2>

          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>

          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            Disponible pour échanger autour de vos projets en systèmes embarqués, cybersécurité
            et développement logiciel.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* LEFT – Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Info Card */}
            <div className="backdrop-blur-lg bg-white/70 border border-white/40 shadow-xl rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informations de contact
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <a
                  href="mailto:bechir.yengui@imt-atlantique.net"
                  className="flex items-start gap-4 p-4 rounded-2xl transition-all bg-white hover:bg-blue-50 shadow-sm hover:shadow-md"
                >
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Mail size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">bechir.yengui@imt-atlantique.net</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+33765878631"
                  className="flex items-start gap-4 p-4 rounded-2xl transition-all bg-white hover:bg-green-50 shadow-sm hover:shadow-md"
                >
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Phone size={24} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Téléphone</p>
                    <p className="text-gray-600">+33 7 65 87 86 31</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-purple-50 border border-purple-100 shadow-sm">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <MapPin size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Localisation</p>
                    <p className="text-gray-600">Nantes, France</p>
                    <p className="text-sm text-purple-600 font-medium mt-1">
                      Mobilité : France entière
                    </p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="font-semibold text-gray-900 mb-4">Réseaux :</p>
                <div className="flex gap-4">
                  {/* Github */}
                  <a
                    href="https://github.com/BechirYengui"
                    target="_blank"
                    className="p-4 bg-gray-100 rounded-2xl transition-all hover:bg-gray-900 hover:text-white shadow hover:shadow-lg"
                  >
                    <Github size={26} />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/bechir-yengui-36b291225/"
                    target="_blank"
                    className="p-4 bg-blue-100 rounded-2xl transition-all hover:bg-blue-600 hover:text-white shadow hover:shadow-lg"
                  >
                    <Linkedin size={26} />
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-6 shadow-xl border border-green-200"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-ping absolute"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Disponible immédiatement</p>
                  <p className="text-gray-600 text-sm">Ouvert aux nouvelles opportunités</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT – Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="backdrop-blur-xl bg-white/70 border border-white/40 p-8 shadow-xl rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <MessageSquare size={28} className="text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Envoyez un message</h3>
              </div>

              <form className="space-y-6">
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    className="px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 outline-none transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    className="px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 outline-none transition-all"
                    placeholder="votre.email@exemple.com"
                    type="email"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-2">
                    Sujet
                  </label>
                  <input
                    className="px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 outline-none transition-all"
                    placeholder="Sujet du message"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 outline-none transition-all resize-none"
                    placeholder="Décrivez votre besoin…"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                >
                  <Send size={20} />
                  Envoyer le message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
