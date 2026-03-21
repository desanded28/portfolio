export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="fade-up max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Let&apos;s connect
          </h2>
          <div className="w-12 h-0.5 bg-teal-500 mx-auto mb-6" />
          <p className="text-gray-400 mb-4">
            I&apos;m looking for placement year opportunities for 2026/2027. If
            you&apos;re building something interesting, I&apos;d love to hear
            about it.
          </p>
          <p className="text-gray-500 text-sm mb-10">
            Open to 12-month placements in Germany, Austria, or the UK.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="mailto:sanderfloriauni@gmail.com"
              className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors shadow-md hover:shadow-lg"
            >
              sanderfloriauni@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <a
              href="https://github.com/desanded28"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            {/* TODO: Add LinkedIn URL when available */}
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Based in Edinburgh, Scotland
          </p>
        </div>
      </div>
    </section>
  );
}
