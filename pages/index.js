import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ globalData }) {
  const services = [
    {
      title: "🤖 Chatbots Inteligentes",
      description: "Automatiza tu atención al cliente 24/7 con IA avanzada.",
    },
    {
      title: "📈 Marketing Digital",
      description: "Estrategias efectivas para captar y convertir clientes.",
    },
    {
      title: "💻 Diseño Web Profesional",
      description: "Sitios modernos, rápidos y optimizados para móviles.",
    },
    {
      title: "🤝 Equipo Comercial",
      description: "Setters y closers 24/7 para impulsar tus ventas.",
    },
  ];

  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />

      <main className="w-full px-6">
        <section className="text-center py-20">
          <h1 className="mb-6 text-4xl md:text-6xl font-bold">
            Potencia tu empresa con IA
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Soluciones inteligentes para escalar tu negocio con automatización, marketing y ventas 24/7.
          </p>
        </section>

        <section className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto pb-24">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-white/10 dark:bg-black/30 p-6 backdrop-blur-lg border border-gray-200/20 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-base text-gray-700 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </section>
      </main>

      <Footer copyrightText={globalData.footerText} />
      
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();
  return { props: { globalData } };
}
