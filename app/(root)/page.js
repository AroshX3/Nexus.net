import Link from "next/link";

export default function Home() {
  return (
    <main className="px-4 sm:px-6 py-10 sm:py-12 max-w-5xl mx-auto">
  
      <section className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-blue-500 leading-tight">
          Hey, I'm Arosh
        </h1>

        <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-400">
          Just a student who likes coding and making random stuff
        </p>

        <p className="mt-4 text-xs sm:text-sm text-gray-500">
          This is basically my corner of the internet.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
        
        <div className="border border-gray-200 dark:border-gray-700 p-5 sm:p-6 rounded-xl">
          <h2 className="text-lg sm:text-xl font-semibold text-purple-500 mb-3">
            About Me
          </h2>

          <p className="text-sm text-gray-700">
            I'm from Bangladesh and I like building websites, even if they break
            sometimes (which they do).
          </p>

          <p className="mt-3 text-sm text-gray-700">
            I started learning coding recently and now I'm kinda addicted to it.
          </p>

          <p className="mt-3 text-sm text-gray-700">
            Most of the stuff I make is just me testing ideas and seeing what
            works.
          </p>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 p-5 sm:p-6 rounded-xl">
          <h2 className="text-lg sm:text-xl font-semibold text-green-500 mb-3">
            Basic Info
          </h2>

          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              <strong>Name:</strong> Masumor Rashid (Arosh)
            </li>
            <li>
              <strong>Age:</strong> 15
            </li>
            <li>
              <strong>School:</strong> Motijheel Ideal School and College
            </li>
            <li>
              <strong>Location:</strong> Dhaka, Bangladesh
            </li>
          </ul>
        </div>
      </section>

      {/* EXTRA PERSONAL STUFF */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="border border-gray-200 dark:border-gray-700 p-5 rounded-xl">
          <h2 className="text-lg font-semibold text-blue-500 mb-3">
            What I Like
          </h2>

          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Coding random ideas</li>
            <li>• Making websites look cool</li>
            <li>• Learning new tech stuff</li>
            <li>• Probably overthinking projects 😭</li>
          </ul>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 p-5 rounded-xl">
          <h2 className="text-lg font-semibold text-pink-500 mb-3">Goals</h2>

          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Get really good at coding</li>
            <li>• Build something people actually use</li>
            <li>• Not give up halfway</li>
          </ul>
        </div>
      </section>

      {/* PROJECT LINK */}
      <div className="my-16 text-center bg-blue-500 rounded-xl p-6 sm:p-10">
        <h2 className="text-white font-medium text-xl sm:text-3xl mb-3">
          Next You can visit
        </h2>

        <Link
          className="text-white text-lg sm:text-2xl hover:opacity-80 underline"
          href="/projectGrid"
        >
          My Projects
        </Link>
      </div>

      {/* TINY HINT */}
      <section className="text-center text-xs text-gray-400 px-4">
        <p>Some parts of this site are not for everyone.</p>
      </section>
    </main>
  );
}
