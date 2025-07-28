import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre Nosotros - Solution Business AI</title>
      </Head>

      <main className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-6">Sobre Nosotros</h1>
        <p className="text-lg mb-4">
          En Solution Business AI, ayudamos a empresas a transformar su presencia digital mediante soluciones basadas en inteligencia artificial.
        </p>
        <p className="text-lg mb-4">
          Nuestro equipo está compuesto por expertos en IA, marketing digital, desarrollo web y estrategia comercial.
        </p>
        <Link href="/" className="text-primary hover:underline">
          ← Volver al inicio
        </Link>
      </main>
    </>
  );
}
