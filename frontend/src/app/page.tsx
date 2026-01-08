export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            TechLog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Developer Portfolio & Blog
          </p>
        </header>

        <nav className="flex justify-center gap-8 mb-16">
          <a
            href="/blog"
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Blog
          </a>
          <a
            href="/portfolio"
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Portfolio
          </a>
          <a
            href="/resume"
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Resume
          </a>
        </nav>

        <section className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Welcome
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            This is a personal tech blog and portfolio website built with
            Next.js and NestJS. Explore my blog posts, check out my projects,
            and learn more about my experience.
          </p>
        </section>
      </div>
    </main>
  );
}
