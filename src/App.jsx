import React from 'react';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: 'sobre-mi', title: 'Sobre mí' },
    { id: 'formacion', title: 'Formación' },
    { id: 'proyectos', title: 'Proyectos' },
    { id: 'habilidades', title: 'Habilidades Técnicas' },
    { id: 'contacto', title: 'Contacto' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-purple-500">JC.RR</span>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-gray-300 hover:text-purple-500 transition-colors"
                >
                  {section.title}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white"
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

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
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
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            José Carlos Ruiz Ruiz
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 mb-8">
            Técnico en Sistemas Microinformáticos y Redes
          </p>
          <p className="text-purple-500 text-lg mb-12">
            Especializado en Ciberseguridad y Automatización
          </p>
          <button
            onClick={() => scrollToSection('sobre-mi')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-colors"
          >
            Conoce más
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Sobre mí</h2>
          <div className="bg-gray-700 p-6 rounded-lg shadow-xl">
            <p className="text-gray-300 leading-relaxed">
              Soy un apasionado de la tecnología y la seguridad informática, constantemente buscando nuevas formas de mejorar y automatizar procesos. Mi formación en Sistemas Microinformáticos y Redes me ha proporcionado una sólida base técnica, mientras que mi interés por la ciberseguridad me mantiene actualizado sobre las últimas tendencias y amenazas en el campo.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="formacion" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Formación</h2>
          <div className="grid gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold mb-2 text-purple-500">
                Técnico en Sistemas Microinformáticos y Redes
              </h3>
              <p className="text-gray-400">2022 - 2024</p>
              <p className="text-gray-300 mt-2">
                Formación especializada en administración de sistemas, redes y seguridad informática.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold mb-2 text-purple-500">
                Automatización de Backups
              </h3>
              <p className="text-gray-300">
                Sistema automatizado para la gestión y respaldo de datos críticos.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold mb-2 text-purple-500">
                Monitorización de Red
              </h3>
              <p className="text-gray-300">
                Implementación de sistema de monitorización de red en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Habilidades Técnicas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-purple-500">
                Sistemas Operativos
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>Windows Server</li>
                <li>Linux</li>
                <li>MacOS</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-purple-500">
                Redes
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>Configuración de routers</li>
                <li>Protocolos de red</li>
                <li>Seguridad de red</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-purple-500">
                Seguridad
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>Análisis de vulnerabilidades</li>
                <li>Firewall</li>
                <li>Criptografía</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Contacto</h2>
          <div className="max-w-lg mx-auto bg-gray-700 p-6 rounded-lg shadow-xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-gray-600 border-gray-500 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-gray-600 border-gray-500 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md bg-gray-600 border-gray-500 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© 2024 José Carlos Ruiz Ruiz. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;