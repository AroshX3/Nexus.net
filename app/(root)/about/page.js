import Link from "next/link";

export default function About() {
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto text-[#2d241d] dark:text-[#f3e7d3]">
      <h1 className="text-[45px] text-[#000000b7] font-serif font-bold">
        About Nexus-Net
      </h1>

      <p className="mt-3 text-[#222] opacity-80 leading-7">
        Nexus-Net is a small collection of projects, ideas, and experiments
        built for fun, learning, and curiosity.
      </p>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-serif font-bold text-[#7b5cc8]">
          Who made this?
        </h2>

        <p className="text-sm text-[#222] opacity-80 leading-6">
          Hey, I'm Arosh. I'm a 15-year-old student from Bangladesh who likes
          building websites and trying random ideas.
        </p>

        <p className="text-sm text-[#222] opacity-80 leading-6">
          I study at Motijheel Ideal School and College, and I started learning
          coding not too long ago. Now I spend way too much time on it.
        </p>

        <p className="text-sm text-[#222] opacity-80 leading-6">
          Most of the stuff here is just me experimenting, learning, and fixing
          things after I break them.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-serif font-bold text-[#3c74c9]">
          What is this?
        </h2>

        <p className="text-sm text-[#222] opacity-80 leading-6">
          Think of this as a small hub where my projects connect. Each one is
          something I made, tested, or wanted to try.
        </p>

        <p className="text-sm text-[#222] opacity-80 leading-6">
          Some are complete. Some are still in progress. Some are hidden just
          for fun.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-serif font-bold text-[#2e8b57]">
          Why does this exist?
        </h2>

        <p className="text-sm text-[#222] opacity-80 leading-6">
          Mostly to learn and get better at coding.
        </p>

        <p className="text-sm text-[#222] opacity-80 leading-6">
          Also because building random stuff is way more fun than just watching
          tutorials all day.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-serif font-bold text-[#d45b8c]">
          Access notice
        </h2>

        <p className="text-sm text-[#222] opacity-80 leading-6">
          This site is mostly open, but not everything is meant for everyone.
        </p>

        <p className="text-sm text-[#222] opacity-80 leading-6">
          Some parts are hidden, unfinished, or just there for fun.
        </p>

        <p className="text-xs text-[#222] opacity-60">
          If you find something weird… yeah, that is probably intentional.
        </p>
      </section>

      <div className="my-16 text-center bg-[#d9c3a1] dark:bg-[#3a2a22] rounded-sm border border-[#b89f78] dark:border-[#5a463a] p-6 sm:p-10">
        <h2 className="text-[#2d241d] dark:text-[#f3e7d3] font-serif font-bold text-xl sm:text-3xl mb-3">
          Finished? Go back to the start
        </h2>

        <Link
          className="text-[#2d241d] dark:text-[#f3e7d3] text-lg sm:text-2xl hover:underline underline-offset-4"
          href="/"
        >
          Go back
        </Link>
      </div>
    </main>
  );
}
