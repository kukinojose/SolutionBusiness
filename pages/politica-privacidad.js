import Head from 'next/head';
import Link from 'next/link';

export default function PoliticaPrivacidad() {
  return (
    <>
      <Head>
        <title>Política de Privacidad - Solution Business AI</title>
        <meta name="description" content="Lee nuestra política de privacidad y cómo protegemos tus datos en Solution Business AI." />
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8 text-neutral-content text-center">
          Política de Privacidad
        </h1>

        <section className="prose prose-neutral dark:prose-invert max-w-none">
          <p>
            En <strong>Solution Business AI</strong>, valoramos tu privacidad y nos comprometemos a proteger tu información personal. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tus datos.
          </p>

          <h2>1. Información que recopilamos</h2>
          <ul>
            <li>Datos de contacto: nombre, correo electrónico, teléfono (si lo proporcionas).</li>
            <li>Información que nos envías a través de formularios.</li>
            <li>Datos de uso del sitio web (cookies, analítica, etc.).</li>
          </ul>

          <h2>2. Cómo usamos tu información</h2>
          <p>Utilizamos tus datos para:</p>
          <ul>
            <li>Responder consultas y solicitudes de contacto.</li>
            <li>Mejorar nuestros servicios y el sitio web.</li>
            <li>Enviar comunicaciones relevantes si lo autorizas.</li>
          </ul>

          <h2>3. Almacenamiento y seguridad</h2>
          <p>
            Tus datos se almacenan de forma segura y sólo durante el tiempo necesario para cumplir los fines descritos. Aplicamos medidas técnicas y organizativas para proteger tu información.
          </p>

          <h2>4. Tus derechos</h2>
          <p>
            Puedes acceder, modificar o eliminar tus datos personales en cualquier momento escribiéndonos a:{' '}
            <a href="mailto:contacto@solutionbusiness.ai" className="text-primary">
              contacto@solutionbusiness.ai
            </a>
            .
          </p>

          <h2>5. Cambios a esta política</h2>
          <p>
            Nos reservamos el derecho de actualizar esta política. Te notificaremos cualquier cambio importante a través del sitio web o por email si corresponde.
          </p>

          <h2>6. Contacto</h2>
          <p>
            Si tienes preguntas sobre esta política, contáctanos en:{' '}
            <a href="mailto:contacto@solutionbusiness.ai" className="text-primary">
              contacto@solutionbusiness.ai
            </a>
          </p>
        </section>

        <div className="mt-10 text-center">
          <Link href="/" className="text-primary hover:underline text-sm">
            ← Volver al inicio
          </Link>
        </div>
      </main>
    </>
  );
}
