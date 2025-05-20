import React, { useEffect } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-sql';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const sections = [
    { id: 'sobre-mi', title: 'Sobre mí' },
    { id: 'formacion', title: 'Formación' },
    { id: 'proyectos', title: 'Proyectos' },
    { id: 'habilidades', title: 'Habilidades Técnicas' },
    { id: 'contacto', title: 'Contacto' },
  ];

  const codeExamples = {
    python: `# Python Security Scanner
def scan_network(target):
    print(f"Scanning {target}...")
    vulnerabilities = []
    
    # Network scanning logic
    return vulnerabilities`,
    javascript: `// Automated Backup System
async function backupData(source, destination) {
  try {
    const data = await readSource(source);
    await encrypt(data);
    await writeDestination(destination);
    console.log('Backup completed');
  } catch (error) {
    console.error('Backup failed:', error);
  }
}`,
    java: `// Network Monitor
public class NetworkMonitor {
    public void startMonitoring() {
        new Thread(() -> {
            while(true) {
                checkNetworkStatus();
                Thread.sleep(1000);
            }
        }).start();
    }
}`
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const FadeInSection = ({ children }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <nav className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <motion.span 
                className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                JC.RR
              </motion.span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-gray-300 hover:text-purple-500 transition-colors relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.title}
                </motion.button>
              ))}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-purple-500 transition-colors"
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section className="pt-32 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            className="text-4xl sm:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            José Carlos Ruiz Ruiz
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl sm:text-2xl text-gray-400 mb-8"
          >
            <TypeAnimation
              sequence={[
                'Técnico en Sistemas Microinformáticos y Redes',
                2000,
                'Especialista en Ciberseguridad',
                2000,
                'Experto en Automatización',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          <motion.button
            onClick={() => scrollToSection('sobre-mi')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-purple-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Conoce más
          </motion.button>
        </div>
      </section>

      <FadeInSection>
        <section id="sobre-mi" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Sobre mí
            </h2>
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-purple-500/20">
              <p className="text-gray-300 leading-relaxed">
                Soy un apasionado de la tecnología y la seguridad informática, constantemente buscando nuevas formas de mejorar y automatizar procesos. Mi formación en Sistemas Microinformáticos y Redes me ha proporcionado una sólida base técnica, mientras que mi interés por la ciberseguridad me mantiene actualizado sobre las últimas tendencias y amenazas en el campo.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="formacion" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Formación
            </h2>
            <div className="grid gap-6">
              <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-2 text-purple-500">
                  Técnico en Sistemas Microinformáticos y Redes
                </h3>
                <p className="text-gray-400">2022 - 2024</p>
                <p className="text-gray-300 mt-4">
                  Formación especializada en:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                  <li>Administración de sistemas operativos</li>
                  <li>Configuración y mantenimiento de redes</li>
                  <li>Seguridad informática y ciberseguridad</li>
                  <li>Automatización de procesos</li>
                  <li>Gestión de bases de datos</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="proyectos" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Proyectos
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(codeExamples).map(([language, code]) => (
                <div key={language} className="bg-gray-800 p-6 rounded-lg shadow-xl border border-purple-500/20">
                  <h3 className="text-xl font-semibold mb-4 text-purple-500 capitalize">
                    {language}
                  </h3>
                  <pre className="rounded-lg overflow-x-auto">
                    <code className={`language-${language}`}>
                      {code}
                    </code>
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="habilidades" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Habilidades Técnicas
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4 text-purple-500">
                  Lenguajes de Programación
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>Java</li>
                  <li>SQL</li>
                  <li>Bash</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4 text-purple-500">
                  Sistemas y Redes
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Linux/Unix</li>
                  <li>Windows Server</li>
                  <li>Cisco Networking</li>
                  <li>Docker</li>
                  <li>Cloud Computing</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-4 text-purple-500">
                  Ciberseguridad
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Pentesting</li>
                  <li>Análisis de Malware</li>
                  <li>Seguridad de Red</li>
                  <li>Criptografía</li>
                  <li>Forense Digital</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="contacto" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Contacto
            </h2>
            <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-xl border border-purple-500/20">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-1 block w-full rounded-lg bg-gray-700 border-gray-600 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg transition-all hover:shadow-lg hover:shadow-purple-500/25"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar mensaje
                </motion.button>
              </form>
            </div>
          </div>
        </section>
      </FadeInSection>

      <footer className="bg-gray-900 py-8 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© 2024 José Carlos Ruiz Ruiz. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;