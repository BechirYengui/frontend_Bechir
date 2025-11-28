'use client';

import { motion } from 'framer-motion';
import { Code, Cpu, Shield, Network, Brain, Award, Globe, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Langages de Programmation',
      icon: Code,
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        'C/C++ (Avancé - 2+ ans)',
        'Python (Avancé - 3+ ans)',
        'Java (Intermédiaire - 1 an)',
        'JavaScript (Intermédiaire - 1 an)',
        'VHDL (Intermédiaire)',
        'Assembleur (Intermédiaire)',
        'Matlab (Intermédiaire)'
      ]
    },
    {
      category: 'Systèmes Embarqués',
      icon: Cpu,
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Plateformes et microcontrôleurs',
      skills: [
        'Arduino', 'STM32', 'Renesas Synergy', 'ARM Architecture',
        'Keil µVision', 'Android Studio', 'Raspberry Pi', 'FPGA',
        'Yocto Project', 'Qt Framework', 'RTOS', 'Bash/Shell'
      ]
    },
    {
      category: 'Réseaux & Communication',
      icon: Network,
      color: 'cyan',
      gradient: 'from-cyan-500 to-blue-500',
      description: 'Protocoles embarqués et réseaux',
      skills: [
        'ITS-G5 (V2X)', 'UART', 'SPI', 'CAN', 'I2C',
        'UDP/TCP', 'Ethernet', '5G', 'Wireshark', 'Cisco Packet Tracer'
      ]
    },
    {
      category: 'Cybersécurité',
      icon: Shield,
      color: 'red',
      gradient: 'from-red-500 to-orange-500',
      description: 'Sécurité et cryptographie',
      skills: [
        'Cryptographie RSA', 'TLS/HTTPS/MQTTS', 'OpenSSL',
        'Pentesting', 'Tests MITM', 'Tests DoS',
        'Authentification', 'Audits de sécurité', 'Ghidra'
      ]
    },
    {
      category: 'Intelligence Artificielle',
      icon: Brain,
      color: 'pink',
      gradient: 'from-pink-500 to-purple-500',
      description: 'IA et vision par ordinateur',
      skills: [
        'OpenCV', 'PyTorch', 'Matplotlib', 'SLAM', 'Vision autonome'
      ]
    },
    {
      category: 'Développement Full-Stack',
      icon: Code,
      color: 'green',
      gradient: 'from-green-500 to-teal-500',
      description: 'Backend, frontend et bases de données',
      skills: [
        'Flask', 'Angular', 'HTML/CSS', 'XML',
        'MySQL', 'SQL Server', 'SQLite', 'MQTT', 'REST API'
      ]
    },
    {
      category: 'DevOps & Outils',
      icon: Wrench,
      color: 'orange',
      gradient: 'from-orange-500 to-red-500',
      description: 'CI/CD et conteneurisation',
      skills: [
        'Docker', 'Kubernetes', 'GitLab CI/CD', 'Git/GitHub',
        'Linux', 'Windows', 'Pytest', 'Selenium', 'LaTeX'
      ]
    }
  ];

  const languages = [
    { 
      name: 'Français', 
      level: 'C1 - Avancé', 
      description: 'Courant professionnel',
      percentage: 95, 
      flag: '🇫🇷',
      color: 'from-blue-400 to-blue-600'
    },
    { 
      name: 'Anglais', 
      level: 'C1 - Avancé', 
      description: 'Technique et professionnel',
      percentage: 90, 
      flag: '🇬🇧',
      color: 'from-purple-400 to-purple-600'
    },
    { 
      name: 'Arabe', 
      level: 'Langue maternelle', 
      description: 'Natif',
      percentage: 100, 
      flag: '🇹🇳',
      color: 'from-green-400 to-green-600'
    }
  ];

  const certifications = [
    { name: 'IELTS UKVI', level: 'B2 avancé', year: '2025', icon: '🎓' },
    { name: 'TOEIC L&R', level: 'C1', year: '2023', icon: '🎯' }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Compétences Techniques
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expertise complète en systèmes embarqués, cybersécurité et développement logiciel
          </p>
        </motion.div>

        {/* Catégories de compétences */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-gray-200 h-full">
                  {/* Header avec gradient */}
                  <div className={`bg-gradient-to-r ${category.gradient} p-6 text-white`}>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                        <IconComponent size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{category.category}</h3>
                        {category.description && (
                          <p className="text-sm opacity-90 mt-1">{category.description}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Compétences */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.02 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 bg-gray-50 border-2 border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:border-gray-300 hover:bg-gray-100 transition-all cursor-default shadow-sm"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Langues */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 border-2 border-blue-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-white rounded-xl shadow-md">
                <Globe size={32} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Compétences Linguistiques</h3>
                <p className="text-gray-600">Communication internationale</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="text-center mb-4">
                    <span className="text-5xl mb-3 block">{lang.flag}</span>
                    <h4 className="text-xl font-bold text-gray-900">{lang.name}</h4>
                    <p className="text-blue-600 font-semibold text-sm mt-1">{lang.level}</p>
                    <p className="text-gray-500 text-xs mt-1">{lang.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Maîtrise</span>
                      <span className="font-bold text-blue-600">{lang.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2, ease: 'easeOut' }}
                        className={`h-full bg-gradient-to-r ${lang.color} rounded-full`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Section Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl shadow-xl p-8 border-2 border-yellow-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-white rounded-xl shadow-md">
                <Award size={32} className="text-yellow-600" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Certifications</h3>
                <p className="text-gray-600">Certifications linguistiques</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all flex items-center gap-4"
                >
                  <span className="text-5xl">{cert.icon}</span>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{cert.name}</h4>
                    <p className="text-yellow-600 font-semibold">{cert.level}</p>
                    <p className="text-sm text-gray-500">Obtenu en {cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}