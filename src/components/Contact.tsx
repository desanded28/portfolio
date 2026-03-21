export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="fade-up max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Let&apos;s connect
          </h2>
          <div className="w-12 h-0.5 bg-teal-500 mx-auto mb-6" />
          <p className="text-gray-400 mb-10">
            I&apos;m looking for placement year opportunities for 2026/2027. If
            you&apos;re building something interesting, I&apos;d love to hear
            about it.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="mailto:sanderfloriauni@gmail.com"
              className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors shadow-md hover:shadow-lg"
            >
              sanderfloriauni@gmail.com
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            Based in Edinburgh, Scotland
          </p>
        </div>
      </div>
    </section>
  );
}
