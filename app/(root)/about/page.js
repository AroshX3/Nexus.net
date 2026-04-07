import Link from "next/link";

export default function About() {
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold text-purple-500">About Nexus-Net</h1>

      <p className="mt-3 text-gray-600 dark:text-gray-400">
        Nexus-Net is a small collection of projects, ideas, and experiments
        built for fun, learning, and curiosity.
      </p>

      {/* 👤 NEW: ABOUT ME (IMPORTANT ADD) */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-yellow-500">
          Who made this?
        </h2>

        <p className="text-sm opacity-80">
          Hey, I'm Arosh. I'm a 15-year-old student from Bangladesh who likes
          building websites and trying out random ideas.
        </p>

        <p className="text-sm opacity-80">
          I study at Motijheel Ideal School and College, and I started learning
          coding not too long ago… now I spend way too much time on it 💀
        </p>

        <p className="text-sm opacity-80">
          Most of the stuff here is just me experimenting, learning, and
          sometimes breaking things and fixing them again.
        </p>
      </section>

      {/* Section */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-blue-500">What is this?</h2>

        <p className="text-sm opacity-80">
          Think of this as a central hub where different “nodes” connect. Each
          node represents a project, experiment, or idea I’ve worked on.
        </p>

        <p className="text-sm opacity-80">
          Some are complete. Some are still in progress. Some… are not meant to
          be accessed.
        </p>
      </section>

      {/* Section */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-green-500">
          Why does this exist?
        </h2>

        <p className="text-sm opacity-80">
          Mostly to learn and get better at coding.
        </p>

        <p className="text-sm opacity-80">
          Also because building random stuff is way more fun than just watching
          tutorials all day.
        </p>
      </section>

      {/* Section */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-pink-500">Access Notice</h2>

        <p className="text-sm opacity-80">
          This site is mostly open, but not everything is meant for everyone.
        </p>

        <p className="text-sm opacity-80">
          Some parts are hidden, unfinished, or just there for fun.
        </p>

        <p className="text-xs opacity-50">
          If you find something weird… yeah that’s probably intentional.
        </p>
      </section>
      <div className="my-16 text-center bg-blue-500 rounded-xl p-6 sm:p-10">
        <h2 className="text-white font-medium text-xl sm:text-3xl mb-3">
          Finished? You can go back to the Start
        </h2>

        <Link
          className="text-white text-lg sm:text-2xl hover:opacity-80 underline"
          href="/"
        >
          Go back
        </Link>
      </div>
    </main>
  );
}
