import Head from 'next/head';
import Link from 'next/link';

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

export default function Servicios() {
  return (
    <>
      <Head>
        <title>Servicios - Solution Business AI</title>
        <meta
          name="description"
          content="Descubre nuestros servicios: chatbots inteligentes, marketing digital, diseño web y equipo comercial para potenciar tu negocio."
        />
      </Head>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-neutral-content">
          Nuestros Servicios
        </h1>

        <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon }) => (
            <article
              key={title}
              className="card bg-base-200 shadow-lg p-8 rounded-3xl hover:shadow-2xl transition-shadow cursor-default focus-within:ring-4 focus-within:ring-primary ring-offset-base-100 ring-offset-2"
              tabIndex="0"
              aria-labelledby={`${title}-title`}
              aria-describedby={`${title}-desc`}
            >
              <div
                aria-hidden="true"
                className="text-8xl mb-6 select-none transition-transform duration-300 hover:scale-110"
              >
                {icon}
              </div>
              <h2
                id={`${title}-title`}
                className="text-primary font-bold text-3xl mb-4"
              >
                {title}
              </h2>
              <p
                id={`${title}-desc`}
                className="text-base-content/90 leading-relaxed text-lg"
              >
                {description}
              </p>
            </article>
          ))}
        </section>

        <div className="mt-16 text-center">
          <Link href="/contacto">
            <a className="btn btn-primary btn-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              Contacta con Nosotros
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}
