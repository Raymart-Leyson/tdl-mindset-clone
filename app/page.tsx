export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          TDL Mindset Clone
        </h1>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Tailwind CSS is working!
        </p>
      </div>

      <div className="mt-12 flex gap-4">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
          Get Started
        </button>
        <button className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
          Learn More
        </button>
      </div>
    </main>
  );
}
