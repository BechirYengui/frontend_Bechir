'use client';

import { motion } from 'framer-motion';
import { Code, Cpu, Network, Globe, ExternalLink, GitBranch } from 'lucide-react';

const projects = [
  {
    title: 'Développement de Driver pour Périphériques Embarqués',
    institution: 'IMT Atlantique',
    description: 'Programmation C pour la conception d\'un driver bas niveau permettant l\'interfaçage avec des périphériques matériels. Implémentation de la gestion des interruptions, développement de la couche d\'abstraction matérielle (HAL), optimisation des performances et gestion de la mémoire.',
    technologies: ['C', 'Linux Kernel', 'Makefile', 'GPIO', 'Interruptions matérielles', 'DMA'],
    icon: Cpu,
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Robot Mobile Autonome avec Vision',
    institution: 'IMT Atlantique',
    description: 'Développement C++ et Python pour la conception d\'un robot mobile équipé d\'un système de vision autonome. Développement d\'algorithmes de contrôle multi-axes en C++, intégration de capteurs LiDAR et caméras avec traitement temps réel, implémentation d\'algorithmes SLAM pour cartographie et localisation.',
    technologies: ['C++', 'Python', 'ROS', 'OpenCV', 'Raspberry Pi', 'LiDAR'],
    icon: Code,
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Échange de Données en Temps Réel dans un Réseau Électrique',
    institution: 'SUP\'COM',
    description: 'Programmation C et Arduino pour la mise en réseau de cartes Renesas Synergy. Développement en C pour synchronisation de cartes électroniques, gestion des communications réseau et analyse des flux temps réel, implémentation de protocoles de communication embarqués.',
    technologies: ['Arduino', 'C', 'Ethernet', 'Bash', 'Renesas Synergy'],
    icon: Network,
    color: 'green',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    title: 'Gestion de Messages MQTT pour Jumeaux Numériques',
    institution: 'Konk Ar Lab',
    description: 'Conception d\'une application web de gestion de broker MQTT pour jumeaux numériques. Architecture logicielle pour communication temps réel et intégration CI/CD avec GitLab.',
    technologies: ['MQTT', 'Python', 'Flask', 'Selenium', 'CI/CD GitLab'],
    icon: Globe,
    color: 'orange',
    gradient: 'from-orange-500 to-red-500'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projets Techniques Majeurs
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez mes projets académiques et techniques démontrant mes compétences en systèmes embarqués et développement logiciel
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                          <IconComponent size={32} />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                            {project.institution}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <GitBranch size={18} className={`text-${project.color}-600`} />
                        <span className="font-semibold text-gray-700">Technologies :</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 bg-${project.color}-50 text-${project.color}-700 border border-${project.color}-200 rounded-full text-sm font-medium hover:bg-${project.color}-100 transition-colors`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <button className={`flex items-center gap-2 text-${project.color}-600 hover:text-${project.color}-700 font-semibold group-hover:gap-3 transition-all`}>
                        <span>Voir les détails</span>
                        <ExternalLink size={18} className="transform group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 mb-4">
              Vous avez un projet en tête ?
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Discutons-en ensemble
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;