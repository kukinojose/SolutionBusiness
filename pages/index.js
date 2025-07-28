import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [theme, setTheme] = useState('light');

  const services = [
    {
      title: "Chatbots Inteligentes",
      description: "Soluciones automatizadas para atención al cliente 24/7 con IA avanzada.",
      icon: "🤖",
    },
    {
      title: "Marketing Digital",
      description: "Campañas personalizadas para maximizar tu alcance y conversión.",
      icon: "📈",
    },
    {
      title: "Diseño Web Profesional",
      description: "Webs modernas, rápidas y adaptadas a móviles para potenciar tu marca.",
      icon: "💻",
    },
    {
      title: "Equipo Comercial",
      description: "Setter y closers 24/7 para captar clientes y cerrar ventas.",
      icon: "🤝",
    },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <>
      <Head>
        <title>Solution Business AI - Soluciones IA para tu empresa</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <body className="font-inter bg-base-100 text-base-content transition-colors duration-500 scroll-smooth" data-theme={theme}>
        {/* Header */}
        <header className="bg-neutral text-neutral-content p-4 md:px-12 flex justify-between items-center shadow-md sticky top-0 z-50">
          <h1 className="font-extrabold text-2xl tracking-wide">solutionbusiness.ai</h1>
          <nav className="flex items-center space-x-6">
            <a href="#services" className="hover:text-primary font-semibold">Servicios</a>
            <a href="/chatbot" className="hover:text-primary font-semibold">Chatbot</a>
            <button
              id="theme-toggle"
              className="btn btn-ghost btn-circle ml-4 text-lg"
              onClick={toggleTheme}
              aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
              title={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="text-center bg-gradient-to-r from-indigo-600 via-blue-500 to-blue-400 text-white py-24 px-6 md:px-0">
          <h2 className="text-5xl md:text-6xl font-extrabold max-w-4xl mx-auto leading-tight mb-6 drop-shadow-lg">
            Potencia tu empresa con soluciones inteligentes basadas en IA
          </h2>
          <p className="text-xl md:text-2xl max-w-xl mx-auto mb-12 drop-shadow-md">
            Chatbots, marketing digital, diseño web y un equipo comercial experto trabajando para ti 24/7.
          </p>
          <a
            href="/chatbot"
            className="btn btn-primary btn-lg font-bold shadow-lg hover:shadow-xl rounded-lg"
          >
            Prueba nuestro Chatbot IA
          </a>
        </section>

        {/* Servicios */}
        <main>
          <section id="services" className="max-w-6xl mx-auto py-20 px-6 md:px-0">
            <h3 className="text-4xl font-extrabold text-center mb-16 text-neutral-content">
              Nuestros Servicios
            </h3>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ title, description, icon }) => (
                <article
                  key={title}
                  className="card bg-base-200 shadow-lg p-6 rounded-3xl hover:shadow-2xl focus-within:ring-4 focus-within:ring-primary ring-offset-base-100 ring-offset-2"
                  tabIndex="0"
                >
                  <div className="text-7xl mb-6">{icon}</div>
                  <h4 className="text-primary font-bold text-2xl mb-3">{title}</h4>
                  <p className="text-base-content/80">{description}</p>
                </article>
              ))}
            </div>
          </section>
        </main>

        {/* Ventajas */}
        <section className="bg-primary text-primary-content text-center py-20 px-6 md:px-0">
          <h3 className="text-4xl font-extrabold mb-8">¿Por qué elegirnos?</h3>
          <p className="max-w-xl mx-auto text-lg mb-14">
            Nuestro equipo combina tecnología avanzada con experiencia comercial y marketing digital para llevar tu empresa al siguiente nivel.
          </p>
          <ul className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {[
              "✅ Atención 24/7 con IA",
              "✅ Estrategias personalizadas",
              "✅ Equipo comercial experto",
              "✅ Resultados medibles",
            ].map((item) => (
              <li
                key={item}
                className="font-semibold bg-primary-content text-primary rounded-xl px-8 py-4 shadow-md w-56 hover:scale-105 transition-transform"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="bg-neutral text-neutral-content py-8 px-6 text-center text-sm">
          <p>© 2025 Solution Business AI. Todos los derechos reservados.</p>
          <p className="mt-2">
            <a
              href="mailto:contacto@solutionbusiness.ai"
              className="text-primary hover:underline"
            >
              contacto@solutionbusiness.ai
            </a>{" "}
            |{" "}
            <a href="/politica-privacidad" className="text-primary hover:underline">
              Política de Privacidad
            </a>
          </p>
        </footer>
      </body>
    </>
  );
}
