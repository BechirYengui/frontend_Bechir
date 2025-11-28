'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'VEDECOM',
      role: 'Ingénieur R&D Systèmes Embarqués & Cybersécurité',
      period: 'Sept 2024 – Sept 2025',
      location: 'Versailles, France',
      type: 'Alternance',
      context: 'Développement d\'une architecture OTA (Over-The-Air) distribuée et sécurisée pour véhicules connectés, intégrant communication V2X, cryptographie avancée et gestion de firmware distribué via IPFS.',
      missions: [
        {
          title: 'Développement de protocoles de communication V2V et intégration IoT Edge',
          tasks: [
            'Conception et implémentation de scripts C++ pour la communication Vehicle-to-Vehicle (V2V)',
            'Intégration du protocole ITS-G5 (norme européenne V2X) pour les échanges V2X sécurisés',
            'Développement de modules de transfert UDP pour l\'échange de données en temps réel',
            'Mise en œuvre de la communication bas niveau : UART (liaison série) et CAN (bus automobile)',
            'Implémentation de la plateforme IoT ThingsBoard et ThingsBoard Edge'
          ]
        },
        {
          title: 'Architecture logicielle distribuée',
          tasks: [
            'Conception d\'un système OTA distribué pour mise à jour de véhicules connectés',
            'Intégration d\'IPFS (InterPlanetary File System) pour stockage décentralisé',
            'Configuration de ThingsBoard Edge pour gestion IoT embarquée',
            'Optimisation de la synchronisation entre nœuds du réseau'
          ]
        },
        {
          title: 'Sécurité embarquée',
          tasks: [
            'Implémentation de cryptographie RSA pour authentification et chiffrement',
            'Développement de mécanismes d\'authentification sécurisée',
            'Audit de sécurité des communications V2X',
            'Protection contre les attaques courantes (replay, injection)'
          ]
        },
        {
          title: 'Tests et validation de sécurité',
          tasks: [
            'Simulation d\'attaques Man-in-the-Middle (MITM) sur protocoles V2X',
            'Tests de résistance DoS (Denial of Service)',
            'Audit des permissions et contrôle d\'accès',
            'Analyse de trames avec Wireshark'
          ]
        }
      ],
      technologies: ['C++', 'Python', 'Bash', 'IPFS', 'ITS-G5', '5G', 'RSA', 'UDP', 'UART', 'CAN', 'gRPC', 'Wireshark'],
      color: 'blue',
    },
    {
      company: 'VEDECOM',
      role: 'Ingénieur Développement Logiciels & IOT',
      period: 'Avr 2024 – Août 2024',
      location: 'Versailles, France',
      type: 'Stage',
      context: 'Développement d\'une solution complète de mise à jour OTA pour véhicules connectés avec interface Android et infrastructure cloud sécurisée.',
      missions: [
        {
          title: 'Développement Android embarqué',
          tasks: [
            'Conception d\'une application Android native (Java)',
            'Interfaçage avec TCU (Terminal de Contrôle Unifié) embarqué',
            'Développement d\'interfaces utilisateur intuitives en XML',
            'Gestion des communications Bluetooth avec le véhicule',
            'Implémentation de la logique métier pour mise à jour OTA'
          ]
        },
        {
          title: 'Architecture sécurisée',
          tasks: [
            'Déploiement de protocoles TLS pour chiffrement des communications',
            'Intégration HTTPS pour API REST sécurisées',
            'Configuration MQTTS (MQTT over TLS) pour messages IoT',
            'Gestion de certificats avec OpenSSL',
            'Tests de pénétration sur les canaux de communication'
          ]
        },
        {
          title: 'Développement full-stack',
          tasks: [
            'Création de tableaux de bord web (Python backend)',
            'Visualisation temps réel de télémétrie véhicule',
            'Monitoring de consommation d\'énergie',
            'Affichage d\'état véhicule et diagnostics',
            'Conteneurisation avec Docker'
          ]
        },
        {
          title: 'Tests et validation',
          tasks: [
            'Tests unitaires et validation de la fiabilité des transmissions OTA',
            'Tests de charge et performance',
            'Vérification de l\'intégrité des mises à jour'
          ]
        }
      ],
      technologies: ['Android', 'Java', 'Python', 'XML', 'Docker', 'Linux', 'TLS', 'HTTPS', 'MQTTS', 'OpenSSL'],
      color: 'purple',
    },
    {
      company: 'PRIMATEC Engineering',
      role: 'Développeur Systèmes Embarqués',
      period: 'Juin 2023 – Août 2023',
      location: 'Tunisie',
      type: 'Stage',
      context: 'Développement d\'un système de gestion automatisée des présences avec reconnaissance par badge, déployé sur Raspberry Pi avec interface web.',
      missions: [
        {
          title: 'Développement embarqué',
          tasks: [
            'Programmation C++ pour lecteur de badges RFID',
            'Intégration matérielle sur Raspberry Pi',
            'Gestion des GPIO et interruptions',
            'Optimisation des performances temps réel'
          ]
        },
        {
          title: 'Application web',
          tasks: [
            'Développement backend Flask (Python)',
            'Interface frontend Angular moderne',
            'Gestion complète des employés (CRUD)',
            'Génération automatique de rapports de présence'
          ]
        },
        {
          title: 'Qualité logicielle',
          tasks: [
            'Implémentation de tests unitaires avec Pytest',
            'Documentation du code',
            'Gestion de versions avec Git'
          ]
        },
        {
          title: 'Base de données',
          tasks: [
            'Conception du schéma relationnel',
            'Déploiement SQLite/MySQL',
            'Requêtes optimisées pour statistiques'
          ]
        }
      ],
      technologies: ['C++', 'Python', 'Flask', 'Angular', 'Raspberry Pi', 'Pytest', 'SQLite', 'MySQL'],
      color: 'green',
    },
    {
      company: 'Tunisie Télécom Sfax',
      role: 'Stage Technicien Télécom',
      period: 'Juil 2022 – Août 2022',
      location: 'Tunisie',
      type: 'Stage',
      context: 'Stage technique dans le domaine des télécommunications avec expertise en raccordement FTTH.',
      missions: [
        {
          title: 'Expertise en raccordement FTTH',
          tasks: [
            'Raccordement des clients par réseau FTTH (Fiber To The Home)',
            'Installation et configuration d\'équipements',
            'Tests de qualité de signal',
            'Maintenance préventive et corrective'
          ]
        }
      ],
      technologies: ['Fibre optique', 'Réseaux mobiles', 'FTTH'],
      color: 'orange',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; border: string; text: string; hover: string } } = {
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', hover: 'hover:border-blue-300' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', hover: 'hover:border-purple-300' },
      green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600', hover: 'hover:border-green-300' },
      orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600', hover: 'hover:border-orange-300' },
    };
    return colors[color];
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Expérience Professionnelle</h2>
          <p className="text-xl text-gray-600">Mon parcours et mes réalisations détaillées</p>
        </motion.div>

        <div className="relative">
          {/* Timeline centrale (desktop uniquement) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colors = getColorClasses(exp.color);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative ${index % 2 === 0 ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'} lg:w-1/2`}
                >
                  <div className={`${colors.bg} border-2 ${colors.border} ${colors.hover} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Briefcase className={colors.text} size={24} />
                          <h3 className={`text-2xl font-bold ${colors.text}`}>{exp.company}</h3>
                        </div>
                        <p className="text-lg font-semibold text-gray-800 mb-2">{exp.role}</p>
                      </div>
                      <span className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-semibold border-2 ${colors.border}`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Métadonnées */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className={colors.text} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className={colors.text} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Contexte */}
                    <div className={`${colors.bg} border-l-4 ${colors.border} pl-4 py-3 mb-4 bg-white/50`}>
                      <p className="text-sm text-gray-700 italic">{exp.context}</p>
                    </div>

                    {/* Missions */}
                    <div className="space-y-4 mb-4">
                      {exp.missions.map((mission, mIdx) => (
                        <div key={mIdx} className="bg-white/70 rounded-lg p-4">
                          <h4 className={`font-semibold ${colors.text} mb-2 flex items-center gap-2`}>
                            <Award size={16} />
                            {mission.title}
                          </h4>
                          <ul className="space-y-1">
                            {mission.tasks.map((task, tIdx) => (
                              <li key={tIdx} className="flex items-start gap-2 text-sm text-gray-700">
                                <span className={`${colors.text} mt-1 font-bold`}>•</span>
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className={`px-3 py-1 bg-white ${colors.text} rounded-full text-xs font-medium border ${colors.border} hover:scale-105 transition-transform`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Point sur la timeline */}
                  <div className={`hidden lg:block absolute top-8 ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} w-6 h-6 ${colors.bg} border-4 ${colors.border} rounded-full z-10`}></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}