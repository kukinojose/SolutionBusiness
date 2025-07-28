import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contacto - Solution Business AI</title>
        <meta name="description" content="Contáctanos para implementar soluciones de inteligencia artificial en tu empresa." />
      </Head>

      <main className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-neutral-content">Contáctanos</h1>
        <p className="text-lg text-center mb-12 text-base-content/80">
          ¿Tienes preguntas? ¿Quieres implementar un chatbot o mejorar tu estrategia digital?
          Completa el formulario o escríbenos directamente.
        </p>

        <form
          className="grid gap-6 bg-base-200 p-8 rounded-2xl shadow-lg"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          {/* Honeypot */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              No llenar: <input name="bot-field" />
            </label>
          </p>

          <div>
            <label htmlFor="name" className="block font-semibold mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full input input-bordered"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full input input-bordered"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full textarea textarea-bordered"
            ></textarea>
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary text-lg px-8">
              Enviar Mensaje
            </button>
          </div>
        </form>

        <p className="text-sm mt-8 text-center text-base-content/70">
          También puedes escribirnos a{' '}
          <a
            href="mailto:contacto@solutionbusiness.ai"
            className="text-primary hover:underline"
          >
            contacto@solutionbusiness.ai
          </a>
        </p>

        <div className="mt-10 text-center">
          <Link href="/" className="text-primary hover:underline text-sm">
            ← Volver al inicio
          </Link>
        </div>
      </main>
    </>
  );
}
