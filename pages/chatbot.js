import Head from 'next/head';
import Link from 'next/link';

export default function Chatbot() {
  return (
    <>
      <Head>
        <title>Chatbot IA - Solution Business AI</title>
        <meta
          name="description"
          content="Prueba nuestro chatbot inteligente basado en IA para atención personalizada y automatizada 24/7."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-neutral-content">
          Chatbot Inteligente con IA
        </h1>

        <section className="mb-12 text-center">
          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8 text-base-content/90">
            Nuestro chatbot está diseñado para ofrecer atención personalizada y
            soporte 24/7 a tus clientes, mejorando la experiencia y optimizando tus
            procesos comerciales.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-base-content/80">
            Implementamos tecnologías avanzadas de inteligencia artificial que
            entienden el contexto, responden rápidamente y aprenden con cada
            interacción.
          </p>
        </section>

        {/* Simulación de chatbot (puedes conectar aquí tu bot real o widget) */}
        <section
          aria-label="Simulación de Chatbot IA"
          className="bg-base-200 p-8 rounded-3xl shadow-lg"
        >
          <div className="mb-6 text-center text-primary font-semibold text-lg">
            Prueba nuestra demo:
          </div>

          <div className="border border-gray-400 rounded-lg p-4 bg-white text-left min-h-[300px] flex flex-col justify-between">
            <div className="flex-1 overflow-auto mb-4">
              {/* Aquí podrías integrar un chat real o iframe */}
              <p className="italic text-gray-600">Chatbot en desarrollo...</p>
            </div>
            <input
              type="text"
              placeholder="Escribe tu mensaje aquí..."
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              disabled
              aria-disabled="true"
            />
          </div>
        </section>

        <div className="mt-16 text-center">
          <Link href="/contacto">
            <a className="btn btn-primary btn-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              Contacta para implementar tu Chatbot
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}
