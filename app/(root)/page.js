import Link from "next/link";

export default function Home() {
  return (
    <main className="px-4 sm:px-6 py-10 sm:py-12 max-w-5xl mx-auto text-[#2d241d] dark:text-[#f3e7d3]">
      <section className="text-center text-[#000000b7] mb-12 sm:mb-16">
        <h1 className="text-3xl  sm:text-5xl md:text-6xl font-serif font-bold leading-tight">
          Hey, I'm Arosh
        </h1>

        <p className="mt-3 text-base sm:text-lg opacity-80">
          Just a student who likes coding and making random stuff
        </p>

        <p className="mt-4 text-xs sm:text-sm opacity-60">
          This is basically my corner of the internet.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
        <div className="border border-[#c8b79d] dark:border-[#4d3e34] bg-[#f8f0e2] dark:bg-[#201914] p-5 sm:p-6 rounded-sm">
          <h2 className="text-lg sm:text-xl font-serif font-bold text-[#7b5cc8] mb-3">
            About Me
          </h2>

          <p className="text-sm leading-6 opacity-85">
            I'm from Bangladesh and I like building websites, even if they break
            sometimes.
          </p>

          <p className="mt-3 text-sm leading-6 opacity-85">
            I started learning coding recently and now I'm kinda addicted to it.
          </p>

          <p className="mt-3 text-sm leading-6 opacity-85">
            Most of the stuff I make is just me testing ideas and seeing what
            works.
          </p>
        </div>

        <div className="border border-[#c8b79d] dark:border-[#4d3e34] bg-[#f8f0e2] dark:bg-[#201914] p-5 sm:p-6 rounded-sm">
          <h2 className="text-lg sm:text-xl font-serif font-bold text-[#2e8b57] mb-3">
            Basic Info
          </h2>

          <ul className="text-sm space-y-2 opacity-85">
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

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="border border-[#c8b79d] dark:border-[#4d3e34] bg-[#f8f0e2] dark:bg-[#201914] p-5 rounded-sm">
          <h2 className="text-lg font-serif font-bold text-[#3c74c9] mb-3">
            What I Like
          </h2>

          <ul className="text-sm space-y-2 opacity-85">
            <li>• Coding random ideas</li>
            <li>• Making websites look cool</li>
            <li>• Learning new tech stuff</li>
            <li>• Probably overthinking projects</li>
          </ul>
        </div>

        <div className="border border-[#c8b79d] dark:border-[#4d3e34] bg-[#f8f0e2] dark:bg-[#201914] p-5 rounded-sm">
          <h2 className="text-lg font-serif font-bold text-[#d45b8c] mb-3">
            Goals
          </h2>

          <ul className="text-sm space-y-2 opacity-85">
            <li>• Get really good at coding</li>
            <li>• Build something people actually use</li>
            <li>• Not give up halfway</li>
          </ul>
        </div>
      </section>

      <div className="my-16 text-center bg-[#d9c3a1] dark:bg-[#3a2a22] rounded-sm border border-[#b89f78] dark:border-[#5a463a] p-6 sm:p-10">
        <h2 className="text-[#2d241d] dark:text-[#f3e7d3] font-serif font-bold text-xl sm:text-3xl mb-3">
          Next you can visit
        </h2>

        <Link
          className="text-[#2d241d] dark:text-[#f3e7d3] text-lg sm:text-2xl hover:underline underline-offset-4"
          href="/projectGrid"
        >
          My Projects
        </Link>
      </div>

      <section className="text-center text-[#000000c0] text-xs opacity-60 px-4">
        <p>Some parts of this site are not for everyone.</p>
      </section>
    </main>
  );
}
