'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Download, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                Disponible dès maintenant
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold text-gray-900"
            >
              Bechir <span className="text-blue-600">Yengui</span>
            </motion.h1>

            {/* Job Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold text-gray-700"
            >
              Ingénieur Développement Embarqué
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Spécialisé en{' '}
              <span className="font-semibold text-blue-600">Systèmes Embarqués</span> et{' '}
              <span className="font-semibold text-purple-600">Cybersécurité</span>.
              <br />
              Diplômé IMT Atlantique (Télécom Bretagne)
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-3 text-gray-600"
            >
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-blue-600 flex-shrink-0" />
                <span>Nantes, France — Mobilité nationale</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} className="text-blue-600 flex-shrink-0" />
                <a href="tel:+33765878631" className="hover:text-blue-600 transition-colors">
                  +33 7 65 87 86 31
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} className="text-blue-600 flex-shrink-0" />
                <a
                  href="mailto:bechir.yengui@imt-atlantique.net"
                  className="hover:text-blue-600 transition-colors"
                >
                  bechir.yengui@imt-atlantique.net
                </a>
              </div>
            </motion.div>

            {/* CTA BUTTONS — FIXED */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Me Contacter
              </a>

              <a
                href="/cv.pdf"
                download="CV_Bechir_Yengui.pdf"
                className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <Download size={20} />
                Télécharger CV
              </a>
            </motion.div>

            {/* Social links — FIXED */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="https://github.com/BechirYengui"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <Github size={24} />
              </a>

              <a
                href="https://linkedin.com/in/bechir-yengui-36b291225/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="mailto:bechir.yengui@imt-atlantique.net"
                aria-label="Email"
                className="p-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute -top-4 -left-4 w-full h-full bg-blue-200 rounded-3xl rotate-6 opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-purple-200 rounded-3xl -rotate-6 opacity-50"></div>

              <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Bechir Yengui - Ingenieur Développement Embarqué"
                  fill
                  className="object-cover"
                  priority
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent p-6">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold">Bechir Yengui</div>
                    <div className="text-sm opacity-90 mt-1">Ingénieur Embarqué</div>
                  </div>
                </div>

                {/* Decorative lights */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-sm font-medium">Défiler</span>
            <ChevronDown size={32} className="animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
