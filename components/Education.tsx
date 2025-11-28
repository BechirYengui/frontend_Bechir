'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      school: 'IMT Atlantique (Télécom Bretagne)',
      degree: 'Diplôme d\'Ingénieur Généraliste',
      specialization: 'Systèmes Embarqués & Cybersécurité',
      period: '2023 – 2025',
      location: 'Brest, France',
      description: 'Formation d\'ingénieur généraliste avec spécialisation en systèmes embarqués et cybersécurité, axée sur la conception de solutions sécurisées pour l\'IoT et les véhicules connectés.',
      courses: [
        {
          category: 'Systèmes Embarqués',
          items: ['Systèmes embarqués temps réel', 'Robotique et automatique', 'Programmation système', 'Internet des Objets (IoT)']
        },
        {
          category: 'Réseaux & Sécurité',
          items: ['Architecture des réseaux', 'Cybersécurité et cryptographie', 'Pentesting et sécurité offensive']
        }
      ],
      icon: '🎓',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      school: 'SUP\'COM Tunisie',
      degree: 'Diplôme d\'Ingénieur en Technologies de l\'Information',
      specialization: 'Télécommunications & Réseaux',
      period: '2021 – 2023',
      location: 'Tunis, Tunisie',
      description: 'Formation d\'ingénieur spécialisée dans les technologies de l\'information avec focus sur les télécommunications, les réseaux et le cloud computing.',
      courses: [
        {
          category: 'Développement',
          items: ['Programmation avancée', 'Cloud computing']
        },
        {
          category: 'Réseaux & Télécommunications',
          items: ['Réseaux et protocoles', 'Systèmes de télécommunications', 'Traitement du signal numérique']
        }
      ],
      icon: '💻',
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      school: 'IPEIS Sfax',
      degree: 'Classes Préparatoires aux Grandes Écoles',
      specialization: 'Mathématiques et Physique',
      period: '2019 – 2021',
      location: 'Sfax, Tunisie',
      description: 'Formation intensive en mathématiques et physique préparant aux concours des grandes écoles d\'ingénieurs.',
      courses: [
        {
          category: 'Sciences Fondamentales',
          items: ['Mathématiques supérieures', 'Physique générale', 'Chimie', 'Sciences de l\'ingénieur']
        }
      ],
      icon: '📐',
      color: 'green',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  const certifications = [
    {
      name: 'IELTS UKVI',
      level: 'B2 avancé',
      year: '2025',
      description: 'Certification internationale d\'anglais',
      icon: '🇬🇧'
    },
    {
      name: 'TOEIC Listening & Reading',
      level: 'C1',
      year: '2023',
      description: 'Test d\'anglais professionnel',
      icon: '🎯'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; border: string; text: string; hover: string } } = {
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', hover: 'hover:shadow-blue-200' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', hover: 'hover:shadow-purple-200' },
      green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600', hover: 'hover:shadow-green-200' },
    };
    return colors[color];
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Formation Académique</h2>
          <p className="text-xl text-gray-600">Mon parcours éducatif et certifications</p>
        </motion.div>

        {/* Formations */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => {
            const colors = getColorClasses(edu.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${colors.bg} border-2 ${colors.border} rounded-2xl p-6 shadow-lg ${colors.hover} hover:shadow-2xl transition-all duration-300`}
              >
                {/* Header avec gradient */}
                <div className={`bg-gradient-to-r ${edu.gradient} rounded-xl p-6 mb-6 text-white`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <span className="text-5xl">{edu.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{edu.school}</h3>
                        <p className="text-lg font-semibold opacity-90">{edu.degree}</p>
                        <p className="text-base opacity-80 italic">{edu.specialization}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-4 text-sm">
                    <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                </div>

                {/* Cours par catégorie */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className={colors.text} size={20} />
                    <h4 className={`font-semibold ${colors.text} text-lg`}>Cours Principaux</h4>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {edu.courses.map((courseGroup, cgIdx) => (
                      <div key={cgIdx} className="bg-white rounded-lg p-4 border-2 border-gray-100">
                        <h5 className={`font-semibold ${colors.text} mb-3 flex items-center gap-2`}>
                          <Award size={16} />
                          {courseGroup.category}
                        </h5>
                        <ul className="space-y-2">
                          {courseGroup.items.map((course, cIdx) => (
                            <li key={cIdx} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className={`${colors.text} mt-1 font-bold`}>•</span>
                              <span>{course}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}